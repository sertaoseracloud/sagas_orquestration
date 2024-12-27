import * as df from "durable-functions"

const orchestrator = df.orchestrator(function* (context) {
    const transactionData = {
        withdrawalResult: null,
        depositResult: null,
    };

    const transaction = context.df.getInput();

    try {
        // Step 1: Withdraw funds
        transactionData.withdrawalResult = yield context.df.callActivity("WithdrawFunds", transaction);

        // Step 2: Deposit funds
        transactionData.depositResult = yield context.df.callActivity("DepositFunds", transaction);

        // Success: Return results
        return { success: true, data: transactionData };
    } catch (error) {
        // Compensate in reverse order of execution
        if (transactionData.depositResult) {
            yield context.df.callActivity("CompensateDeposit", transactionData.depositResult);
        }
        if (transactionData.withdrawalResult) {
            yield context.df.callActivity("CompensateWithdraw", transactionData.withdrawalResult);
        }

        // Return failure response
        return { success: false, error: error.message };
    }
});

export default orchestrator;

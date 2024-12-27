import { AzureFunction, Context } from "@azure/functions"

const activityFunction: AzureFunction = async function (context: Context, transaction: Transaction): Promise<DepositResult> {
    const { toAccount, amount } = transaction;
    // Simulate depositing funds
    const result = { toAccount, amount, status: "deposited" };
    context.log(`Funds deposited: ${amount} to account ${toAccount}`);

    // Simulate failure for demonstration (uncomment to test failure)
    if (toAccount === "Account2" && amount === 500) {
        throw new Error("Deposit service unavailable.");
    }
    return result;
};

export default activityFunction;

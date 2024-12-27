import { AzureFunction, Context } from "@azure/functions"

const activityFunction: AzureFunction = async function (context: Context, depositData: DepositResult): Promise<void> {
    context.log(`Compensating deposit for account ${depositData.toAccount}`);
    // Add logic to undo the deposit, for example, withdraw the funds from the account
    // Simulate compensating the deposit
};

export default activityFunction;

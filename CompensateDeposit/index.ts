import { AzureFunction, Context } from "@azure/functions"

const activityFunction: AzureFunction = async function (context: Context, withdrawalData: WithdrawalResult): Promise<void> {
    context.log(`Compensating withdrawal for account ${withdrawalData.fromAccount}`);
    // Add logic to undo the withdrawal, for example, add the funds back to the account
    // Simulate compensating the withdrawal
};

export default activityFunction;

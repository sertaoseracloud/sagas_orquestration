import { AzureFunction, Context } from "@azure/functions"

const activityFunction: AzureFunction = async function (context: Context, transaction:Transaction): Promise<WithdrawalResult> {
    const { fromAccount, amount } = transaction;
    // Simulate withdrawing funds
    const result = { fromAccount, amount, status: "withdrawn" };
    context.log(`Funds withdrawn: ${amount} from account ${fromAccount}`);
    if (fromAccount === "Account1" && amount === 500) {
        throw new Error("Insufficient funds.");
    }
    return result;
};

export default activityFunction;

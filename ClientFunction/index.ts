import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as df from "durable-functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const client = df.getClient(context);
    const transaction = req.body; // Expects { fromAccount, toAccount, amount }

    const instanceId = await client.startNew("OrderOrchestrator", undefined, transaction);

    context.log(`Started orchestration with ID = '${instanceId}'.`);

    context.res = {
        status: 202,
        body: {
            message: "Transaction started.",
            instanceId: instanceId,
        },
    };
};

export default httpTrigger;
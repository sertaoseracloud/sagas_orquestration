interface Transaction {
    fromAccount: string;
    toAccount: string;
    amount: number;
}

interface WithdrawalResult {
    fromAccount: string;
    status: string;
    amount: number;
}

interface DepositResult {
    toAccount: string;
    status: string;
    amount: number;
}

interface TransactionData {
    withdrawalResult: WithdrawalResult | null,
    depositResult: DepositResult | null,
}
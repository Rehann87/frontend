import React from 'react';

type Transaction = {
  id: number;
  date: string;
  description: string;
  amount: number;
};

type Props = {};

const TransactionHistory = (props: Props) => {
  const transactions: Transaction[] = [
    { id: 1, date: '2024-09-01', description: 'Payment to Supplier A', amount: -200 },
    { id: 2, date: '2024-09-05', description: 'Invoice from Client B', amount: 500 },
    { id: 3, date: '2024-09-10', description: 'Payment for Service C', amount: -150 },
    { id: 4, date: '2024-09-15', description: 'Refund from Supplier D', amount: 100 },
  ];

  return (
    <div className='h-full w-full bg-slate-500   text-zinc-400'>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
      <table className="min-w-full border-collapse border border-gray-300 bg-slate-700">
        <thead className="bg-gray-500">
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id} className="hover:bg-slate-500">
              <td className="border border-gray-300 p-2">{transaction.id}</td>
              <td className="border border-gray-300 p-2">{transaction.date}</td>
              <td className="border border-gray-300 p-2">{transaction.description}</td>
              <td className={`border border-gray-300 p-2 ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                {transaction.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default TransactionHistory;

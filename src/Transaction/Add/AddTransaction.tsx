


// import React from 'react';

// type Transaction = {
//   id: number;
//   amount: number;
//   type: string;
//   remark: string;
//   date: string;
// };

// type Props = {
//   transactions: Transaction[];
// };

// const TransactionShow: React.FC<Props> = ({ transactions }) => {
//   return (
//    <div className='h-full w-full  bg-slate-500  text-gray-300'>
//     <span className=' flex  items-center justify-center pt-[100px]'>
//       <div className="bg-slate-600   rounded-lg shadow-md p-5 w-full max-w-3xl">
//         <h1 className="text-2xl font-semibold text-center  mb-4">Transactions</h1>
//         <table className="min-w-full border-collapse">
//           <thead>
//             <tr className="text-zinc-400 bg-slate-500">
//               <th className="border px-4 py-2 text-left">Amount</th>
//               <th className="border px-4 py-2 text-left">Type</th>
//               <th className="border px-4 py-2 text-left">Remark</th>
//               <th className="border px-4 py-2 text-left">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {transactions.length > 0 ? (
//               transactions.map((transaction, index) => (
//                 <tr key={transaction.id} className={`border-b ${index % 2 === 0 ? 'bg-slate-600' : 'bg-gray-50'}`}>
//                   <td className="border px-4 py-2">{transaction.amount}</td>
//                   <td className="border px-4 py-2">{transaction.type}</td>
//                   <td className="border px-4 py-2">{transaction.remark}</td>
//                   <td className="border px-4 py-2">{transaction.date}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={4} className="border px-4 py-2 text-center text-gray-500">
//                   No transactions found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </span> 

//    </div>
//   );
// };

// export default TransactionShow;


import React from 'react';

type Transaction = {
  id: number;
  amount: number;
  type: string;
  remark: string;
  date: string;
};

type Props = {
  transactions: Transaction[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onAddNew: () => void;
};

const TransactionShow: React.FC<Props> = ({ transactions, onEdit, onDelete, onAddNew }) => {
  return (
    <div className='h-full w-full bg-slate-500 text-gray-300'>
      <span className='flex items-center justify-center pt-[100px]'>
        <div className="bg-slate-600 rounded-lg shadow-md p-5 w-full max-w-3xl">
          <div className="flex justify-between mb-4">
            <h1 className="text-2xl font-semibold text-center">Transactions</h1>
            <button 
              onClick={onAddNew} 
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Add New Transaction
            </button>
          </div>
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="text-zinc-400 bg-slate-500">
                <th className="border px-4 py-2 text-left">Amount</th>
                <th className="border px-4 py-2 text-left">Type</th>
                <th className="border px-4 py-2 text-left">Remark</th>
                <th className="border px-4 py-2 text-left">Date</th>
                <th className="border px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length > 0 ? (
                transactions.map((transaction, index) => (
                  <tr key={transaction.id} className={`border-b ${index % 2 === 0 ? 'bg-slate-600' : 'bg-gray-50'}`}>
                    <td className="border px-4 py-2">{transaction.amount}</td>
                    <td className="border px-4 py-2">{transaction.type}</td>
                    <td className="border px-4 py-2">{transaction.remark}</td>
                    <td className="border px-4 py-2">{transaction.date}</td>
                    <td className="border px-4 py-2">
                      <button 
                        onClick={() => onEdit(transaction.id)} 
                        className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 mr-2"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => onDelete(transaction.id)} 
                        className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="border px-4 py-2 text-center text-gray-500">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </span>
    </div>
  );
};

export default TransactionShow;



import React, { useEffect, useState } from 'react';

import TransactionShow from '../../Transaction/Add/AddTransaction';

const TransactionShowWrapper = () => {
  const [transactions, setTransactions] = useState([ 
{id:1,date:11/22/8888,remark:"kjhgf",type:"online",amount:3000}

  ]);

  

  return <TransactionShow transactions={transactions} />;
};

export default TransactionShowWrapper;

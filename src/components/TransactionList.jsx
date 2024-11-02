import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  return (
    <>{
      transactions.length>0?(<div>
        <h3>History</h3>
        <ul id="list" className="list">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      </div>):(null)
    }
    </>
  );
}

export default TransactionList;

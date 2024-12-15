import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      {transactions.length > 0 ? (
        <ul className="list">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      ) : (
        <p style={{ color: "#bbb", textAlign: "center" }}>
          No transactions yet.
        </p>
      )}
    </>
  );
}

export default TransactionList;

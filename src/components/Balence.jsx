import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balence() {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h4>Your Balence</h4>
      <h1 id="balance">${total}</h1>
    </div>
  );
}

export default Balence;

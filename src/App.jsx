import React from "react";
import Header from "./components/Header";
import "./App.css";
import Balence from "./components/Balence";
import Incomeexpense from "./components/Incomeexpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="pad">
      <GlobalProvider>
        <Header></Header>
        <div className="container">
          <Balence />
          <Incomeexpense></Incomeexpense>
          <TransactionList></TransactionList>
          <AddTransaction></AddTransaction>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;

import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  transactions: [
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

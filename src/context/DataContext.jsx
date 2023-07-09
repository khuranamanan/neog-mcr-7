/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

const DataContext = createContext();

export default function DataProvider({ children }) {
  return <DataContext.Provider>{children}</DataContext.Provider>;
}

export function useData() {
  return useContext(DataContext);
}

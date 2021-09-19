import React, { useState } from "react";

let DataContext = React.createContext();

export default DataContext;

export let DataProvider = ({ children }) => {
  const [DataSet, setDataSet] = useState([]);
  return (
    <DataContext.Provider value={{ DataSet, setDataSet }}>
      {children}
    </DataContext.Provider>
  );
};

import React, { useState } from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [stepCount, setStepCount] = useState(0)
  return (
    <AppContext.Provider
      value={{
        stepCount, 
        setStepCount
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

import { useState, createContext, useContext } from 'react';

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const contextValue = { habits, setHabits };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;

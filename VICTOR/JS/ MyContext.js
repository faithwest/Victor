import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [websiteName, setWebsiteName] = useState('Videography Website');

  return (
    <MyContext.Provider value={{ websiteName, setWebsiteName }}>
      {children}
    </MyContext.Provider>
  );
};

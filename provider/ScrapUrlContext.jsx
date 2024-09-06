"use client";
import React, { createContext, useState, useContext } from "react";

const ScrapUrlContext = createContext();

export const useScrapUrl = () => useContext(ScrapUrlContext);

export const ScrapUrlProvider = ({ children }) => {
  const [scrapUrl, setScrapUrl] = useState("");

  return (
    <ScrapUrlContext.Provider value={{ scrapUrl, setScrapUrl }}>
      {children}
    </ScrapUrlContext.Provider>
  );
};

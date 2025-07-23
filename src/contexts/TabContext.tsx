import React, { createContext } from 'react';

interface TabContextType {
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
    registerTab: (ref: React.RefObject<HTMLButtonElement>) => number;
    tabRefs: React.RefObject<HTMLButtonElement>[];
  }
  
export const TabContext = createContext<TabContextType | undefined>(undefined);
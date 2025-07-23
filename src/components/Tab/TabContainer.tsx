import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { TabContext } from '../../contexts/TabContext';
import { TabList } from './TabList';
import { Tab } from './Tab';
import { TabPanel } from './TabPanel';

interface TabContainerProps {
  children: ReactNode;
  defaultIndex?: number;
}

export function TabContainer({ children, defaultIndex = 0 }: TabContainerProps) {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const [tabRefs, setTabRefs] = useState<React.RefObject<HTMLButtonElement>[]>([]);

  const registerTab = (ref: React.RefObject<HTMLButtonElement>) => {
    setTabRefs((prev) => [...prev, ref]);
    return tabRefs.length;
  };

  return (
    <TabContext.Provider value={{ selectedIndex, setSelectedIndex, registerTab, tabRefs }}>
      <div>{children}</div>
    </TabContext.Provider>
  );
}

TabContainer.TabList = TabList;
TabContainer.Tab = Tab;
TabContainer.TabPanel = TabPanel; 
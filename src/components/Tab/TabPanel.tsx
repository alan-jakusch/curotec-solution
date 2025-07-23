import { useContext } from 'react';
import type { ReactNode } from 'react';
import { TabContext } from '../../contexts/TabContext';

interface TabPanelProps {
  children: ReactNode;
  index: number;
}

export function TabPanel({ children, index }: TabPanelProps) {
  const context = useContext(TabContext);
  if (!context) throw new Error('TabPanel must be used within a TabContainer');
  const { selectedIndex } = context;
  return (
    <div
      role="tabpanel"
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      hidden={selectedIndex !== index}
      className="p-4"
    >
      {selectedIndex === index && children}
    </div>
  );
}
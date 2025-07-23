import React, { useContext } from 'react';
import type { ReactNode, KeyboardEvent } from 'react';
import { TabContext } from '../../contexts/TabContext';

interface TabProps {
  children: ReactNode;
  index: number;
}

export function Tab({ children, index }: TabProps) {
  const context = useContext(TabContext);
  if (!context) throw new Error('Tab must be used within a TabContainer');
  const { selectedIndex, setSelectedIndex, registerTab, tabRefs } = context;
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    registerTab(ref);
  }, [registerTab]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (!tabRefs.length) return;
    let newIndex = index;
    if (e.key === 'ArrowRight') {
      newIndex = (index + 1) % tabRefs.length;
      setSelectedIndex(newIndex);
      tabRefs[newIndex]?.current?.focus();
    } else if (e.key === 'ArrowLeft') {
      newIndex = (index - 1 + tabRefs.length) % tabRefs.length;
      setSelectedIndex(newIndex);
      tabRefs[newIndex]?.current?.focus();
    }
  };

  return (
    <button
      ref={ref}
      role="tab"
      aria-selected={selectedIndex === index}
      aria-controls={`tabpanel-${index}`}
      id={`tab-${index}`}
      tabIndex={selectedIndex === index ? 0 : -1}
      className={`px-4 py-2 focus:outline-none ${selectedIndex === index ? 'border-b-2 border-blue-500 font-bold' : ''}`}
      onClick={() => setSelectedIndex(index)}
      onKeyDown={handleKeyDown}
      type="button"
    >
      {children}
    </button>
  );
}


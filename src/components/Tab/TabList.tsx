import type { ReactNode } from 'react';


interface TabListProps {
  children: ReactNode;
}

export function TabList({ children }: TabListProps) {
  return (
    <div role="tablist" aria-label="Tabs" className="flex border-b">
      {children}
    </div>
  );
}
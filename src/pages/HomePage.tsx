import { TabContainer } from '../components';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <h1 className="text-4xl font-bold mb-4 mt-4">Welcome to the Home Page!</h1>
      <p className="text-lg mb-8">This is the home page of the project.</p>
      <div className="w-full max-w-xl">
        <TabContainer defaultIndex={0}>
          <TabContainer.TabList>
            <TabContainer.Tab index={0}>Tab One</TabContainer.Tab>
            <TabContainer.Tab index={1}>Tab Two</TabContainer.Tab>
            <TabContainer.Tab index={2}>Tab Three</TabContainer.Tab>
          </TabContainer.TabList>
          <TabContainer.TabPanel index={0}>
            <div>Content for Tab One</div>
          </TabContainer.TabPanel>
          <TabContainer.TabPanel index={1}>
            <div>Content for Tab Two</div>
          </TabContainer.TabPanel>
          <TabContainer.TabPanel index={2}>
            <div>Content for Tab Three</div>
          </TabContainer.TabPanel>
        </TabContainer>
      </div>
    </div>
  );
} 
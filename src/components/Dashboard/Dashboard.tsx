import { component$, useSignal } from '@builder.io/qwik';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { Modal } from '../Modal/Modal';
import { BasicCard } from '../Cards/BasicCard';
import { FeatureCard } from '../Cards/FeatureCard';

export const Dashboard = component$(() => {
  const isSidebarOpen = useSignal(false);
  const isModalOpen = useSignal(false);

  return (
    <div>
      <Header />
      
      <Sidebar 
        isOpen={isSidebarOpen.value} 
        onToggle$={() => isSidebarOpen.value = !isSidebarOpen.value}
      >
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/analytics">Analytics</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </Sidebar>

      <main>


        <Modal isOpen={isModalOpen.value} onClose$={() => isModalOpen.value = false}>
          <h2>Welcome to the Dashboard!</h2>
          <p>This is a modal opened from the dashboard.</p>
        </Modal>

        <div>
          <BasicCard title="Recent Activity" hasAction hasFooter>
            <p>Your recent activities will appear here.</p>
            <span q:slot="action">View All</span>
            <span q:slot="footer">Last updated: Today</span>
          </BasicCard>

          <FeatureCard 
            title="Quick Stats"
            description="View your key performance indicators"
            hasAction
          >
            <span q:slot="action">View Stats</span>
          </FeatureCard>
        </div>
      </main>
    </div>
  );
}); 
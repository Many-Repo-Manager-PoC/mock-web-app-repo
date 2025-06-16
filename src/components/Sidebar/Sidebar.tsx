import { component$, Slot } from '@builder.io/qwik';
import './styles.css';

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar = component$<SidebarProps>(({ isOpen }) => {
  return (
    <aside class={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
      <nav class="sidebar-nav">
        <Slot />
      </nav>
    </aside>
  );
}); 
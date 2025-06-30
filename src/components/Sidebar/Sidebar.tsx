import { component$, Slot } from '@builder.io/qwik';
import { Button } from '../Button/Button';

interface SidebarProps {
  isOpen: boolean;
  onToggle$?: () => void;
}

export const Sidebar = component$<SidebarProps>(({ isOpen, onToggle$ }) => {
  return (
    <aside>
      <Button onClick$={onToggle$}>Toggle Sidebar</Button>
      <nav>
        <Slot />
      </nav>
    </aside>
  );
}); 
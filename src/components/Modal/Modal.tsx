import { component$, Slot } from '@builder.io/qwik';
import { Button } from '../Button/Button';

interface ModalProps {
  isOpen: boolean;
  onClose$: () => void;
}

export const Modal = component$<ModalProps>(({ isOpen, onClose$ }) => {
  if (!isOpen) return null;

  return (
    <div onClick$={onClose$}>
      <div onClick$={(e) => e.stopPropagation()}>
        <Button onClick$={onClose$}>×</Button>
        <Slot />
      </div>
    </div>
  );
}); 
import { component$, Slot } from '@builder.io/qwik';
import './styles.css';

interface ModalProps {
  isOpen: boolean;
  onClose$: () => void;
}

export const Modal = component$<ModalProps>(({ isOpen, onClose$ }) => {
  if (!isOpen) return null;

  return (
    <div class="modal-overlay" onClick$={onClose$}>
      <div class="modal-content" onClick$={(e) => e.stopPropagation()}>
        <button class="modal-close" onClick$={onClose$}>×</button>
        <Slot />
      </div>
    </div>
  );
}); 
import { component$, Slot } from '@builder.io/qwik';

interface ButtonProps {
  onClick$?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
}

export const Button = component$<ButtonProps>(({ onClick$, type = 'button', variant = 'primary' }) => {
  return (
    <button
      type={type}
      onClick$={onClick$}
    >
      <Slot />
    </button>
  );
}); 
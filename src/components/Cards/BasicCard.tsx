import { component$, Slot } from '@builder.io/qwik';
import './styles.css';

interface BasicCardProps {
  title?: string;
  hasFooter?: boolean;
}

export const BasicCard = component$<BasicCardProps>(({ title, hasFooter = false }) => {
  return (
    <div class="basic-card">
      {title && <h3 class="basic-card-title">{title}</h3>}
      <div class="basic-card-content">
        <Slot />
      </div>
      {hasFooter && (
        <div class="basic-card-footer">
          <Slot name="footer" />
        </div>
      )}
    </div>
  );
}); 
import { component$, Slot } from '@builder.io/qwik';
import { Button } from '../Button/Button';

interface BasicCardProps {
  title?: string;
  hasFooter?: boolean;
  hasAction?: boolean;
}

export const BasicCard = component$<BasicCardProps>(({ title, hasFooter = false, hasAction = false }) => {
  return (
    <div>
      {title && <h3>{title}</h3>}
      <div>
        <Slot />
      </div>
      {hasAction && (
        <div>
          <Button variant="primary">
            <Slot name="action" />
          </Button>
        </div>
      )}
      {hasFooter && (
        <div>
          <Slot name="footer" />
        </div>
      )}
    </div>
  );
}); 
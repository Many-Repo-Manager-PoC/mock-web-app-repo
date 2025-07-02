import { component$, Slot } from '@builder.io/qwik';
import { Button } from '../Button/Button';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
  hasAction?: boolean;
}

export const FeatureCard = component$<FeatureCardProps>(({ 
  title, 
  description, 
  icon,
  hasAction = false 
}) => {
  return (
    <div class="feature-card">
      {icon && (
        <div class="feature-card-icon">
          <img src={icon} alt={`${title} icon`} />
        </div>
      )}
      <h3 class="feature-card-title">{title}</h3>
      <p class="feature-card-description">{description}</p>
      {hasAction && (
        <div class="feature-card-action">
          <Button variant="secondary">
            <Slot name="action" />
          </Button>
        </div>
      )}
    </div>
  );
}); 
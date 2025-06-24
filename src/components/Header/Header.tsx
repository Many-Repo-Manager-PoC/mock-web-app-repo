import { component$ } from '@builder.io/qwik';
import { Button } from '../Button/Button';

export const Header = component$(() => {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div>
        <Button variant="primary">Login</Button>
        <Button variant="secondary">Sign Up</Button>
      </div>
    </header>
  );
}); 
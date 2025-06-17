import { component$ } from '@builder.io/qwik';
import './styles.css';

export const Header = component$(() => {
  return (
    <header class="header">
      <h1>My App</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}); 
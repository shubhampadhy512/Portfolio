import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => ({
  NavLink: ({ to, children, className }) => {
    const resolvedClassName = typeof className === 'function'
      ? className({ isActive: to === '/' })
      : className;

    return require('react').createElement(
      'a',
      { href: to, className: resolvedClassName },
      children
    );
  },
  Outlet: () => null,
}), { virtual: true });

test('renders app shell', () => {
  render(<App />);

  expect(screen.getByRole('navigation')).toBeInTheDocument();
});

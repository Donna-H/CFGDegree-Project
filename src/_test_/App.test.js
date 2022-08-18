import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders amount of calories', () => {
  render(<App />);
  const inputElement = screen.getByRole("spinbutton");
  expect(inputElement).toBeInTheDocument();
});

test('renders the landing page ', () => {
  render(<App/>);
  expect(screen.getByRole ("button", {name: "Get Daily Meal Plan"})).toBeEnabled();
});



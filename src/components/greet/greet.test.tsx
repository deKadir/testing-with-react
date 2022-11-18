import Greet from './Greet';
import { render, screen } from '@testing-library/react';

describe('Greet', () => {
  test('Greet renders correctly', () => {
    render(<Greet />);
    const text = screen.getByText('Hello');
    expect(text).toBeInTheDocument();
  });
  test('Greet renders with a name', () => {
    render(<Greet name="Kadir" />);
    const text = screen.getByText('Hello Kadir');
    expect(text).toBeInTheDocument();
  });
});

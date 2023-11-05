import { render, screen } from '@testing-library/react';
import App from './App';

test('renders To Do List header', () => {
    render( < App / > );
    const headerElement = screen.getByText(/learn react/i);
    expect(headerElement).toBeInTheDocument();
});
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders To Do List header', () => {
    render( < App / > );
    const headerElement = screen.getByText(/To Do List/i);
    expect(headerElement).toBeInTheDocument();
});

test('Dodaj i kompletiraj item', () => {
    render( < App / > );
    // Implementirajte logiku testa prema potrebi
});
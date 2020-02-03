import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('renders cv link', () => {
  it('should render logo', () => {
    const { getByAltText } = render(<App />);
    const imageElement = getByAltText(/Dave O'Brien, JavaScript & UI Developer/i);
    expect(imageElement).toBeInTheDocument();  
  })
  it('should render cv link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Download my CV/i);
    expect(linkElement).toBeInTheDocument();
  })
});

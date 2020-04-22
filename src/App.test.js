import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders document with Ada Lovelace somewhere', () => {
  // get App component into an object I can write code against
  const { getByText } = render(<App />);
  // Find an element with the test "learn react"
  const linkElement = getByText(/Ada Lovelace/i);
  //Make sure this element found is really in the DOM
  expect(linkElement).toBeInTheDocument();
});

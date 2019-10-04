import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Nav from './Nav';

test('renders without crashing', () => {

     render(<App />, div);

});

test('Does the word click exist?', () => {
  const { getByText } = render(<Nav />);
  getByText(/click/i)
})
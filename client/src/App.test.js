import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Nav from './Nav';

test('renders without crashing', () => {

     render(<App />, div);

});

test('Is dark mode false?', () => {
  render(<Nav />, div);
})
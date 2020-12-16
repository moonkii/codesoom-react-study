import React from 'react';

import { render } from '@testing-library/react';

import NotFOundPage from './NotFOundPage';

jest.mock('react-redux');

test('NotFOundPage', () => {
  render(<NotFOundPage />);
});

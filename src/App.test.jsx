import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  // TODO: selector 조작
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
    tasks: [
      { id: 1, title: '아무 것도 하지 않기 #1' },
      { id: 2, title: '아무 것도 하지 않기 #2' },
    ],
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();
});

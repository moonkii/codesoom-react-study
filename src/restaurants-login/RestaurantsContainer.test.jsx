import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const handleClick = ({ children }) => (<>{children}</>);

  const { container } = render((
    <MemoryRouter initialEntries={['/restaurants']}>
      <RestaurantsContainer onClickRestaurant={handleClick} />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('마법사주방');
});

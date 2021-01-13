import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

jest.mock('react-redux');

describe('RestaurantPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((state) => state({
      restaurant: {
        id: 1,
        name: '마법사주방',
      },
      reviewFields: {
        score: '',
        description: '',
      },
      accessToken: 'ACCESS_TOKEN',
    }));
  });

  it('renders name', () => {
    const params = { id: '1' };

    const { container } = render((
      <RestaurantPage params={params} />
    ));

    expect(container).toHaveTextContent('마법사주방');
  });

  it('renders review write form', () => {
    const params = { id: '1' };

    const { getByLabelText } = render((
      <RestaurantPage params={params} />
    ));

    expect(getByLabelText('평점')).not.toBeNull();
  });
});

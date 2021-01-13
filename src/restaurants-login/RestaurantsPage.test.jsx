import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import RestaurantsPage from './RestaurantsPage';

jest.mock('react-redux');

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [
        { id: 1, name: '한식' },
      ],
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));
  });

  function renderRestaurantsPage() {
    return render((
      <MemoryRouter initialEntries={['/restaurants']}>
        <RestaurantsPage />
      </MemoryRouter>
    ));
  }

  it('renders region and category select buttons', () => {
    const { queryByText } = renderRestaurantsPage();

    expect(dispatch).toBeCalled();

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('한식')).not.toBeNull();
    expect(queryByText('마법사주방')).not.toBeNull();
  });

  it('renders links of restaurants', () => {
    const { container } = renderRestaurantsPage();

    expect(container.innerHTML).toContain('<a href="');
  });
});

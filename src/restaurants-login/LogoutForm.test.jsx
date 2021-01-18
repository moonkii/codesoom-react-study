import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

jest.mock('react-redux');

describe('LogoutForm', () => {
  it('renders “Log out” button and listens click event', () => {
    const handleClick = jest.fn();

    const { container, getByText } = render((
      <LogoutForm onClick={handleClick} />
    ));

    expect(container).toHaveTextContent('Log out');

    fireEvent.click(getByText('Log out'));

    expect(handleClick).toBeCalled();
  });
});

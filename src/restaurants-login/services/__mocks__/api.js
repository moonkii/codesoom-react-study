export const fetchRegions = jest.fn(() => {});
export const fetchCategories = jest.fn(() => {});
export const fetchRestaurants = jest.fn(() => {});

export function fetchRestaurant({ restaurantId }) {
  return {
    id: restaurantId,
  };
}

export function postLogin({ email, password }) {
  return {
    email,
    password,
  };
}

export function postReview({ accessToken, score, description }) {
  return {
    accessToken,
    score,
    description,
  };
}

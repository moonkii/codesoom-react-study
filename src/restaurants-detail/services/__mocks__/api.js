export const fetchRegions = jest.fn(() => {});
export const fetchCategories = jest.fn(() => {});
export const fetchRestaurants = jest.fn(() => {});
export function fetchRestaurant({ restaurantId }) {
  return {
    id: restaurantId,
  };
}

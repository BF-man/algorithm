import { binarySearch } from './index';

test('Searches', () => {
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toBe(3);
});

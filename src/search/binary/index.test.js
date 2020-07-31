import binarySearch from './index';

it('Searches', () => {
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toBe(2);
});

it('Searches at low boundary', () => {
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0)).toBe(0);
});

it('Searches at high boundary', () => {
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)).toBe(10);
});

it('Searches in low middle', () => {
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 5)).toBe(5);
});

it('Searches in high middle', () => {
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 6)).toBe(6);
});

it('Searches in the middle', () => {
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(5);
});

it('Returns null if not found', () => {
  expect(binarySearch([0, 1, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toBe(null);
});

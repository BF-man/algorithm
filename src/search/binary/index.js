export default function binarySearch(array, item) {
  return search(array, item, 0, array.length);
}

function search(array, item, startIndex, endIndex) {
  const middle = Math.floor((startIndex + endIndex) / 2);
  if (array[middle] === item) return middle;
  if (startIndex >= endIndex) return null;
  if (array[middle] > item) return search(array, item, startIndex, middle - 1);
  return search(array, item, middle + 1, endIndex);
}

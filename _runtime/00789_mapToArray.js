// _runtime/00789_mapToArray.js

export default function mapToArray(size) {
  c0 = -1;
  const ArrayResult = Array(size.size);
  const item = size.forEach((item, index) => {
    const sum = c0 + 1;
    c0 = sum;
    const items = [index, item];
    closure_1[sum] = items;
  });
  return ArrayResult;
};
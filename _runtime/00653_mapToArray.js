// _runtime/00653_mapToArray.js

export default function mapToArray(size) {
  c0 = -1;
  const ArrayResult = Array(size.size);
  closure_1 = ArrayResult;
  const item = size.forEach((item, index) => {
    const sum = c0 + 1;
    c0 = sum;
    const items = [index, item];
    ArrayResult[sum] = items;
  });
  return ArrayResult;
}

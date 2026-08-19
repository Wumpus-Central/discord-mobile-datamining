// _runtime/00790_setToArray.js

export default function setToArray(size) {
  c0 = -1;
  const ArrayResult = Array(size.size);
  const item = size.forEach((item, index) => {
    const sum = c0 + 1;
    c0 = sum;
    closure_1[sum] = item;
  });
  return ArrayResult;
};
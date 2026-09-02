// === Module 787: setToArray ===

// Module 787 (setToArray)

export default function setToArray(size) {
  c0 = -1;
  const ArrayResult = Array(size.size);
  const item = size.forEach((arg0) => {
    const sum = c0 + 1;
    c0 = sum;
    closure_1[sum] = arg0;
  });
  return ArrayResult;
};
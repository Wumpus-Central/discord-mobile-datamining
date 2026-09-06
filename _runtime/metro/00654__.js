// === Module 654: ? ===

// Module 654

export default function setToArray(size) {
  c0 = -1;
  const ArrayResult = Array(size.size);
  closure_1 = ArrayResult;
  const item = size.forEach((item) => {
    const sum = c0 + 1;
    c0 = sum;
    ArrayResult[sum] = item;
  });
  return ArrayResult;
};
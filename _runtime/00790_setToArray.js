// === Module 790: setToArray ===

// Module 790 (setToArray)

export default function setToArray(size) {
  let c0 = -1;
  const ArrayResult = Array(size.size);
  const item = size.forEach((arg0) => {
    const sum = c0 + 1;
    c0 = sum;
    closure_1[sum] = arg0;
  });
  return ArrayResult;
};
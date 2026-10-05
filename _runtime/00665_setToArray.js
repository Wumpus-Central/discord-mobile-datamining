// === Module 665: setToArray ===

// Module 665 (setToArray)

export default function setToArray(size) {
  let sum;
  let closure_0 = -1;
  const ArrayResult = Array(size.size);
  let closure_1 = ArrayResult;
  const item = size.forEach((item) => {
    closure_0 = closure_0 + 1;
    closure_1[closure_0] = item;
  });
  return ArrayResult;
};
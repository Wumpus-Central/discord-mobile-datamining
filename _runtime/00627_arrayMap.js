// === Module 627: arrayMap ===

// Module 627 (arrayMap)

export default function arrayMap(length, fn) {
  let num = 0;
  if (null != length) {
    num = length.length;
  }
  const ArrayResult = Array(num);
  for (let num2 = 0; num2 < num; num2 = num2 + 1) {
    ArrayResult[num2] = fn(length[num2], num2, length);
  }
  return ArrayResult;
};
// === Module 627: baseTimes ===

// Module 627 (baseTimes)

export default function baseTimes(arg0, fn) {
  const ArrayResult = Array(arg0);
  for (let num = 0; num < arg0; num = num + 1) {
    ArrayResult[num] = fn(num);
  }
  return ArrayResult;
};
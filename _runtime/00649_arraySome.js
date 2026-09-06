// === Module 649: arraySome ===

// Module 649 (arraySome)

export default function arraySome(arr, fn) {
  let num = 0;
  if (null != arr) {
    num = arr.length;
  }
  let num2 = 0;
  if (0 < num) {
    while (!fn(arr[num2], num2, arr)) {
      num2 = num2 + 1;
    }
    return true;
  }
  return false;
};
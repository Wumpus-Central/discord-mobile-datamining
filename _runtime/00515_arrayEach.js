// === Module 515: arrayEach ===

// Module 515 (arrayEach)

export default function arrayEach(length, fn) {
  let num = 0;
  if (null != length) {
    num = length.length;
  }
  if (0 < num) {
    let num3 = 0;
    if (false !== fn(length[0], 0, length)) {
      const sum = num3 + 1;
      while (sum < num) {
        num3 = sum;
        if (false === fn(length[sum], sum, length)) {
          break;
        }
      }
    }
  }
  return length;
};
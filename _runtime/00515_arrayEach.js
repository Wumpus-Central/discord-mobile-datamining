// === Module 515: arrayEach ===

// Module 515 (arrayEach)

export default function arrayEach(arg0, fn) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (0 < num) {
    let num3 = 0;
    if (false !== fn(arg0[0], 0, arg0)) {
      const sum = num3 + 1;
      while (sum < num) {
        num3 = sum;
        if (false === fn(arg0[sum], sum, arg0)) {
          break;
        }
      }
    }
  }
  return arg0;
};
// === Module 515: arrayEach ===

// Module 515 (arrayEach)

export default function arrayEach(f, fn) {
  let num = 0;
  if (null != f) {
    num = f.length;
  }
  if (0 < num) {
    let num3 = 0;
    if (false !== fn(f[0], 0, f)) {
      const sum = num3 + 1;
      while (sum < num) {
        num3 = sum;
        if (false === fn(f[sum], sum, f)) {
          break;
        }
      }
    }
  }
  return f;
};
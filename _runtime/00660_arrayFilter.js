// === Module 660: arrayFilter ===

// Module 660 (arrayFilter)

export default function arrayFilter(f, fn) {
  let num = 0;
  if (null != f) {
    num = f.length;
  }
  items = [];
  let num2 = 0;
  let num3 = 0;
  if (0 < num) {
    do {
      let tmp = f[num3];
      let sum = num2;
      if (fn(tmp, num3, f)) {
        sum = num2 + 1;
        items[num2] = tmp;
      }
      num3 = num3 + 1;
      num2 = sum;
    } while (num3 < num);
  }
  return items;
};
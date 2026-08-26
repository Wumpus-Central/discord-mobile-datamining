// === Module 9628: compact ===

// Module 9628 (compact)

export default function compact(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const items = [];
  let num2 = 0;
  let num3 = 0;
  if (0 < num) {
    do {
      let tmp = arg0[num3];
      let tmp2 = num2;
      let tmp3 = num3;
      let sum = num2;
      if (tmp) {
        sum = num2 + 1;
        items[num2] = tmp;
      }
      num3 = num3 + 1;
      num2 = sum;
    } while (num3 < num);
  }
  return items;
};
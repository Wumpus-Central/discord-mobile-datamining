// === Module 13804: zipWithNext ===

// Module 13804 (zipWithNext)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/zipWithNext.tsx");

export default function zipWithNext(arg0, fn) {
  let length;
  if (arg0.length < 2) {
    return [];
  } else {
    const items = [];
    let first = arg0[0];
    let num2 = 1;
    if (1 < arg0.length) {
      do {
        let tmp2 = arg0[num2];
        let arr = items.push(fn(first, tmp2));
        num2 = num2 + 1;
        first = tmp2;
        length = arg0.length;
      } while (num2 < length);
    }
    return items;
  }
};
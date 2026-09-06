// === Module 13804: zipWithNext ===

// Module 13804 (zipWithNext)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/zipWithNext.tsx");

export default function zipWithNext(value, fn) {
  let length;
  if (value.length < 2) {
    return [];
  } else {
    const items = [];
    let first = value[0];
    let num2 = 1;
    if (1 < value.length) {
      do {
        let tmp2 = value[num2];
        let arr = items.push(fn(first, tmp2));
        num2 = num2 + 1;
        first = tmp2;
        length = value.length;
      } while (num2 < length);
    }
    return items;
  }
};
// === Module 13077: zipWithNext ===

// Module 13077 (zipWithNext)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("lib/zipWithNext.tsx");

export default function zipWithNext(closure_0, fn) {
  let length;
  if (closure_0.length < 2) {
    return [];
  } else {
    const items = [];
    let first = closure_0[0];
    let num2 = 1;
    if (1 < closure_0.length) {
      do {
        let tmp2 = closure_0[num2];
        let arr = items.push(fn(first, tmp2));
        num2 = num2 + 1;
        first = tmp2;
        length = closure_0.length;
      } while (num2 < length);
    }
    return items;
  }
};
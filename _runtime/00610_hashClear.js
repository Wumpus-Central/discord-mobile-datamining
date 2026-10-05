// === Module 610: hashClear ===

// Module 610 (hashClear)
import getNative from "getNative" /* 611 */;


export default function hashClear() {
  if (getNative) {
    let obj2 = getNative(null);
  } else {
    obj2 = {};
  }
};
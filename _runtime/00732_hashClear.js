// === Module 732: hashClear ===

// Module 732 (hashClear)
import getNative from "getNative" /* 733 */;


export default function hashClear() {
  let obj = {};
  if (getNative) {
    obj = getNative(null);
  } else {
    obj = {};
  }
  obj.__data__ = obj;
  obj.size = 0;
};
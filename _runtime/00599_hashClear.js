// === Module 599: hashClear ===

// Module 599 (hashClear)
import _mod600 from "module_600" /* 600 */;


export default function hashClear() {
  let obj = {};
  if (_mod600) {
    obj = _mod600(null);
  } else {
    obj = {};
  }
  obj.__data__ = obj;
  obj.size = 0;
};
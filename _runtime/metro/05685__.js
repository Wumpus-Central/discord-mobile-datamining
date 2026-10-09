// === Module 5685: ? ===

// Module 5685
import _mod1330 from "module_1330" /* 1330 */;
import _mod1331 from "module_1331" /* 1331 */;
import _mod1337 from "module_1337" /* 1337 */;
import _mod5677 from "module_5677" /* 5677 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1337(num)) {
      if (_mod5677(num)) {
        const tmp = _mod1330(num);
        return _mod1331(tmp) === tmp;
      }
    }
  }
  return false;
};
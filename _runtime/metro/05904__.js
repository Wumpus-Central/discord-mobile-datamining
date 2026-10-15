// === Module 5904: ? ===

// Module 5904
import _mod1330 from "module_1330" /* 1330 */;
import _mod1331 from "module_1331" /* 1331 */;
import _mod1337 from "module_1337" /* 1337 */;
import _mod5896 from "module_5896" /* 5896 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1337(num)) {
      if (_mod5896(num)) {
        const tmp = _mod1330(num);
        return _mod1331(tmp) === tmp;
      }
    }
  }
  return false;
};
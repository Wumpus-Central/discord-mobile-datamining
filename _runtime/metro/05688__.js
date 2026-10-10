// === Module 5688: ? ===

// Module 5688
import _mod1330 from "module_1330" /* 1330 */;
import _mod1331 from "module_1331" /* 1331 */;
import _mod1337 from "module_1337" /* 1337 */;
import _mod5680 from "module_5680" /* 5680 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1337(num)) {
      if (_mod5680(num)) {
        const tmp = _mod1330(num);
        return _mod1331(tmp) === tmp;
      }
    }
  }
  return false;
};
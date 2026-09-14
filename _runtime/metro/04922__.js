// === Module 4922: ? ===

// Module 4922
import _mod1305 from "module_1305" /* 1305 */;
import _mod1306 from "module_1306" /* 1306 */;
import _mod1312 from "module_1312" /* 1312 */;
import _mod4914 from "module_4914" /* 4914 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1312(num)) {
      if (_mod4914(num)) {
        const tmp = _mod1305(num);
        return _mod1306(tmp) === tmp;
      }
    }
  }
  return false;
};
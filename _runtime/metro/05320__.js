// === Module 5320: ? ===

// Module 5320
import _mod1306 from "module_1306" /* 1306 */;
import _mod1307 from "module_1307" /* 1307 */;
import _mod1313 from "module_1313" /* 1313 */;
import _mod5312 from "module_5312" /* 5312 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1313(num)) {
      if (_mod5312(num)) {
        const tmp = _mod1306(num);
        return _mod1307(tmp) === tmp;
      }
    }
  }
  return false;
};
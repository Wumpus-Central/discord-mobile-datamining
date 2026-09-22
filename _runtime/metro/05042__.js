// === Module 5042: ? ===

// Module 5042
import _mod1306 from "module_1306" /* 1306 */;
import _mod1307 from "module_1307" /* 1307 */;
import _mod1313 from "module_1313" /* 1313 */;
import _mod5034 from "module_5034" /* 5034 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1313(num)) {
      if (_mod5034(num)) {
        const tmp = _mod1306(num);
        return _mod1307(tmp) === tmp;
      }
    }
  }
  return false;
};
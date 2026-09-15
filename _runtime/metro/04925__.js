// === Module 4925: ? ===

// Module 4925
import _mod1306 from "module_1306" /* 1306 */;
import _mod1307 from "module_1307" /* 1307 */;
import _mod1313 from "module_1313" /* 1313 */;
import _mod4917 from "module_4917" /* 4917 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1313(num)) {
      if (_mod4917(num)) {
        const tmp = _mod1306(num);
        return _mod1307(tmp) === tmp;
      }
    }
  }
  return false;
};
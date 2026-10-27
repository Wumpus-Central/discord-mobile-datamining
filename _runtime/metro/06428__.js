// === Module 6428: ? ===

// Module 6428
import _mod1329 from "module_1329" /* 1329 */;
import _mod1330 from "module_1330" /* 1330 */;
import _mod1336 from "module_1336" /* 1336 */;
import _mod6420 from "module_6420" /* 6420 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1336(num)) {
      if (_mod6420(num)) {
        const tmp = _mod1329(num);
        return _mod1330(tmp) === tmp;
      }
    }
  }
  return false;
};
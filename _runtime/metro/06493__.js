// === Module 6493: ? ===

// Module 6493
import _mod1318 from "module_1318" /* 1318 */;
import _mod1319 from "module_1319" /* 1319 */;
import _mod1325 from "module_1325" /* 1325 */;
import _mod6485 from "module_6485" /* 6485 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1325(num)) {
      if (_mod6485(num)) {
        const tmp = _mod1318(num);
        return _mod1319(tmp) === tmp;
      }
    }
  }
  return false;
};
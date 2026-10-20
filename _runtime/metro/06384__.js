// === Module 6384: ? ===

// Module 6384
import _mod1332 from "module_1332" /* 1332 */;
import _mod1333 from "module_1333" /* 1333 */;
import _mod1339 from "module_1339" /* 1339 */;
import _mod6376 from "module_6376" /* 6376 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1339(num)) {
      if (_mod6376(num)) {
        const tmp = _mod1332(num);
        return _mod1333(tmp) === tmp;
      }
    }
  }
  return false;
};
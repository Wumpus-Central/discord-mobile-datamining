// === Module 5906: ? ===

// Module 5906
import _mod1332 from "module_1332" /* 1332 */;
import _mod1333 from "module_1333" /* 1333 */;
import _mod1339 from "module_1339" /* 1339 */;
import _mod5898 from "module_5898" /* 5898 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1339(num)) {
      if (_mod5898(num)) {
        const tmp = _mod1332(num);
        return _mod1333(tmp) === tmp;
      }
    }
  }
  return false;
};
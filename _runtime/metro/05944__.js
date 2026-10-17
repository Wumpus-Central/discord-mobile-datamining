// === Module 5944: ? ===

// Module 5944
import _mod1332 from "module_1332" /* 1332 */;
import _mod1333 from "module_1333" /* 1333 */;
import _mod1339 from "module_1339" /* 1339 */;
import _mod5936 from "module_5936" /* 5936 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1339(num)) {
      if (_mod5936(num)) {
        const tmp = _mod1332(num);
        return _mod1333(tmp) === tmp;
      }
    }
  }
  return false;
};
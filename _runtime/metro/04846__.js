// === Module 4846: ? ===

// Module 4846
import _mod1307 from "module_1307" /* 1307 */;
import _mod1308 from "module_1308" /* 1308 */;
import _mod1314 from "module_1314" /* 1314 */;
import _mod4838 from "module_4838" /* 4838 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1314(num)) {
      if (_mod4838(num)) {
        const tmp = _mod1307(num);
        return _mod1308(tmp) === tmp;
      }
    }
  }
  return false;
};
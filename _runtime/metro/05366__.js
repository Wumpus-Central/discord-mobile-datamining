// === Module 5366: ? ===

// Module 5366
import _mod1317 from "module_1317" /* 1317 */;
import _mod1318 from "module_1318" /* 1318 */;
import _mod1324 from "module_1324" /* 1324 */;
import _mod5358 from "module_5358" /* 5358 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1324(num)) {
      if (_mod5358(num)) {
        const tmp = _mod1317(num);
        return _mod1318(tmp) === tmp;
      }
    }
  }
  return false;
};
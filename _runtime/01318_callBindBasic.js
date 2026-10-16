// === Module 1318: callBindBasic ===

// Module 1318 (callBindBasic)
import _mod1308 from "module_1308" /* 1308 */;
import _mod1319 from "module_1319" /* 1319 */;
import bind from "bind" /* 1321 */;
import _mod1323 from "module_1323" /* 1323 */;


export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1319;
      return tmp4(bind, _mod1323, items);
    }
  }
  throw new _mod1308("a function is required");
};
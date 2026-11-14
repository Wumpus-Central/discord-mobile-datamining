// === Module 1306: callBindBasic ===

// Module 1306 (callBindBasic)
import _mod1296 from "module_1296" /* 1296 */;
import _mod1307 from "module_1307" /* 1307 */;
import bind from "bind" /* 1309 */;
import _mod1311 from "module_1311" /* 1311 */;


export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1307;
      return tmp4(bind, _mod1311, items);
    }
  }
  throw new _mod1296("a function is required");
};
// === Module 1293: callBindBasic ===

// Module 1293 (callBindBasic)
import _mod1283 from "module_1283" /* 1283 */;
import _mod1294 from "module_1294" /* 1294 */;
import bind from "bind" /* 1296 */;
import _mod1298 from "module_1298" /* 1298 */;


export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1294;
      return tmp4(bind, _mod1298, items);
    }
  }
  throw new _mod1283("a function is required");
};
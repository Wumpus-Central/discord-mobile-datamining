// === Module 1303: callBindBasic ===

// Module 1303 (callBindBasic)
import _mod1293 from "module_1293" /* 1293 */;
import _mod1304 from "module_1304" /* 1304 */;
import bind from "bind" /* 1306 */;
import _mod1308 from "module_1308" /* 1308 */;


export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1304;
      return tmp4(bind, _mod1308, items);
    }
  }
  throw new _mod1293("a function is required");
};
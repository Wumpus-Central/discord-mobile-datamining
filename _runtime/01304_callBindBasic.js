// === Module 1304: callBindBasic ===

// Module 1304 (callBindBasic)
import _mod1294 from "module_1294" /* 1294 */;
import _mod1305 from "module_1305" /* 1305 */;
import bind from "bind" /* 1307 */;
import _mod1309 from "module_1309" /* 1309 */;


export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1305;
      return tmp4(bind, _mod1309, items);
    }
  }
  throw new _mod1294("a function is required");
};
// === Module 551: callBindBasic ===

// Module 551 (callBindBasic)
import _mod541 from "module_541" /* 541 */;
import _mod552 from "module_552" /* 552 */;
import bind from "bind" /* 554 */;
import _mod556 from "module_556" /* 556 */;


export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod552;
      return tmp4(bind, _mod556, items);
    }
  }
  throw new _mod541("a function is required");
};
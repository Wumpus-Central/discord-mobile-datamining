// === Module 548: callBindBasic ===

// Module 548 (callBindBasic)
import _mod538 from "module_538" /* 538 */;
import _mod549 from "module_549" /* 549 */;
import bind from "bind" /* 551 */;
import _mod553 from "module_553" /* 553 */;


export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod549;
      return tmp4(bind, _mod553, items);
    }
  }
  throw new _mod538("a function is required");
};
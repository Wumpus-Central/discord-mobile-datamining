// _runtime/00548_callBindBasic.js
import _mod538 from "metro/00538__.js";
import _mod549 from "metro/00549__.js";
import bind from "00551_bind.js";
import _mod553 from "metro/00553__.js";

export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod549;
      return tmp4(bind, _mod553, items);
    }
  }
  throw new _mod538("a function is required");
}

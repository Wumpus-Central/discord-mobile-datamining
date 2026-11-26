// _runtime/01306_callBindBasic.js
import _mod1296 from "metro/01296__.js";
import _mod1307 from "metro/01307__.js";
import bind from "01309_bind.js";
import _mod1311 from "metro/01311__.js";

export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1307;
      return tmp4(bind, _mod1311, items);
    }
  }
  throw new _mod1296("a function is required");
}

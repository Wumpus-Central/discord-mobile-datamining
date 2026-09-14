// _runtime/01291_callBindBasic.js
import _mod1281 from "metro/01281__.js";
import _mod1292 from "metro/01292__.js";
import bind from "01294_bind.js";
import _mod1296 from "metro/01296__.js";

export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1292;
      return tmp4(bind, _mod1296, items);
    }
  }
  throw new _mod1281("a function is required");
}

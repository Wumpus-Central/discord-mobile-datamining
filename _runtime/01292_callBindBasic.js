// _runtime/01292_callBindBasic.js
import _mod1282 from "metro/01282__.js";
import _mod1293 from "metro/01293__.js";
import bind from "01295_bind.js";
import _mod1297 from "metro/01297__.js";

export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1293;
      return tmp4(bind, _mod1297, items);
    }
  }
  throw new _mod1282("a function is required");
}

// _runtime/01305_callBindBasic.js
import _mod1295 from "metro/01295__.js";
import _mod1306 from "metro/01306__.js";
import bind from "01308_bind.js";
import _mod1310 from "metro/01310__.js";

export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1306;
      return tmp4(bind, _mod1310, items);
    }
  }
  throw new _mod1295("a function is required");
}

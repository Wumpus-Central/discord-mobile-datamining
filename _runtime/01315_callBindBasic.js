// _runtime/01315_callBindBasic.js
import _mod1305 from "metro/01305__.js";
import _mod1316 from "metro/01316__.js";
import bind from "01318_bind.js";
import _mod1320 from "metro/01320__.js";

export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1316;
      return tmp4(bind, _mod1320, items);
    }
  }
  throw new _mod1305("a function is required");
}

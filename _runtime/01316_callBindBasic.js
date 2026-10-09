// _runtime/01316_callBindBasic.js
import _mod1306 from "metro/01306__.js";
import _mod1317 from "metro/01317__.js";
import bind from "01319_bind.js";
import _mod1321 from "metro/01321__.js";

export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1317;
      return tmp4(bind, _mod1321, items);
    }
  }
  throw new _mod1306("a function is required");
}

// _runtime/00551_callBindBasic.js
import _mod541 from "metro/00541__.js";
import _mod552 from "metro/00552__.js";
import bind from "00554_bind.js";
import _mod556 from "metro/00556__.js";

export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod552;
      return tmp4(bind, _mod556, items);
    }
  }
  throw new _mod541("a function is required");
}

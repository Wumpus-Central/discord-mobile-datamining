// _runtime/01318_callBindBasic.js
import _mod1308 from "metro/01308__.js";
import _mod1319 from "metro/01319__.js";
import bind from "01321_bind.js";
import _mod1323 from "metro/01323__.js";

export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1319;
      return tmp4(bind, _mod1323, items);
    }
  }
  throw new _mod1308("a function is required");
}

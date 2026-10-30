// _runtime/01304_callBindBasic.js
import _mod1294 from "metro/01294__.js";
import _mod1305 from "metro/01305__.js";
import bind from "01307_bind.js";
import _mod1309 from "metro/01309__.js";

export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1305;
      return tmp4(bind, _mod1309, items);
    }
  }
  throw new _mod1294("a function is required");
}

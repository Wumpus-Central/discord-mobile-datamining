// _runtime/01293_callBindBasic.js
import _mod1283 from "metro/01283__.js";
import _mod1294 from "metro/01294__.js";
import bind from "01296_bind.js";
import _mod1298 from "metro/01298__.js";

export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1294;
      return tmp4(bind, _mod1298, items);
    }
  }
  throw new _mod1283("a function is required");
}

// _runtime/01303_callBindBasic.js
import _mod1293 from "metro/01293__.js";
import _mod1304 from "metro/01304__.js";
import bind from "01306_bind.js";
import _mod1308 from "metro/01308__.js";

export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1304;
      const tmp5 = bind;
      return tmp4(tmp5, _mod1308, items);
    }
  }
  const tmp = new _mod1293("a function is required");
  throw tmp;
}

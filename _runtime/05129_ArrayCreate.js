// _runtime/05129_ArrayCreate.js
import _mod1281 from "metro/01281__.js";
import _mod1282 from "metro/01282__.js";
import _mod1301 from "metro/01301__.js";
import _mod1303 from "metro/01303__.js";
import _mod5126 from "metro/05126__.js";
import _mod5130 from "metro/05130__.js";
import _mod5131 from "metro/05131__.js";

let closure_2 = _mod1281("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod5126(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod5130) {
        const tmp12 = new _mod1301("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod5131) {
            _mod5131(items, tmp3);
          } else {
            const tmp7 = new _mod1303(
              "ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]",
            );
            throw tmp7;
          }
        }
        if (0 !== arg0) {
          items.length = arg0;
        }
        return items;
      }
    }
  }
  throw new _mod1282("Assertion failed: `length` must be an integer Number >= 0");
}

// _runtime/05044_ArrayCreate.js
import _mod1281 from "metro/01281__.js";
import _mod1282 from "metro/01282__.js";
import _mod1301 from "metro/01301__.js";
import _mod1303 from "metro/01303__.js";
import _mod5041 from "metro/05041__.js";
import _mod5045 from "metro/05045__.js";
import _mod5046 from "metro/05046__.js";

let closure_2 = _mod1281("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod5041(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod5045) {
        const tmp12 = new _mod1301("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod5046) {
            _mod5046(items, tmp3);
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

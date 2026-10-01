// _runtime/05323_ArrayCreate.js
import _mod1281 from "metro/01281__.js";
import _mod1282 from "metro/01282__.js";
import _mod1301 from "metro/01301__.js";
import _mod1303 from "metro/01303__.js";
import _mod5320 from "metro/05320__.js";
import _mod5324 from "metro/05324__.js";
import _mod5325 from "metro/05325__.js";

let closure_2 = _mod1281("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod5320(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod5324) {
        const tmp12 = new _mod1301("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod5325) {
            _mod5325(items, tmp3);
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

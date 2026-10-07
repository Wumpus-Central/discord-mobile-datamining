// _runtime/05376_ArrayCreate.js
import _mod1292 from "metro/01292__.js";
import _mod1293 from "metro/01293__.js";
import _mod1312 from "metro/01312__.js";
import _mod1314 from "metro/01314__.js";
import _mod5373 from "metro/05373__.js";
import _mod5377 from "metro/05377__.js";
import _mod5378 from "metro/05378__.js";

let closure_2 = _mod1292("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod5373(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod5377) {
        const tmp12 = new _mod1312("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod5378) {
            _mod5378(items, tmp3);
          } else {
            const tmp7 = new _mod1314(
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
  throw new _mod1293("Assertion failed: `length` must be an integer Number >= 0");
}

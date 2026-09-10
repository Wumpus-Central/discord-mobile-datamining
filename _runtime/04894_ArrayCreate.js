// _runtime/04894_ArrayCreate.js
import _mod1282 from "metro/01282__.js";
import _mod1283 from "metro/01283__.js";
import _mod1302 from "metro/01302__.js";
import _mod1304 from "metro/01304__.js";
import _mod4891 from "metro/04891__.js";
import _mod4895 from "metro/04895__.js";
import _mod4896 from "metro/04896__.js";

let closure_2 = _mod1282("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod4891(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod4895) {
        const tmp12 = new _mod1302("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod4896) {
            _mod4896(items, tmp3);
          } else {
            const tmp7 = new _mod1304(
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
  throw new _mod1283("Assertion failed: `length` must be an integer Number >= 0");
}

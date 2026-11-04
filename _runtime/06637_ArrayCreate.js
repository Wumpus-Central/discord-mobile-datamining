// _runtime/06637_ArrayCreate.js
import _mod1292 from "metro/01292__.js";
import _mod1293 from "metro/01293__.js";
import _mod1312 from "metro/01312__.js";
import _mod1314 from "metro/01314__.js";
import _mod6634 from "metro/06634__.js";
import _mod6638 from "metro/06638__.js";
import _mod6639 from "metro/06639__.js";

let closure_2 = _mod1292("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod6634(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod6638) {
        const tmp12 = new _mod1312("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        items = [];
        if (tmp3 !== closure_2) {
          if (_mod6639) {
            _mod6639(items, tmp3);
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

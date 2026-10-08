// _runtime/05687_ArrayCreate.js
import _mod1304 from "metro/01304__.js";
import _mod1305 from "metro/01305__.js";
import _mod1324 from "metro/01324__.js";
import _mod1326 from "metro/01326__.js";
import _mod5684 from "metro/05684__.js";
import _mod5688 from "metro/05688__.js";
import _mod5689 from "metro/05689__.js";

let closure_2 = _mod1304("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod5684(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod5688) {
        const tmp12 = new _mod1324("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod5689) {
            _mod5689(items, tmp3);
          } else {
            const tmp7 = new _mod1326(
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
  throw new _mod1305("Assertion failed: `length` must be an integer Number >= 0");
}

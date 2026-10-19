// _runtime/06384_ArrayCreate.js
import _mod1307 from "metro/01307__.js";
import _mod1308 from "metro/01308__.js";
import _mod1327 from "metro/01327__.js";
import _mod1329 from "metro/01329__.js";
import _mod6381 from "metro/06381__.js";
import _mod6385 from "metro/06385__.js";
import _mod6386 from "metro/06386__.js";

let closure_2 = _mod1307("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod6381(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod6385) {
        const tmp12 = new _mod1327("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod6386) {
            _mod6386(items, tmp3);
          } else {
            const tmp7 = new _mod1329(
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
  throw new _mod1308("Assertion failed: `length` must be an integer Number >= 0");
}

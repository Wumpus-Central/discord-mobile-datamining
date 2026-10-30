// === Module 658: stubArray ===

// Module 658 (stubArray)
import _mod659 from "module_659" /* 659 */;

const require = globalThis.__r;

if (getOwnPropertySymbols) {
  let fn = (arg0) => {
    _require = arg0;
    if (null == arg0) {
      let items = [];
    } else {
      const _Object = Object;
      const ObjectResult = Object(arg0);
      _require = ObjectResult;
      items = require("arrayFilter")(getOwnPropertySymbols(ObjectResult), (ownPropertySymbols) => {
        const call = propertyIsEnumerable.call;
        return typeof call === "unknown" ? propertyIsEnumerable(ownPropertySymbols) : call(closure_0, ownPropertySymbols);
      });
      const tmp5 = require("arrayFilter");
    }
    return items;
  };
} else {
  fn = _mod659;
}

export default fn;
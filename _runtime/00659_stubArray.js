// _runtime/00659_stubArray.js
import _mod660 from "metro/00660__.js";

if (getOwnPropertySymbols) {
  let fn = (arg0) => {
    _require = arg0;
    if (null == arg0) {
      let items = [];
    } else {
      const _Object = Object;
      const ObjectResult = Object(arg0);
      _require = ObjectResult;
      items = require("arrayFilter")(getOwnPropertySymbols(ObjectResult), (arg0) => {
        const call = propertyIsEnumerable.call;
        return typeof call === "unknown" ? propertyIsEnumerable(arg0) : call(closure_0, arg0);
      });
      const tmp5 = require("arrayFilter");
    }
    return items;
  };
} else {
  fn = _mod660;
}

export default fn;

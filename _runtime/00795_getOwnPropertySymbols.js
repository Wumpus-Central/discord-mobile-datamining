import { arrayFilter } from "00797_arrayFilter.js";
// _runtime/00795_getOwnPropertySymbols.js
if (getOwnPropertySymbols) {
  let fn = (arg0) => {
    let _require = arg0;
    if (null == arg0) {
      let items = [];
    } else {
      const _Object = Object;
      const ObjectResult = Object(arg0);
      _require = ObjectResult;
      items = _arrayFilter(getOwnPropertySymbols(ObjectResult), (arg0) => {
        const call = outer1_2.call;
        return typeof call === "unknown" ? outer1_2(arg0) : call(closure_0, arg0);
      });
      const tmp5 = _arrayFilter;
    }
    return items;
  };
} else {
  fn = require("stubArray");
}

export default fn;
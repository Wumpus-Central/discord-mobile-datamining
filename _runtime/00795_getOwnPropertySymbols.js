// _runtime/00795_getOwnPropertySymbols.js
import stubArray from "00796_stubArray.js";
import { arrayFilter } from "00797_arrayFilter.js";

if (getOwnPropertySymbols) {
  let fn = (arg0) => {
    let _require = arg0;
    if (null == arg0) {
      let items = [];
    } else {
      const _Object = Object;
      const ObjectResult = Object(arg0);
      _require = ObjectResult;
      items = arrayFilter(getOwnPropertySymbols(ObjectResult), (ownPropertySymbols) => {
        const call = propertyIsEnumerable.call;
        return typeof call === "unknown" ? propertyIsEnumerable(ownPropertySymbols) : call(closure_0, ownPropertySymbols);
      });
      const tmp5 = arrayFilter;
    }
    return items;
  };
} else {
  fn = stubArray;
}

export default fn;
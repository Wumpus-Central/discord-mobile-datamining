// _runtime/00659_getOwnPropertySymbols.js
import stubArray from "00660_stubArray.js";
import { arrayFilter } from "00661_arrayFilter.js";

if (getOwnPropertySymbols) {
  let fn = (arg0) => {
    let _require = arg0;
    if (null == arg0) {
      let items = [];
    } else {
      const _Object = Object;
      const ObjectResult = Object(arg0);
      _require = ObjectResult;
      items = arrayFilter(getOwnPropertySymbols(ObjectResult), (arg0) => {
        const call = closure_1_2.call;
        return typeof call === "unknown" ? closure_1_2(arg0) : call(closure_0, arg0);
      });
      const tmp5 = arrayFilter;
    }
    return items;
  };
} else {
  fn = stubArray;
}

export default fn;

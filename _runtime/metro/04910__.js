// _runtime/metro/04910__.js
import arrayPush from "../00658_arrayPush.js";
import stubArray from "../00659_stubArray.js";
import _mod660 from "00660__.js";
import _mod4906 from "04906__.js";

if (Object.getOwnPropertySymbols) {
  let fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
        let tmp4 = arrayPush;
        let tmp4Result = tmp4(items, stubArray(tmp));
        tmp = _mod4906(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = _mod660;
}

export default fn;

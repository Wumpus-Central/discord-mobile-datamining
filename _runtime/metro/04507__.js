// _runtime/metro/04507__.js
import arrayPush from "../00794_arrayPush.js";
import getOwnPropertySymbols from "../00795_getOwnPropertySymbols.js";
import stubArray from "../00796_stubArray.js";
import overArg from "../04503_overArg.js";

if (Object.getOwnPropertySymbols) {
  let fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
        let tmp2 = require;
        let tmp3 = dependencyMap;
        let tmp4 = arrayPush;
        let tmp4Result = tmp4(items, getOwnPropertySymbols(tmp));
        tmp = overArg(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = stubArray;
}

export default fn;
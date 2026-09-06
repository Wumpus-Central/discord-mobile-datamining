// _runtime/metro/04643__.js
import arrayPush from "../00658_arrayPush.js";
import getOwnPropertySymbols from "../00659_getOwnPropertySymbols.js";
import stubArray from "../00660_stubArray.js";
import overArg from "../04639_overArg.js";

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

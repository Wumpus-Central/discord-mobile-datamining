// _runtime/metro/04980__.js
import arrayPush from "../00669_arrayPush.js";
import stubArray from "../00670_stubArray.js";
import stubArray2 from "../00671_stubArray.js";
import overArg from "../04976_overArg.js";

let fn;
if (Object.getOwnPropertySymbols) {
  fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
        let tmp4 = arrayPush;
        let tmp4Result = tmp4(items, stubArray(tmp));
        tmp = overArg(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = stubArray2;
}

export default fn;

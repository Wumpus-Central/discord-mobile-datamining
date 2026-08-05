// _runtime/metro/04408__.js
import { arrayPush } from "../00794_arrayPush.js";
import { getOwnPropertySymbols } from "../00795_getOwnPropertySymbols.js";
import { overArg } from "../04404_overArg.js";
if (Object.getOwnPropertySymbols) {
  let fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
        let tmp2 = require;
        let tmp3 = dependencyMap;
        let tmp4 = arrayPush /* arrayPush */;
        let tmp4Result = tmp4(items, getOwnPropertySymbols /* getOwnPropertySymbols */(tmp));
        tmp = overArg /* overArg */(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = require("stubArray");
}

export default fn;
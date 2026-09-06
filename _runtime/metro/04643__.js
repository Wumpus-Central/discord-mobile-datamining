// === Module 4643: ? ===

// Module 4643
import arrayPush from "arrayPush" /* 658 */;
import getOwnPropertySymbols from "getOwnPropertySymbols" /* 659 */;
import stubArray from "stubArray" /* 660 */;
import overArg from "overArg" /* 4639 */;

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
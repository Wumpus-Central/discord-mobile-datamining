// === Module 4596: ? ===

// Module 4596
import arrayPush from "arrayPush" /* 794 */;
import getOwnPropertySymbols from "getOwnPropertySymbols" /* 795 */;
import stubArray from "stubArray" /* 796 */;
import overArg from "overArg" /* 4592 */;

if (Object.getOwnPropertySymbols) {
  let fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
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
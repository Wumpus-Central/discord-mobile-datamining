// === Module 4980: ? ===

// Module 4980
import arrayPush from "arrayPush" /* 669 */;
import stubArray from "stubArray" /* 670 */;
import stubArray2 from "stubArray" /* 671 */;
import overArg from "overArg" /* 4976 */;

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
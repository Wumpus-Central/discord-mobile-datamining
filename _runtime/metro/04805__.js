// === Module 4805: ? ===

// Module 4805
import arrayPush from "arrayPush" /* 658 */;
import stubArray from "stubArray" /* 659 */;
import _mod660 from "module_660" /* 660 */;
import _mod4801 from "module_4801" /* 4801 */;

if (Object.getOwnPropertySymbols) {
  let fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
        let tmp4 = arrayPush;
        let tmp4Result = tmp4(items, stubArray(tmp));
        tmp = _mod4801(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = _mod660;
}

export default fn;
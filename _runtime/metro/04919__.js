// === Module 4919: ? ===

// Module 4919
import arrayPush from "arrayPush" /* 658 */;
import stubArray from "stubArray" /* 659 */;
import _mod660 from "module_660" /* 660 */;
import _mod4915 from "module_4915" /* 4915 */;

if (Object.getOwnPropertySymbols) {
  let fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
        let tmp4 = arrayPush;
        let tmp4Result = tmp4(items, stubArray(tmp));
        tmp = _mod4915(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = _mod660;
}

export default fn;
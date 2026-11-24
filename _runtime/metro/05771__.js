// === Module 5771: ? ===

// Module 5771
import arrayPush from "arrayPush" /* 657 */;
import stubArray from "stubArray" /* 658 */;
import _mod659 from "module_659" /* 659 */;
import _mod5767 from "module_5767" /* 5767 */;

if (Object.getOwnPropertySymbols) {
  let fn = (arg0) => {
    let tmp = arg0;
    items = [];
    if (arg0) {
      do {
        let tmp4 = arrayPush;
        let tmp4Result = tmp4(items, stubArray(tmp));
        tmp = _mod5767(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = _mod659;
}

export default fn;
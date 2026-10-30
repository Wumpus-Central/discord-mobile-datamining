// === Module 5813: ? ===

// Module 5813
import arrayPush from "arrayPush" /* 657 */;
import stubArray from "stubArray" /* 658 */;
import _mod659 from "module_659" /* 659 */;
import _mod5809 from "module_5809" /* 5809 */;

if (Object.getOwnPropertySymbols) {
  let fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
        let tmp4 = arrayPush;
        let tmp4Result = tmp4(items, stubArray(tmp));
        tmp = _mod5809(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = _mod659;
}

export default fn;
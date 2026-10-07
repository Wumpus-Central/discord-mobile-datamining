// === Module 4980: ? ===

// Module 4980
import arrayPush from "arrayPush" /* 669 */;
import stubArray from "stubArray" /* 670 */;
import _mod671 from "module_671" /* 671 */;
import _mod4976 from "module_4976" /* 4976 */;

if (Object.getOwnPropertySymbols) {
  let fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
        let tmp4 = arrayPush;
        let tmp4Result = tmp4(items, stubArray(tmp));
        tmp = _mod4976(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = _mod671;
}

export default fn;
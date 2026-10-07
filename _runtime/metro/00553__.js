// === Module 553: ? ===

// Module 553
import _mod522 from "module_522" /* 522 */;
import _mod535 from "module_535" /* 535 */;


export default function isSymbol(arg0) {
  let tmp = typeof arg0 === "symbol";
  if (typeof arg0 !== "symbol") {
    let tmp2 = _mod535(arg0);
    if (tmp2) {
      tmp2 = "[object Symbol]" == _mod522(arg0);
    }
    tmp = tmp2;
  }
  return tmp;
};
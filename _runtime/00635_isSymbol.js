// === Module 635: isSymbol ===

// Module 635 (isSymbol)
import isObjectLike from "isObjectLike" /* 617 */;


export default function isSymbol(arg0) {
  let tmp = typeof arg0 === "symbol";
  if (typeof arg0 !== "symbol") {
    let tmp2 = isObjectLike(arg0);
    if (tmp2) {
      tmp2 = "[object Symbol]" == tmp3(604)(arg0);
    }
    tmp = tmp2;
    tmp3 = require;
  }
  return tmp;
};
// === Module 553: isSymbol ===

// Module 553 (isSymbol)
import baseGetTag from "baseGetTag" /* 522 */;
import isObjectLike from "isObjectLike" /* 535 */;


export default function isSymbol(arg0) {
  let tmp = typeof arg0 === "symbol";
  if (!tmp) {
    tmp = isObjectLike(arg0) && "[object Symbol]" == baseGetTag(arg0);
    const tmp2 = isObjectLike(arg0) && "[object Symbol]" == baseGetTag(arg0);
  }
  return tmp;
};
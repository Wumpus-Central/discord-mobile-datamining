// _runtime/00553_isSymbol.js
import baseGetTag from "00522_baseGetTag.js";
import isObjectLike from "00535_isObjectLike.js";

export default function isSymbol(arg0) {
  let tmp = typeof arg0 === "symbol";
  if (!tmp) {
    tmp = isObjectLike(arg0) && "[object Symbol]" == baseGetTag(arg0);
    const tmp2 = isObjectLike(arg0) && "[object Symbol]" == baseGetTag(arg0);
  }
  return tmp;
}

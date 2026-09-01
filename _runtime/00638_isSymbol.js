// _runtime/00638_isSymbol.js
import isObjectLike from "00620_isObjectLike.js";

export default function isSymbol(arg0) {
  let tmp = typeof arg0 === "symbol";
  if (typeof arg0 !== "symbol") {
    let tmp2 = isObjectLike(arg0);
    if (tmp2) {
      tmp2 = "[object Symbol]" == tmp3(607)(arg0);
    }
    tmp = tmp2;
    tmp3 = require;
  }
  return tmp;
}

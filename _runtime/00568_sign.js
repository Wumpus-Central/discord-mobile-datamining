// _runtime/00568_sign.js
import isNaN from "00569_isNaN.js";

export default function sign(arg0) {
  let tmp = arg0;
  if (!isNaN(arg0)) {
    tmp = arg0;
    if (0 !== arg0) {
      let num2 = 1;
      if (arg0 < 0) {
        num2 = -1;
      }
      tmp = num2;
    }
  }
  return tmp;
}

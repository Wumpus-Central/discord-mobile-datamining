// === Module 1313: sign ===

// Module 1313 (sign)
import isNaN from "isNaN" /* 1314 */;


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
};
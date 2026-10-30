// === Module 1324: sign ===

// Module 1324 (sign)
import _mod1325 from "module_1325" /* 1325 */;


export default function sign(arg0) {
  let tmp = arg0;
  if (!_mod1325(arg0)) {
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
// === Module 1312: sign ===

// Module 1312 (sign)
import _mod1313 from "module_1313" /* 1313 */;


export default function sign(arg0) {
  let tmp = arg0;
  if (!_mod1313(arg0)) {
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
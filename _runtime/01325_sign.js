// === Module 1325: sign ===

// Module 1325 (sign)
import _mod1326 from "module_1326" /* 1326 */;


export default function sign(arg0) {
  let tmp = arg0;
  if (!_mod1326(arg0)) {
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
// _runtime/01312_sign.js
import _mod1313 from "metro/01313__.js";

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
}

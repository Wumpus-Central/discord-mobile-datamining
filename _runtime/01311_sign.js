// _runtime/01311_sign.js
import _mod1312 from "metro/01312__.js";

export default function sign(arg0) {
  let tmp = arg0;
  if (!_mod1312(arg0)) {
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

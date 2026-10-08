// _runtime/01335_sign.js
import _mod1336 from "metro/01336__.js";

export default function sign(arg0) {
  let tmp = arg0;
  if (!_mod1336(arg0)) {
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

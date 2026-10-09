// _runtime/01336_sign.js
import _mod1337 from "metro/01337__.js";

export default function sign(arg0) {
  let tmp = arg0;
  if (!_mod1337(arg0)) {
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

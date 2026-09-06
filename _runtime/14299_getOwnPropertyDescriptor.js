// _runtime/14299_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor2 from "14300_getOwnPropertyDescriptor.js";
import _mod14302 from "metro/14302__.js";
import text from "14309_text.js";
import _mod14332 from "metro/14332__.js";

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14302(arg0);
    const tmp4 = text(arg1);
    if (!_mod14332) {
      if (tmp(14320)(tmp3, tmp4)) {
        let tmpResult = tmp(14334);
        tmpResult = tmp(14330);
        return tmpResult(!tmpResult(tmp(14335).f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

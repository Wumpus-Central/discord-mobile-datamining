// _runtime/metro/14299__.js
import _mod14300 from "14300__.js";
import _mod14302 from "14302__.js";
import text from "../14309_text.js";
import _mod14332 from "14332__.js";

if (!_mod14300) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14302(arg0);
    const tmp4 = text(arg1);
    if (!_mod14332) {
      if (tmp(14320)(tmp3, tmp4)) {
        tmp(14334);
        const tmpResult = tmp(14330);
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

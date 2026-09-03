// _runtime/14193_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor2 from "14194_getOwnPropertyDescriptor.js";
import _mod14196 from "metro/14196__.js";
import text from "14203_text.js";
import _mod14226 from "metro/14226__.js";

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14196(arg0);
    const tmp4 = text(arg1);
    if (!_mod14226) {
      if (tmp(14214)(tmp3, tmp4)) {
        let tmpResult = tmp(14228);
        tmpResult = tmp(14224);
        return tmpResult(!tmpResult(tmp(14229).f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

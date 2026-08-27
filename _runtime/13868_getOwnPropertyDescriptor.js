// _runtime/13868_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor2 from "13869_getOwnPropertyDescriptor.js";
import _mod13871 from "metro/13871__.js";
import text from "13878_text.js";
import _mod13901 from "metro/13901__.js";

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13871(arg0);
    const tmp4 = text(arg1);
    if (!_mod13901) {
      if (tmp(13889)(tmp3, tmp4)) {
        let tmpResult = tmp(13903);
        tmpResult = tmp(13899);
        return tmpResult(!tmpResult(tmp(13904).f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {
      }
    }
  };
}

export const f = getOwnPropertyDescriptor;
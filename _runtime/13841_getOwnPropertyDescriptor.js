// _runtime/13841_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor2 from "13842_getOwnPropertyDescriptor.js";
import _mod13844 from "metro/13844__.js";
import text from "13851_text.js";
import _mod13874 from "metro/13874__.js";

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13844(arg0);
    const tmp4 = text(arg1);
    if (!_mod13874) {
      if (tmp(13862)(tmp3, tmp4)) {
        let tmpResult = tmp(13876);
        tmpResult = tmp(13872);
        return tmpResult(!tmpResult(tmp(13877).f, tmp3, tmp4), tmp3[tmp4]);
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
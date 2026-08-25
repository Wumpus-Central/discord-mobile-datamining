// _runtime/13768_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor2 from "13769_getOwnPropertyDescriptor.js";
import _mod13771 from "metro/13771__.js";
import text from "13778_text.js";
import _mod13801 from "metro/13801__.js";

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13771(arg0);
    const tmp4 = text(arg1);
    if (!_mod13801) {
      if (tmp(13789)(tmp3, tmp4)) {
        let tmpResult = tmp(13803);
        tmpResult = tmp(13799);
        return tmpResult(!tmpResult(tmp(13804).f, tmp3, tmp4), tmp3[tmp4]);
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
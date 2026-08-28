// _runtime/13887_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor2 from "13888_getOwnPropertyDescriptor.js";
import _mod13890 from "metro/13890__.js";
import text from "13897_text.js";
import _mod13920 from "metro/13920__.js";

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13890(arg0);
    const tmp4 = text(arg1);
    if (!_mod13920) {
      if (tmp(13908)(tmp3, tmp4)) {
        let tmpResult = tmp(13922);
        tmpResult = tmp(13918);
        return tmpResult(!tmpResult(tmp(13923).f, tmp3, tmp4), tmp3[tmp4]);
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
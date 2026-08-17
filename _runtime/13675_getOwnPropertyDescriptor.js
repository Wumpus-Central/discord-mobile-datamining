// _runtime/13675_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor2 from "13676_getOwnPropertyDescriptor.js";
import _mod13678 from "metro/13678__.js";
import text from "13685_text.js";
import _mod13708 from "metro/13708__.js";

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13678(arg0);
    const tmp4 = text(arg1);
    if (!_mod13708) {
      if (tmp(13696)(tmp3, tmp4)) {
        let tmpResult = tmp(13710);
        tmpResult = tmp(13706);
        return tmpResult(!tmpResult(tmp(13711).f, tmp3, tmp4), tmp3[tmp4]);
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
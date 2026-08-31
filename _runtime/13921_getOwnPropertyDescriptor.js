// _runtime/13921_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor2 from "13922_getOwnPropertyDescriptor.js";
import _mod13924 from "metro/13924__.js";
import text from "13931_text.js";
import _mod13954 from "metro/13954__.js";

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13924(arg0);
    const tmp4 = text(arg1);
    if (!_mod13954) {
      if (tmp(13942)(tmp3, tmp4)) {
        let tmpResult = tmp(13956);
        tmpResult = tmp(13952);
        return tmpResult(!tmpResult(tmp(13957).f, tmp3, tmp4), tmp3[tmp4]);
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
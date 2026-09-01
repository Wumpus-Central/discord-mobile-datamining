// _runtime/13954_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor2 from "13955_getOwnPropertyDescriptor.js";
import _mod13957 from "metro/13957__.js";
import text from "13964_text.js";
import _mod13987 from "metro/13987__.js";

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13957(arg0);
    const tmp4 = text(arg1);
    if (!_mod13987) {
      if (tmp(13975)(tmp3, tmp4)) {
        let tmpResult = tmp(13989);
        tmpResult = tmp(13985);
        return tmpResult(!tmpResult(tmp(13990).f, tmp3, tmp4), tmp3[tmp4]);
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
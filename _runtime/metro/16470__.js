// _runtime/metro/16470__.js
import _mod16471 from "16471__.js";
import _mod16473 from "16473__.js";
import text from "../16480_text.js";
import _mod16491 from "16491__.js";
import _mod16501 from "16501__.js";
import _mod16503 from "16503__.js";
import _mod16505 from "16505__.js";
import _mod16506 from "16506__.js";

if (!_mod16471) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16473(arg0);
    const tmp4 = text(arg1);
    if (!_mod16503) {
      if (_mod16491(tmp3, tmp4)) {
        const tmpResult = _mod16505;
        return tmpResult(!_mod16501(_mod16506.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

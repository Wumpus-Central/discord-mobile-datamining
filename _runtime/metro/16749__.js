// _runtime/metro/16749__.js
import _mod16750 from "16750__.js";
import _mod16752 from "16752__.js";
import text from "../16759_text.js";
import _mod16770 from "16770__.js";
import _mod16780 from "16780__.js";
import _mod16782 from "16782__.js";
import _mod16784 from "16784__.js";
import _mod16785 from "16785__.js";

if (!_mod16750) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16752(arg0);
    const tmp4 = text(arg1);
    if (!_mod16782) {
      if (_mod16770(tmp3, tmp4)) {
        const tmpResult = _mod16784;
        return tmpResult(!_mod16780(_mod16785.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

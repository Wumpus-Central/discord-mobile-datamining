// _runtime/metro/16085__.js
import _mod16086 from "16086__.js";
import _mod16088 from "16088__.js";
import text from "../16095_text.js";
import _mod16106 from "16106__.js";
import _mod16116 from "16116__.js";
import _mod16118 from "16118__.js";
import _mod16120 from "16120__.js";
import _mod16121 from "16121__.js";

if (!_mod16086) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16088(arg0);
    const tmp4 = text(arg1);
    if (!_mod16118) {
      if (_mod16106(tmp3, tmp4)) {
        const tmpResult = _mod16120;
        return tmpResult(!_mod16116(_mod16121.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

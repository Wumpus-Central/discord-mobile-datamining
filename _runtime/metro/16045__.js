// _runtime/metro/16045__.js
import _mod16046 from "16046__.js";
import _mod16048 from "16048__.js";
import text from "../16055_text.js";
import _mod16066 from "16066__.js";
import _mod16076 from "16076__.js";
import _mod16078 from "16078__.js";
import _mod16080 from "16080__.js";
import _mod16081 from "16081__.js";

if (!_mod16046) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16048(arg0);
    const tmp4 = text(arg1);
    if (!_mod16078) {
      if (_mod16066(tmp3, tmp4)) {
        const tmpResult = _mod16080;
        return tmpResult(!_mod16076(_mod16081.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

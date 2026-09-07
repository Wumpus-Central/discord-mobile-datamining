// _runtime/metro/14302__.js
import _mod14303 from "14303__.js";
import _mod14305 from "14305__.js";
import text from "../14312_text.js";
import _mod14323 from "14323__.js";
import _mod14333 from "14333__.js";
import _mod14335 from "14335__.js";
import _mod14337 from "14337__.js";
import _mod14338 from "14338__.js";

if (!_mod14303) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14305(arg0);
    const tmp4 = text(arg1);
    if (!_mod14335) {
      if (_mod14323(tmp3, tmp4)) {
        const tmpResult = _mod14333;
        return tmpResult(!tmpResult(_mod14338.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

// _runtime/metro/13994__.js
import _mod13995 from "13995__.js";
import _mod13997 from "13997__.js";
import text from "../14004_text.js";
import _mod14015 from "14015__.js";
import _mod14025 from "14025__.js";
import _mod14027 from "14027__.js";
import _mod14029 from "14029__.js";
import _mod14030 from "14030__.js";

if (!_mod13995) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13997(arg0);
    const tmp4 = text(arg1);
    if (!_mod14027) {
      if (_mod14015(tmp3, tmp4)) {
        const tmpResult = _mod14029;
        return tmpResult(!_mod14025(_mod14030.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

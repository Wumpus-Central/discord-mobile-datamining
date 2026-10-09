// _runtime/metro/14476__.js
import _mod14477 from "14477__.js";
import _mod14479 from "14479__.js";
import text from "../14486_text.js";
import _mod14497 from "14497__.js";
import _mod14507 from "14507__.js";
import _mod14509 from "14509__.js";
import _mod14511 from "14511__.js";
import _mod14512 from "14512__.js";

if (!_mod14477) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14479(arg0);
    const tmp4 = text(arg1);
    if (!_mod14509) {
      if (_mod14497(tmp3, tmp4)) {
        const tmpResult = _mod14511;
        return tmpResult(!_mod14507(_mod14512.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

// _runtime/metro/14081__.js
import _mod14082 from "14082__.js";
import _mod14084 from "14084__.js";
import text from "../14091_text.js";
import _mod14102 from "14102__.js";
import _mod14112 from "14112__.js";
import _mod14114 from "14114__.js";
import _mod14116 from "14116__.js";
import _mod14117 from "14117__.js";

if (!_mod14082) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14084(arg0);
    const tmp4 = text(arg1);
    if (!_mod14114) {
      if (_mod14102(tmp3, tmp4)) {
        const tmpResult = _mod14116;
        return tmpResult(!_mod14112(_mod14117.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

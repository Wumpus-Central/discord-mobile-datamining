// _runtime/metro/14674__.js
import _mod14675 from "14675__.js";
import _mod14677 from "14677__.js";
import text from "../14684_text.js";
import _mod14695 from "14695__.js";
import _mod14705 from "14705__.js";
import _mod14707 from "14707__.js";
import _mod14709 from "14709__.js";
import _mod14710 from "14710__.js";

if (!_mod14675) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14677(arg0);
    const tmp4 = text(arg1);
    if (!_mod14707) {
      if (_mod14695(tmp3, tmp4)) {
        const tmpResult = _mod14709;
        return tmpResult(!_mod14705(_mod14710.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

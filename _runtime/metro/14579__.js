// _runtime/metro/14579__.js
import _mod14580 from "14580__.js";
import _mod14582 from "14582__.js";
import text from "../14589_text.js";
import _mod14600 from "14600__.js";
import _mod14610 from "14610__.js";
import _mod14612 from "14612__.js";
import _mod14614 from "14614__.js";
import _mod14615 from "14615__.js";

if (!_mod14580) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14582(arg0);
    const tmp4 = text(arg1);
    if (!_mod14612) {
      if (_mod14600(tmp3, tmp4)) {
        const tmpResult = _mod14614;
        return tmpResult(!_mod14610(_mod14615.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

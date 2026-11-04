// _runtime/metro/16362__.js
import _mod16363 from "16363__.js";
import _mod16365 from "16365__.js";
import text from "../16372_text.js";
import _mod16383 from "16383__.js";
import _mod16393 from "16393__.js";
import _mod16395 from "16395__.js";
import _mod16397 from "16397__.js";
import _mod16398 from "16398__.js";

if (!_mod16363) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16365(arg0);
    const tmp4 = text(arg1);
    if (!_mod16395) {
      if (_mod16383(tmp3, tmp4)) {
        const tmpResult = _mod16397;
        return tmpResult(!_mod16393(_mod16398.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

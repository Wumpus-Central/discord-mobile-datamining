// _runtime/metro/14397__.js
import _mod14398 from "14398__.js";
import _mod14400 from "14400__.js";
import text from "../14407_text.js";
import _mod14418 from "14418__.js";
import _mod14428 from "14428__.js";
import _mod14430 from "14430__.js";
import _mod14432 from "14432__.js";
import _mod14433 from "14433__.js";

if (!_mod14398) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14400(arg0);
    const tmp4 = text(arg1);
    if (!_mod14430) {
      if (_mod14418(tmp3, tmp4)) {
        const tmpResult = _mod14432;
        return tmpResult(!_mod14428(_mod14433.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

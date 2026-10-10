// _runtime/metro/14530__.js
import _mod14531 from "14531__.js";
import _mod14533 from "14533__.js";
import text from "../14540_text.js";
import _mod14551 from "14551__.js";
import _mod14561 from "14561__.js";
import _mod14563 from "14563__.js";
import _mod14565 from "14565__.js";
import _mod14566 from "14566__.js";

if (!_mod14531) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14533(arg0);
    const tmp4 = text(arg1);
    if (!_mod14563) {
      if (_mod14551(tmp3, tmp4)) {
        const tmpResult = _mod14565;
        return tmpResult(!_mod14561(_mod14566.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

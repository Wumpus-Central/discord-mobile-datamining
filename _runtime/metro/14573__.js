// _runtime/metro/14573__.js
import _mod14574 from "14574__.js";
import _mod14576 from "14576__.js";
import text from "../14583_text.js";
import _mod14594 from "14594__.js";
import _mod14604 from "14604__.js";
import _mod14606 from "14606__.js";
import _mod14608 from "14608__.js";
import _mod14609 from "14609__.js";

if (!_mod14574) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14576(arg0);
    const tmp4 = text(arg1);
    if (!_mod14606) {
      if (_mod14594(tmp3, tmp4)) {
        const tmpResult = _mod14608;
        return tmpResult(!_mod14604(_mod14609.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

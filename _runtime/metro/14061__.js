// _runtime/metro/14061__.js
import _mod14062 from "14062__.js";
import _mod14064 from "14064__.js";
import text from "../14071_text.js";
import _mod14082 from "14082__.js";
import _mod14092 from "14092__.js";
import _mod14094 from "14094__.js";
import _mod14096 from "14096__.js";
import _mod14097 from "14097__.js";

if (!_mod14062) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14064(arg0);
    const tmp4 = text(arg1);
    if (!_mod14094) {
      if (_mod14082(tmp3, tmp4)) {
        const tmpResult = _mod14096;
        return tmpResult(!_mod14092(_mod14097.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

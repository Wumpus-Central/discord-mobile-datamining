// _runtime/metro/14063__.js
import _mod14064 from "14064__.js";
import _mod14066 from "14066__.js";
import text from "../14073_text.js";
import _mod14084 from "14084__.js";
import _mod14094 from "14094__.js";
import _mod14096 from "14096__.js";
import _mod14098 from "14098__.js";
import _mod14099 from "14099__.js";

if (!_mod14064) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14066(arg0);
    const tmp4 = text(arg1);
    if (!_mod14096) {
      if (_mod14084(tmp3, tmp4)) {
        const tmpResult = _mod14098;
        return tmpResult(!_mod14094(_mod14099.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

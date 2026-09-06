// _runtime/metro/14299__.js
import _mod14300 from "14300__.js";
import _mod14302 from "14302__.js";
import text from "../14309_text.js";
import _mod14320 from "14320__.js";
import _mod14330 from "14330__.js";
import _mod14332 from "14332__.js";
import _mod14334 from "14334__.js";
import _mod14335 from "14335__.js";

if (!_mod14300) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14302(arg0);
    const tmp4 = text(arg1);
    if (!_mod14332) {
      if (_mod14320(tmp3, tmp4)) {
        const tmpResult = _mod14330;
        return tmpResult(!tmpResult(_mod14335.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

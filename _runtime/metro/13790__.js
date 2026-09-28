// _runtime/metro/13790__.js
import _mod13791 from "13791__.js";
import _mod13793 from "13793__.js";
import text from "../13800_text.js";
import _mod13811 from "13811__.js";
import _mod13821 from "13821__.js";
import _mod13823 from "13823__.js";
import _mod13825 from "13825__.js";
import _mod13826 from "13826__.js";

if (!_mod13791) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13793(arg0);
    const tmp4 = text(arg1);
    if (!_mod13823) {
      if (_mod13811(tmp3, tmp4)) {
        const tmpResult = _mod13825;
        return tmpResult(!_mod13821(_mod13826.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

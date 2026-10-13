// _runtime/metro/14874__.js
import _mod14875 from "14875__.js";
import _mod14877 from "14877__.js";
import text from "../14884_text.js";
import _mod14895 from "14895__.js";
import _mod14905 from "14905__.js";
import _mod14907 from "14907__.js";
import _mod14909 from "14909__.js";
import _mod14910 from "14910__.js";

if (!_mod14875) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14877(arg0);
    const tmp4 = text(arg1);
    if (!_mod14907) {
      if (_mod14895(tmp3, tmp4)) {
        const tmpResult = _mod14909;
        return tmpResult(!_mod14905(_mod14910.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

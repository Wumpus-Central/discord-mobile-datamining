// _runtime/metro/13986__.js
import _mod13987 from "13987__.js";
import _mod13989 from "13989__.js";
import text from "../13996_text.js";
import _mod14007 from "14007__.js";
import _mod14017 from "14017__.js";
import _mod14019 from "14019__.js";
import _mod14021 from "14021__.js";
import _mod14022 from "14022__.js";

if (!_mod13987) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13989(arg0);
    const tmp4 = text(arg1);
    if (!_mod14019) {
      if (_mod14007(tmp3, tmp4)) {
        const tmpResult = _mod14021;
        return tmpResult(!_mod14017(_mod14022.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

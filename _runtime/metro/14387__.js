// _runtime/metro/14387__.js
import _mod14388 from "14388__.js";
import _mod14390 from "14390__.js";
import text from "../14397_text.js";
import _mod14408 from "14408__.js";
import _mod14418 from "14418__.js";
import _mod14420 from "14420__.js";
import _mod14422 from "14422__.js";
import _mod14423 from "14423__.js";

if (!_mod14388) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14390(arg0);
    const tmp4 = text(arg1);
    if (!_mod14420) {
      if (_mod14408(tmp3, tmp4)) {
        const tmpResult = _mod14418;
        return tmpResult(!tmpResult(_mod14423.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

// _runtime/metro/14912__.js
import _mod14913 from "14913__.js";
import _mod14915 from "14915__.js";
import text from "../14922_text.js";
import _mod14933 from "14933__.js";
import _mod14943 from "14943__.js";
import _mod14945 from "14945__.js";
import _mod14947 from "14947__.js";
import _mod14948 from "14948__.js";

if (!_mod14913) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14915(arg0);
    const tmp4 = text(arg1);
    if (!_mod14945) {
      if (_mod14933(tmp3, tmp4)) {
        const tmpResult = _mod14947;
        return tmpResult(!_mod14943(_mod14948.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

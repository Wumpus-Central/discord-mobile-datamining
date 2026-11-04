// _runtime/metro/16375__.js
import _mod16376 from "16376__.js";
import _mod16378 from "16378__.js";
import text from "../16385_text.js";
import _mod16396 from "16396__.js";
import _mod16406 from "16406__.js";
import _mod16408 from "16408__.js";
import _mod16410 from "16410__.js";
import _mod16411 from "16411__.js";

if (!_mod16376) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16378(arg0);
    const tmp4 = text(arg1);
    if (!_mod16408) {
      if (_mod16396(tmp3, tmp4)) {
        const tmpResult = _mod16410;
        return tmpResult(!_mod16406(_mod16411.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

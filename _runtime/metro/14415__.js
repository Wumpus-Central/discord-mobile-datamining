// _runtime/metro/14415__.js
import _mod14416 from "14416__.js";
import _mod14418 from "14418__.js";
import text from "../14425_text.js";
import _mod14436 from "14436__.js";
import _mod14446 from "14446__.js";
import _mod14448 from "14448__.js";
import _mod14450 from "14450__.js";
import _mod14451 from "14451__.js";

if (!_mod14416) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14418(arg0);
    const tmp4 = text(arg1);
    if (!_mod14448) {
      if (_mod14436(tmp3, tmp4)) {
        const tmpResult = _mod14450;
        return tmpResult(!_mod14446(_mod14451.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

// _runtime/metro/14352__.js
import _mod14353 from "14353__.js";
import _mod14355 from "14355__.js";
import text from "../14362_text.js";
import _mod14373 from "14373__.js";
import _mod14383 from "14383__.js";
import _mod14385 from "14385__.js";
import _mod14387 from "14387__.js";
import _mod14388 from "14388__.js";

if (!_mod14353) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14355(arg0);
    const tmp4 = text(arg1);
    if (!_mod14385) {
      if (_mod14373(tmp3, tmp4)) {
        const tmpResult = _mod14383;
        return tmpResult(!tmpResult(_mod14388.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

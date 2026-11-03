// _runtime/metro/16273__.js
import _mod16274 from "16274__.js";
import _mod16276 from "16276__.js";
import text from "../16283_text.js";
import _mod16294 from "16294__.js";
import _mod16304 from "16304__.js";
import _mod16306 from "16306__.js";
import _mod16308 from "16308__.js";
import _mod16309 from "16309__.js";

if (!_mod16274) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16276(arg0);
    const tmp4 = text(arg1);
    if (!_mod16306) {
      if (_mod16294(tmp3, tmp4)) {
        const tmpResult = _mod16308;
        return tmpResult(!_mod16304(_mod16309.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

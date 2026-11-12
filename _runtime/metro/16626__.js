// _runtime/metro/16626__.js
import _mod16627 from "16627__.js";
import _mod16629 from "16629__.js";
import text from "../16636_text.js";
import _mod16647 from "16647__.js";
import _mod16657 from "16657__.js";
import _mod16659 from "16659__.js";
import _mod16661 from "16661__.js";
import _mod16662 from "16662__.js";

if (!_mod16627) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16629(arg0);
    const tmp4 = text(arg1);
    if (!_mod16659) {
      if (_mod16647(tmp3, tmp4)) {
        const tmpResult = _mod16661;
        return tmpResult(!_mod16657(_mod16662.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

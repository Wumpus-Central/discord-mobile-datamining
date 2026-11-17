// _runtime/metro/16784__.js
import _mod16785 from "16785__.js";
import _mod16787 from "16787__.js";
import text from "../16794_text.js";
import _mod16805 from "16805__.js";
import _mod16815 from "16815__.js";
import _mod16817 from "16817__.js";
import _mod16819 from "16819__.js";
import _mod16820 from "16820__.js";

if (!_mod16785) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16787(arg0);
    const tmp4 = text(arg1);
    if (!_mod16817) {
      if (_mod16805(tmp3, tmp4)) {
        const tmpResult = _mod16819;
        return tmpResult(!_mod16815(_mod16820.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

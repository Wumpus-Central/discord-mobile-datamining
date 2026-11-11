// _runtime/metro/16631__.js
import _mod16632 from "16632__.js";
import _mod16634 from "16634__.js";
import text from "../16641_text.js";
import _mod16652 from "16652__.js";
import _mod16662 from "16662__.js";
import _mod16664 from "16664__.js";
import _mod16666 from "16666__.js";
import _mod16667 from "16667__.js";

if (!_mod16632) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16634(arg0);
    const tmp4 = text(arg1);
    if (!_mod16664) {
      if (_mod16652(tmp3, tmp4)) {
        const tmpResult = _mod16666;
        return tmpResult(!_mod16662(_mod16667.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

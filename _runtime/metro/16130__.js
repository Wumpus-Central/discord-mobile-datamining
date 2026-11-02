// _runtime/metro/16130__.js
import _mod16131 from "16131__.js";
import _mod16133 from "16133__.js";
import text from "../16140_text.js";
import _mod16151 from "16151__.js";
import _mod16161 from "16161__.js";
import _mod16163 from "16163__.js";
import _mod16165 from "16165__.js";
import _mod16166 from "16166__.js";

if (!_mod16131) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16133(arg0);
    const tmp4 = text(arg1);
    if (!_mod16163) {
      if (_mod16151(tmp3, tmp4)) {
        const tmpResult = _mod16165;
        return tmpResult(!_mod16161(_mod16166.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

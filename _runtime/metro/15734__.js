// _runtime/metro/15734__.js
import _mod15735 from "15735__.js";
import _mod15737 from "15737__.js";
import text from "../15744_text.js";
import _mod15755 from "15755__.js";
import _mod15765 from "15765__.js";
import _mod15767 from "15767__.js";
import _mod15769 from "15769__.js";
import _mod15770 from "15770__.js";

if (!_mod15735) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15737(arg0);
    const tmp4 = text(arg1);
    if (!_mod15767) {
      if (_mod15755(tmp3, tmp4)) {
        const tmpResult = _mod15769;
        return tmpResult(!_mod15765(_mod15770.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

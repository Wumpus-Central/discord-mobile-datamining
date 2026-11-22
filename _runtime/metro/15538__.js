// _runtime/metro/15538__.js
import _mod15539 from "15539__.js";
import _mod15541 from "15541__.js";
import text from "../15548_text.js";
import _mod15559 from "15559__.js";
import _mod15569 from "15569__.js";
import _mod15571 from "15571__.js";
import _mod15573 from "15573__.js";
import _mod15574 from "15574__.js";

if (!_mod15539) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15541(arg0);
    const tmp4 = text(arg1);
    if (!_mod15571) {
      if (_mod15559(tmp3, tmp4)) {
        const tmpResult = _mod15573;
        return tmpResult(!_mod15569(_mod15574.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

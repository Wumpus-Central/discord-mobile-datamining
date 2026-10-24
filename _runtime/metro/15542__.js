// _runtime/metro/15542__.js
import _mod15543 from "15543__.js";
import _mod15545 from "15545__.js";
import text from "../15552_text.js";
import _mod15563 from "15563__.js";
import _mod15573 from "15573__.js";
import _mod15575 from "15575__.js";
import _mod15577 from "15577__.js";
import _mod15578 from "15578__.js";

if (!_mod15543) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15545(arg0);
    const tmp4 = text(arg1);
    if (!_mod15575) {
      if (_mod15563(tmp3, tmp4)) {
        const tmpResult = _mod15577;
        return tmpResult(!_mod15573(_mod15578.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

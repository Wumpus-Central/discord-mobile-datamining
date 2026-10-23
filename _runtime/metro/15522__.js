// _runtime/metro/15522__.js
import _mod15523 from "15523__.js";
import _mod15525 from "15525__.js";
import text from "../15532_text.js";
import _mod15543 from "15543__.js";
import _mod15553 from "15553__.js";
import _mod15555 from "15555__.js";
import _mod15557 from "15557__.js";
import _mod15558 from "15558__.js";

if (!_mod15523) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15525(arg0);
    const tmp4 = text(arg1);
    if (!_mod15555) {
      if (_mod15543(tmp3, tmp4)) {
        const tmpResult = _mod15557;
        return tmpResult(!_mod15553(_mod15558.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

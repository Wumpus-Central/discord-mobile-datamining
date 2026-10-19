// _runtime/metro/15354__.js
import _mod15355 from "15355__.js";
import _mod15357 from "15357__.js";
import text from "../15364_text.js";
import _mod15375 from "15375__.js";
import _mod15385 from "15385__.js";
import _mod15387 from "15387__.js";
import _mod15389 from "15389__.js";
import _mod15390 from "15390__.js";

if (!_mod15355) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15357(arg0);
    const tmp4 = text(arg1);
    if (!_mod15387) {
      if (_mod15375(tmp3, tmp4)) {
        const tmpResult = _mod15389;
        return tmpResult(!_mod15385(_mod15390.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

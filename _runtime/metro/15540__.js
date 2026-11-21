// _runtime/metro/15540__.js
import _mod15541 from "15541__.js";
import _mod15543 from "15543__.js";
import text from "../15550_text.js";
import _mod15561 from "15561__.js";
import _mod15571 from "15571__.js";
import _mod15573 from "15573__.js";
import _mod15575 from "15575__.js";
import _mod15576 from "15576__.js";

if (!_mod15541) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15543(arg0);
    const tmp4 = text(arg1);
    if (!_mod15573) {
      if (_mod15561(tmp3, tmp4)) {
        const tmpResult = _mod15575;
        return tmpResult(!_mod15571(_mod15576.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

// _runtime/metro/15417__.js
import _mod15418 from "15418__.js";
import _mod15420 from "15420__.js";
import text from "../15427_text.js";
import _mod15438 from "15438__.js";
import _mod15448 from "15448__.js";
import _mod15450 from "15450__.js";
import _mod15452 from "15452__.js";
import _mod15453 from "15453__.js";

if (!_mod15418) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15420(arg0);
    const tmp4 = text(arg1);
    if (!_mod15450) {
      if (_mod15438(tmp3, tmp4)) {
        const tmpResult = _mod15452;
        return tmpResult(!_mod15448(_mod15453.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

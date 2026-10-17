// _runtime/metro/15322__.js
import _mod15323 from "15323__.js";
import _mod15325 from "15325__.js";
import text from "../15332_text.js";
import _mod15343 from "15343__.js";
import _mod15353 from "15353__.js";
import _mod15355 from "15355__.js";
import _mod15357 from "15357__.js";
import _mod15358 from "15358__.js";

if (!_mod15323) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15325(arg0);
    const tmp4 = text(arg1);
    if (!_mod15355) {
      if (_mod15343(tmp3, tmp4)) {
        const tmpResult = _mod15357;
        return tmpResult(!_mod15353(_mod15358.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

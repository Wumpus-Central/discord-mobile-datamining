// _runtime/metro/15243__.js
import _mod15244 from "15244__.js";
import _mod15246 from "15246__.js";
import text from "../15253_text.js";
import _mod15264 from "15264__.js";
import _mod15274 from "15274__.js";
import _mod15276 from "15276__.js";
import _mod15278 from "15278__.js";
import _mod15279 from "15279__.js";

if (!_mod15244) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15246(arg0);
    const tmp4 = text(arg1);
    if (!_mod15276) {
      if (_mod15264(tmp3, tmp4)) {
        const tmpResult = _mod15278;
        return tmpResult(!_mod15274(_mod15279.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

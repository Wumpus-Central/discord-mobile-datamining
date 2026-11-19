// _runtime/metro/15453__.js
import _mod15454 from "15454__.js";
import _mod15456 from "15456__.js";
import text from "../15463_text.js";
import _mod15474 from "15474__.js";
import _mod15484 from "15484__.js";
import _mod15486 from "15486__.js";
import _mod15488 from "15488__.js";
import _mod15489 from "15489__.js";

if (!_mod15454) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15456(arg0);
    const tmp4 = text(arg1);
    if (!_mod15486) {
      if (_mod15474(tmp3, tmp4)) {
        const tmpResult = _mod15488;
        return tmpResult(!_mod15484(_mod15489.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

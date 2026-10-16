// _runtime/metro/15253__.js
import _mod15254 from "15254__.js";
import _mod15256 from "15256__.js";
import text from "../15263_text.js";
import _mod15274 from "15274__.js";
import _mod15284 from "15284__.js";
import _mod15286 from "15286__.js";
import _mod15288 from "15288__.js";
import _mod15289 from "15289__.js";

if (!_mod15254) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15256(arg0);
    const tmp4 = text(arg1);
    if (!_mod15286) {
      if (_mod15274(tmp3, tmp4)) {
        const tmpResult = _mod15288;
        return tmpResult(!_mod15284(_mod15289.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

// _runtime/metro/15372__.js
import _mod15373 from "15373__.js";
import _mod15375 from "15375__.js";
import text from "../15382_text.js";
import _mod15393 from "15393__.js";
import _mod15403 from "15403__.js";
import _mod15405 from "15405__.js";
import _mod15407 from "15407__.js";
import _mod15408 from "15408__.js";

if (!_mod15373) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15375(arg0);
    const tmp4 = text(arg1);
    if (!_mod15405) {
      if (_mod15393(tmp3, tmp4)) {
        const tmpResult = _mod15407;
        return tmpResult(!_mod15403(_mod15408.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

// _runtime/metro/15467__.js
import _mod15468 from "15468__.js";
import _mod15470 from "15470__.js";
import text from "../15477_text.js";
import _mod15488 from "15488__.js";
import _mod15498 from "15498__.js";
import _mod15500 from "15500__.js";
import _mod15502 from "15502__.js";
import _mod15503 from "15503__.js";

if (!_mod15468) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15470(arg0);
    const tmp4 = text(arg1);
    if (!_mod15500) {
      if (_mod15488(tmp3, tmp4)) {
        const tmpResult = _mod15502;
        return tmpResult(!_mod15498(_mod15503.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

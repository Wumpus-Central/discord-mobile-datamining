// _runtime/metro/15501__.js
import _mod15502 from "15502__.js";
import _mod15504 from "15504__.js";
import text from "../15511_text.js";
import _mod15522 from "15522__.js";
import _mod15532 from "15532__.js";
import _mod15534 from "15534__.js";
import _mod15536 from "15536__.js";
import _mod15537 from "15537__.js";

if (!_mod15502) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15504(arg0);
    const tmp4 = text(arg1);
    if (!_mod15534) {
      if (_mod15522(tmp3, tmp4)) {
        const tmpResult = _mod15536;
        return tmpResult(!_mod15532(_mod15537.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

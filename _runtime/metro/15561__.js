// _runtime/metro/15561__.js
import _mod15562 from "15562__.js";
import _mod15564 from "15564__.js";
import text from "../15571_text.js";
import _mod15582 from "15582__.js";
import _mod15592 from "15592__.js";
import _mod15594 from "15594__.js";
import _mod15596 from "15596__.js";
import _mod15597 from "15597__.js";

if (!_mod15562) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15564(arg0);
    const tmp4 = text(arg1);
    if (!_mod15594) {
      if (_mod15582(tmp3, tmp4)) {
        const tmpResult = _mod15596;
        return tmpResult(!_mod15592(_mod15597.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

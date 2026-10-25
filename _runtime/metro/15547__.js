// _runtime/metro/15547__.js
import _mod15548 from "15548__.js";
import _mod15550 from "15550__.js";
import text from "../15557_text.js";
import _mod15568 from "15568__.js";
import _mod15578 from "15578__.js";
import _mod15580 from "15580__.js";
import _mod15582 from "15582__.js";
import _mod15583 from "15583__.js";

if (!_mod15548) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15550(arg0);
    const tmp4 = text(arg1);
    if (!_mod15580) {
      if (_mod15568(tmp3, tmp4)) {
        const tmpResult = _mod15582;
        return tmpResult(!_mod15578(_mod15583.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

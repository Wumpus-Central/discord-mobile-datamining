// _runtime/metro/15741__.js
import _mod15742 from "15742__.js";
import _mod15744 from "15744__.js";
import text from "../15751_text.js";
import _mod15762 from "15762__.js";
import _mod15772 from "15772__.js";
import _mod15774 from "15774__.js";
import _mod15776 from "15776__.js";
import _mod15777 from "15777__.js";

if (!_mod15742) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15744(arg0);
    const tmp4 = text(arg1);
    if (!_mod15774) {
      if (_mod15762(tmp3, tmp4)) {
        const tmpResult = _mod15776;
        return tmpResult(!_mod15772(_mod15777.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

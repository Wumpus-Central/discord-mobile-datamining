// _runtime/metro/15444__.js
import _mod15445 from "15445__.js";
import _mod15447 from "15447__.js";
import text from "../15454_text.js";
import _mod15465 from "15465__.js";
import _mod15475 from "15475__.js";
import _mod15477 from "15477__.js";
import _mod15479 from "15479__.js";
import _mod15480 from "15480__.js";

if (!_mod15445) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15447(arg0);
    const tmp4 = text(arg1);
    if (!_mod15477) {
      if (_mod15465(tmp3, tmp4)) {
        const tmpResult = _mod15479;
        return tmpResult(!_mod15475(_mod15480.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

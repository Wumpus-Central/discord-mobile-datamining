// _runtime/metro/13959__.js
import _mod13960 from "13960__.js";
import _mod13962 from "13962__.js";
import text from "../13969_text.js";
import _mod13980 from "13980__.js";
import _mod13990 from "13990__.js";
import _mod13992 from "13992__.js";
import _mod13994 from "13994__.js";
import _mod13995 from "13995__.js";

if (!_mod13960) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13962(arg0);
    const tmp4 = text(arg1);
    if (!_mod13992) {
      if (_mod13980(tmp3, tmp4)) {
        const tmpResult = _mod13994;
        return tmpResult(!_mod13990(_mod13995.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

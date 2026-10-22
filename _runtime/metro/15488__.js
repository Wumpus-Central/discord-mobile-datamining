// _runtime/metro/15488__.js
import _mod15489 from "15489__.js";
import _mod15491 from "15491__.js";
import text from "../15498_text.js";
import _mod15509 from "15509__.js";
import _mod15519 from "15519__.js";
import _mod15521 from "15521__.js";
import _mod15523 from "15523__.js";
import _mod15524 from "15524__.js";

if (!_mod15489) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15491(arg0);
    const tmp4 = text(arg1);
    if (!_mod15521) {
      if (_mod15509(tmp3, tmp4)) {
        const tmpResult = _mod15523;
        return tmpResult(!_mod15519(_mod15524.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

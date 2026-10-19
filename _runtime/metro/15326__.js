// _runtime/metro/15326__.js
import _mod15327 from "15327__.js";
import _mod15329 from "15329__.js";
import text from "../15336_text.js";
import _mod15347 from "15347__.js";
import _mod15357 from "15357__.js";
import _mod15359 from "15359__.js";
import _mod15361 from "15361__.js";
import _mod15362 from "15362__.js";

if (!_mod15327) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15329(arg0);
    const tmp4 = text(arg1);
    if (!_mod15359) {
      if (_mod15347(tmp3, tmp4)) {
        const tmpResult = _mod15361;
        return tmpResult(!_mod15357(_mod15362.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

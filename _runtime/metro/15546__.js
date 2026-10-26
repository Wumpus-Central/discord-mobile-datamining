// _runtime/metro/15546__.js
import _mod15547 from "15547__.js";
import _mod15549 from "15549__.js";
import text from "../15556_text.js";
import _mod15567 from "15567__.js";
import _mod15577 from "15577__.js";
import _mod15579 from "15579__.js";
import _mod15581 from "15581__.js";
import _mod15582 from "15582__.js";

if (!_mod15547) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15549(arg0);
    const tmp4 = text(arg1);
    if (!_mod15579) {
      if (_mod15567(tmp3, tmp4)) {
        const tmpResult = _mod15581;
        return tmpResult(!_mod15577(_mod15582.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

// _runtime/metro/15683__.js
import _mod15684 from "15684__.js";
import _mod15686 from "15686__.js";
import text from "../15693_text.js";
import _mod15704 from "15704__.js";
import _mod15714 from "15714__.js";
import _mod15716 from "15716__.js";
import _mod15718 from "15718__.js";
import _mod15719 from "15719__.js";

if (!_mod15684) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15686(arg0);
    const tmp4 = text(arg1);
    if (!_mod15716) {
      if (_mod15704(tmp3, tmp4)) {
        const tmpResult = _mod15718;
        return tmpResult(!_mod15714(_mod15719.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

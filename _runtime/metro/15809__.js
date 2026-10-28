// _runtime/metro/15809__.js
import _mod15810 from "15810__.js";
import _mod15812 from "15812__.js";
import text from "../15819_text.js";
import _mod15830 from "15830__.js";
import _mod15840 from "15840__.js";
import _mod15842 from "15842__.js";
import _mod15844 from "15844__.js";
import _mod15845 from "15845__.js";

if (!_mod15810) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15812(arg0);
    const tmp4 = text(arg1);
    if (!_mod15842) {
      if (_mod15830(tmp3, tmp4)) {
        const tmpResult = _mod15844;
        return tmpResult(!_mod15840(_mod15845.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

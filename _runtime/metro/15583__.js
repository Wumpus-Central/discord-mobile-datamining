// _runtime/metro/15583__.js
import _mod15584 from "15584__.js";
import _mod15586 from "15586__.js";
import text from "../15593_text.js";
import _mod15604 from "15604__.js";
import _mod15614 from "15614__.js";
import _mod15616 from "15616__.js";
import _mod15618 from "15618__.js";
import _mod15619 from "15619__.js";

if (!_mod15584) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15586(arg0);
    const tmp4 = text(arg1);
    if (!_mod15616) {
      if (_mod15604(tmp3, tmp4)) {
        const tmpResult = _mod15618;
        return tmpResult(!_mod15614(_mod15619.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

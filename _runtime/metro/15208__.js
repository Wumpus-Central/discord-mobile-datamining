// _runtime/metro/15208__.js
import _mod15209 from "15209__.js";
import _mod15211 from "15211__.js";
import text from "../15218_text.js";
import _mod15229 from "15229__.js";
import _mod15239 from "15239__.js";
import _mod15241 from "15241__.js";
import _mod15243 from "15243__.js";
import _mod15244 from "15244__.js";

if (!_mod15209) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15211(arg0);
    const tmp4 = text(arg1);
    if (!_mod15241) {
      if (_mod15229(tmp3, tmp4)) {
        const tmpResult = _mod15243;
        return tmpResult(!_mod15239(_mod15244.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

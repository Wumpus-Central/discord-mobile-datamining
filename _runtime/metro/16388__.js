// _runtime/metro/16388__.js
import _mod16389 from "16389__.js";
import _mod16391 from "16391__.js";
import text from "../16398_text.js";
import _mod16409 from "16409__.js";
import _mod16419 from "16419__.js";
import _mod16421 from "16421__.js";
import _mod16423 from "16423__.js";
import _mod16424 from "16424__.js";

if (!_mod16389) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16391(arg0);
    const tmp4 = text(arg1);
    if (!_mod16421) {
      if (_mod16409(tmp3, tmp4)) {
        const tmpResult = _mod16423;
        return tmpResult(!_mod16419(_mod16424.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

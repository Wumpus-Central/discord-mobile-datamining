// _runtime/metro/16385__.js
import _mod16386 from "16386__.js";
import _mod16388 from "16388__.js";
import text from "../16395_text.js";
import _mod16406 from "16406__.js";
import _mod16416 from "16416__.js";
import _mod16418 from "16418__.js";
import _mod16420 from "16420__.js";
import _mod16421 from "16421__.js";

if (!_mod16386) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16388(arg0);
    const tmp4 = text(arg1);
    if (!_mod16418) {
      if (_mod16406(tmp3, tmp4)) {
        const tmpResult = _mod16420;
        return tmpResult(!_mod16416(_mod16421.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

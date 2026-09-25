// _runtime/metro/13835__.js
import _mod13836 from "13836__.js";
import _mod13838 from "13838__.js";
import text from "../13845_text.js";
import _mod13856 from "13856__.js";
import _mod13866 from "13866__.js";
import _mod13868 from "13868__.js";
import _mod13870 from "13870__.js";
import _mod13871 from "13871__.js";

if (!_mod13836) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13838(arg0);
    const tmp4 = text(arg1);
    if (!_mod13868) {
      if (_mod13856(tmp3, tmp4)) {
        const tmpResult = _mod13870;
        return tmpResult(!_mod13866(_mod13871.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

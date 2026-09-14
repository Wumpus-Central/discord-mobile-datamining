// _runtime/metro/14388__.js
import _mod14389 from "14389__.js";
import _mod14391 from "14391__.js";
import text from "../14398_text.js";
import _mod14409 from "14409__.js";
import _mod14419 from "14419__.js";
import _mod14421 from "14421__.js";
import _mod14423 from "14423__.js";
import _mod14424 from "14424__.js";

if (!_mod14389) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14391(arg0);
    const tmp4 = text(arg1);
    if (!_mod14421) {
      if (_mod14409(tmp3, tmp4)) {
        const tmpResult = _mod14423;
        return tmpResult(!_mod14419(_mod14424.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

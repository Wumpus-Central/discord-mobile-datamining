// _runtime/metro/14423__.js
import _mod14424 from "14424__.js";
import _mod14426 from "14426__.js";
import text from "../14433_text.js";
import _mod14444 from "14444__.js";
import _mod14454 from "14454__.js";
import _mod14456 from "14456__.js";
import _mod14458 from "14458__.js";
import _mod14459 from "14459__.js";

if (!_mod14424) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14426(arg0);
    const tmp4 = text(arg1);
    if (!_mod14456) {
      if (_mod14444(tmp3, tmp4)) {
        const tmpResult = _mod14458;
        return tmpResult(!_mod14454(_mod14459.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

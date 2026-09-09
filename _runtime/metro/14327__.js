// _runtime/metro/14327__.js
import _mod14328 from "14328__.js";
import _mod14330 from "14330__.js";
import text from "../14337_text.js";
import _mod14348 from "14348__.js";
import _mod14358 from "14358__.js";
import _mod14360 from "14360__.js";
import _mod14362 from "14362__.js";
import _mod14363 from "14363__.js";

if (!_mod14328) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14330(arg0);
    const tmp4 = text(arg1);
    if (!_mod14360) {
      if (_mod14348(tmp3, tmp4)) {
        const tmpResult = _mod14358;
        return tmpResult(!tmpResult(_mod14363.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

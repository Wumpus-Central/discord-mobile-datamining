// _runtime/metro/14553__.js
import _mod14554 from "14554__.js";
import _mod14556 from "14556__.js";
import text from "../14563_text.js";
import _mod14574 from "14574__.js";
import _mod14584 from "14584__.js";
import _mod14586 from "14586__.js";
import _mod14588 from "14588__.js";
import _mod14589 from "14589__.js";

if (!_mod14554) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14556(arg0);
    const tmp4 = text(arg1);
    if (!_mod14586) {
      if (_mod14574(tmp3, tmp4)) {
        const tmpResult = _mod14588;
        return tmpResult(!_mod14584(_mod14589.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

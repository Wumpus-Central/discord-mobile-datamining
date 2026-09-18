// _runtime/metro/14518__.js
import _mod14519 from "14519__.js";
import _mod14521 from "14521__.js";
import text from "../14528_text.js";
import _mod14539 from "14539__.js";
import _mod14549 from "14549__.js";
import _mod14551 from "14551__.js";
import _mod14553 from "14553__.js";
import _mod14554 from "14554__.js";

if (!_mod14519) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14521(arg0);
    const tmp4 = text(arg1);
    if (!_mod14551) {
      if (_mod14539(tmp3, tmp4)) {
        const tmpResult = _mod14553;
        return tmpResult(!_mod14549(_mod14554.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

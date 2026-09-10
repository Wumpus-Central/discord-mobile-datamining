// _runtime/metro/14376__.js
import _mod14377 from "14377__.js";
import _mod14379 from "14379__.js";
import text from "../14386_text.js";
import _mod14397 from "14397__.js";
import _mod14407 from "14407__.js";
import _mod14409 from "14409__.js";
import _mod14411 from "14411__.js";
import _mod14412 from "14412__.js";

if (!_mod14377) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14379(arg0);
    const tmp4 = text(arg1);
    if (!_mod14409) {
      if (_mod14397(tmp3, tmp4)) {
        const tmpResult = _mod14407;
        return tmpResult(!tmpResult(_mod14412.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

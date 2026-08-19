// _runtime/13675_getOwnPropertyDescriptor.js
import getOwnPropertyDescriptor2 from "13676_getOwnPropertyDescriptor.js";
import _mod13678 from "metro/13678__.js";
import text from "13685_text.js";
import call from "13696_call.js";
import call2 from "13706_call.js";
import _mod13708 from "metro/13708__.js";
import _mod13710 from "metro/13710__.js";
import getOwnPropertyDescriptor3 from "13711_getOwnPropertyDescriptor.js";

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13678(arg0);
    const tmp4 = text(arg1);
    if (!_mod13708) {
      if (call(tmp3, tmp4)) {
        const tmpResult = call2;
        return tmpResult(!tmpResult(getOwnPropertyDescriptor3.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {
      }
    }
  };
}

export const f = getOwnPropertyDescriptor;
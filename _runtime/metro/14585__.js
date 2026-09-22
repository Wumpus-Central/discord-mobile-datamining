// _runtime/metro/14585__.js
import _mod14586 from "14586__.js";
import _mod14588 from "14588__.js";
import text from "../14595_text.js";
import _mod14606 from "14606__.js";
import _mod14616 from "14616__.js";
import _mod14618 from "14618__.js";
import _mod14620 from "14620__.js";
import _mod14621 from "14621__.js";

if (!_mod14586) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14588(arg0);
    const tmp4 = text(arg1);
    if (!_mod14618) {
      if (_mod14606(tmp3, tmp4)) {
        const tmpResult = _mod14620;
        return tmpResult(!_mod14616(_mod14621.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

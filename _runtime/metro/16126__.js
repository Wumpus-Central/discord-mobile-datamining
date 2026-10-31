// _runtime/metro/16126__.js
import _mod16127 from "16127__.js";
import _mod16129 from "16129__.js";
import text from "../16136_text.js";
import _mod16147 from "16147__.js";
import _mod16157 from "16157__.js";
import _mod16159 from "16159__.js";
import _mod16161 from "16161__.js";
import _mod16162 from "16162__.js";

if (!_mod16127) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16129(arg0);
    const tmp4 = text(arg1);
    if (!_mod16159) {
      if (_mod16147(tmp3, tmp4)) {
        const tmpResult = _mod16161;
        return tmpResult(!_mod16157(_mod16162.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

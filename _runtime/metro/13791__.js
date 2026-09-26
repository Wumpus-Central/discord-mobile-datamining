// _runtime/metro/13791__.js
import _mod13792 from "13792__.js";
import _mod13794 from "13794__.js";
import text from "../13801_text.js";
import _mod13812 from "13812__.js";
import _mod13822 from "13822__.js";
import _mod13824 from "13824__.js";
import _mod13826 from "13826__.js";
import _mod13827 from "13827__.js";

if (!_mod13792) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13794(arg0);
    const tmp4 = text(arg1);
    if (!_mod13824) {
      if (_mod13812(tmp3, tmp4)) {
        const tmpResult = _mod13826;
        return tmpResult(!_mod13822(_mod13827.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

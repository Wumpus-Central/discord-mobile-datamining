// _runtime/metro/14665__.js
import _mod14666 from "14666__.js";
import _mod14668 from "14668__.js";
import text from "../14675_text.js";
import _mod14686 from "14686__.js";
import _mod14696 from "14696__.js";
import _mod14698 from "14698__.js";
import _mod14700 from "14700__.js";
import _mod14701 from "14701__.js";

if (!_mod14666) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14668(arg0);
    const tmp4 = text(arg1);
    if (!_mod14698) {
      if (_mod14686(tmp3, tmp4)) {
        const tmpResult = _mod14700;
        return tmpResult(!_mod14696(_mod14701.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

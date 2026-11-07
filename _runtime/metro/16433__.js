// _runtime/metro/16433__.js
import _mod16434 from "16434__.js";
import _mod16436 from "16436__.js";
import text from "../16443_text.js";
import _mod16454 from "16454__.js";
import _mod16464 from "16464__.js";
import _mod16466 from "16466__.js";
import _mod16468 from "16468__.js";
import _mod16469 from "16469__.js";

if (!_mod16434) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16436(arg0);
    const tmp4 = text(arg1);
    if (!_mod16466) {
      if (_mod16454(tmp3, tmp4)) {
        const tmpResult = _mod16468;
        return tmpResult(!_mod16464(_mod16469.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

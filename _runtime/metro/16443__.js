// _runtime/metro/16443__.js
import _mod16444 from "16444__.js";
import _mod16446 from "16446__.js";
import text from "../16453_text.js";
import _mod16464 from "16464__.js";
import _mod16474 from "16474__.js";
import _mod16476 from "16476__.js";
import _mod16478 from "16478__.js";
import _mod16479 from "16479__.js";

if (!_mod16444) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16446(arg0);
    const tmp4 = text(arg1);
    if (!_mod16476) {
      if (_mod16464(tmp3, tmp4)) {
        const tmpResult = _mod16478;
        return tmpResult(!_mod16474(_mod16479.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

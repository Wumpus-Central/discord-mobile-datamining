// _runtime/metro/14380__.js
import _mod14381 from "14381__.js";
import _mod14383 from "14383__.js";
import text from "../14390_text.js";
import _mod14401 from "14401__.js";
import _mod14411 from "14411__.js";
import _mod14413 from "14413__.js";
import _mod14415 from "14415__.js";
import _mod14416 from "14416__.js";

if (!_mod14381) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14383(arg0);
    const tmp4 = text(arg1);
    if (!_mod14413) {
      if (_mod14401(tmp3, tmp4)) {
        const tmpResult = _mod14415;
        return tmpResult(!_mod14411(_mod14416.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {}
    }
  };
}

export const f = getOwnPropertyDescriptor;

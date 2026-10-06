// _runtime/05373_isInteger.js
import _mod1317 from "metro/01317__.js";
import _mod1318 from "metro/01318__.js";
import _mod1324 from "metro/01324__.js";
import isFinite from "05365_isFinite.js";

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1324(num)) {
      if (isFinite(num)) {
        const tmp = _mod1317(num);
        return _mod1318(tmp) === tmp;
      }
    }
  }
  return false;
}

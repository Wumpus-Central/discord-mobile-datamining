// _runtime/metro/05373__.js
import _mod1317 from "01317__.js";
import _mod1318 from "01318__.js";
import _mod1324 from "01324__.js";
import _mod5365 from "05365__.js";

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1324(num)) {
      if (_mod5365(num)) {
        const tmp = _mod1317(num);
        return _mod1318(tmp) === tmp;
      }
    }
  }
  return false;
}

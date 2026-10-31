// _runtime/metro/06499__.js
import _mod1317 from "01317__.js";
import _mod1318 from "01318__.js";
import _mod1324 from "01324__.js";
import _mod6491 from "06491__.js";

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1324(num)) {
      if (_mod6491(num)) {
        const tmp = _mod1317(num);
        return _mod1318(tmp) === tmp;
      }
    }
  }
  return false;
}

// _runtime/metro/06493__.js
import _mod1318 from "01318__.js";
import _mod1319 from "01319__.js";
import _mod1325 from "01325__.js";
import _mod6485 from "06485__.js";

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1325(num)) {
      if (_mod6485(num)) {
        const tmp = _mod1318(num);
        return _mod1319(tmp) === tmp;
      }
    }
  }
  return false;
}

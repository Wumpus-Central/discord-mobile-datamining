// _runtime/metro/05302__.js
import _mod1306 from "01306__.js";
import _mod1307 from "01307__.js";
import _mod1313 from "01313__.js";
import _mod5294 from "05294__.js";

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1313(num)) {
      if (_mod5294(num)) {
        const tmp = _mod1306(num);
        return _mod1307(tmp) === tmp;
      }
    }
  }
  return false;
}

// _runtime/metro/04924__.js
import _mod1306 from "01306__.js";
import _mod1307 from "01307__.js";
import _mod1313 from "01313__.js";
import _mod4916 from "04916__.js";

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1313(num)) {
      if (_mod4916(num)) {
        const tmp = _mod1306(num);
        return _mod1307(tmp) === tmp;
      }
    }
  }
  return false;
}

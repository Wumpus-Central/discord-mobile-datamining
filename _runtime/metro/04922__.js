// _runtime/metro/04922__.js
import _mod1305 from "01305__.js";
import _mod1306 from "01306__.js";
import _mod1312 from "01312__.js";
import _mod4914 from "04914__.js";

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1312(num)) {
      if (_mod4914(num)) {
        const tmp = _mod1305(num);
        return _mod1306(tmp) === tmp;
      }
    }
  }
  return false;
}

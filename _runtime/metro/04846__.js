// _runtime/metro/04846__.js
import _mod1307 from "01307__.js";
import _mod1308 from "01308__.js";
import _mod1314 from "01314__.js";
import _mod4838 from "04838__.js";

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1314(num)) {
      if (_mod4838(num)) {
        const tmp = _mod1307(num);
        return _mod1308(tmp) === tmp;
      }
    }
  }
  return false;
}

// _runtime/metro/05684__.js
import _mod1329 from "01329__.js";
import _mod1330 from "01330__.js";
import _mod1336 from "01336__.js";
import _mod5676 from "05676__.js";

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1336(num)) {
      if (_mod5676(num)) {
        const tmp = _mod1329(num);
        return _mod1330(tmp) === tmp;
      }
    }
  }
  return false;
}

// _runtime/metro/05688__.js
import _mod1330 from "01330__.js";
import _mod1331 from "01331__.js";
import _mod1337 from "01337__.js";
import _mod5680 from "05680__.js";

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1337(num)) {
      if (_mod5680(num)) {
        const tmp = _mod1330(num);
        return _mod1331(tmp) === tmp;
      }
    }
  }
  return false;
}

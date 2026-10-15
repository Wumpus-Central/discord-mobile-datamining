// _runtime/metro/05904__.js
import _mod1330 from "01330__.js";
import _mod1331 from "01331__.js";
import _mod1337 from "01337__.js";
import _mod5896 from "05896__.js";

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1337(num)) {
      if (_mod5896(num)) {
        const tmp = _mod1330(num);
        return _mod1331(tmp) === tmp;
      }
    }
  }
  return false;
}

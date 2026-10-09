// _runtime/metro/05685__.js
import _mod1330 from "01330__.js";
import _mod1331 from "01331__.js";
import _mod1337 from "01337__.js";
import _mod5677 from "05677__.js";

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1337(num)) {
      if (_mod5677(num)) {
        const tmp = _mod1330(num);
        return _mod1331(tmp) === tmp;
      }
    }
  }
  return false;
}

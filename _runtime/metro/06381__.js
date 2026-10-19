// _runtime/metro/06381__.js
import _mod1332 from "01332__.js";
import _mod1333 from "01333__.js";
import _mod1339 from "01339__.js";
import _mod6373 from "06373__.js";

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1339(num)) {
      if (_mod6373(num)) {
        const tmp = _mod1332(num);
        return _mod1333(tmp) === tmp;
      }
    }
  }
  return false;
}

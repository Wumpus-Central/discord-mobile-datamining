// _runtime/04657_baseIsSet.js
import _mod535 from "metro/00535__.js";
import _mod634 from "metro/00634__.js";

export default function baseIsSet(arg0) {
  let tmp3 = _mod535(arg0);
  if (tmp3) {
    tmp3 = "[object Set]" == _mod634(arg0);
  }
  return tmp3;
}

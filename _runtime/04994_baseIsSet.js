// _runtime/04994_baseIsSet.js
import _mod535 from "metro/00535__.js";
import _mod645 from "metro/00645__.js";

export default function baseIsSet(arg0) {
  let tmp3 = _mod535(arg0);
  if (tmp3) {
    tmp3 = "[object Set]" == _mod645(arg0);
  }
  return tmp3;
}

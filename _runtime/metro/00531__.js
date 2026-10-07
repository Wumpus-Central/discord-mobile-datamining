// _runtime/metro/00531__.js
import _mod518 from "00518__.js";
import arrayLikeKeys from "../00532_arrayLikeKeys.js";
import baseKeys from "../00544_baseKeys.js";

export default function keys(arg0) {
  if (_mod518(arg0)) {
    let tmp3 = arrayLikeKeys(arg0);
  } else {
    tmp3 = baseKeys(arg0);
  }
  return tmp3;
}

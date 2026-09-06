// _runtime/metro/00534__.js
import _mod522 from "00522__.js";
import _mod535 from "00535__.js";

export default function baseIsArguments(arg0) {
  let tmp3 = _mod535(arg0);
  if (tmp3) {
    tmp3 = "[object Arguments]" == _mod522(arg0);
  }
  return tmp3;
}

// _runtime/metro/00522__.js
import _mod523 from "00523__.js";
import _mod526 from "00526__.js";
import objectToString from "../00527_objectToString.js";

let toStringTag;
if (_mod523) {
  toStringTag = _mod523.toStringTag;
}

export default function baseGetTag(arg0) {
  if (null == arg0) {
    let str = "[object Null]";
    if (undefined === arg0) {
      str = "[object Undefined]";
    }
    let tmp5 = str;
  } else {
    if (toStringTag) {
      const _Object = Object;
      if (tmp in Object(arg0)) {
        tmp5 = _mod526(arg0);
      }
    }
    tmp5 = objectToString(arg0);
  }
  return tmp5;
}

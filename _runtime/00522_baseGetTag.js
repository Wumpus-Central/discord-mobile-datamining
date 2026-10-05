// _runtime/00522_baseGetTag.js
import _mod523 from "metro/00523__.js";
import getRawTag from "00526_getRawTag.js";
import objectToString from "00527_objectToString.js";

let toStringTag;
if (_mod523) {
  toStringTag = _mod523.toStringTag;
}

export default function baseGetTag(arg0) {
  let tmp5;
  if (null == arg0) {
    let str = "[object Null]";
    if (undefined === arg0) {
      str = "[object Undefined]";
    }
    tmp5 = str;
  } else {
    if (toStringTag) {
      const _Object = Object;
      if (tmp in Object(arg0)) {
        tmp5 = getRawTag(arg0);
      }
    }
    tmp5 = objectToString(arg0);
  }
  return tmp5;
}

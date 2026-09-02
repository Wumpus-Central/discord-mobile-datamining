// _runtime/00604_toStringTag.js
import _mod605 from "metro/00605__.js";
import toStringTag2 from "00608_toStringTag.js";
import objectToString from "00609_objectToString.js";

let toStringTag;
if (_mod605) {
  toStringTag = _mod605.toStringTag;
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
        tmp5 = toStringTag2(arg0);
      }
    }
    tmp5 = objectToString(arg0);
  }
  return tmp5;
}

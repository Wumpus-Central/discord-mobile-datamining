// _runtime/00607_toStringTag.js
import _mod608 from "module_608" /* 608 */;
import toStringTag2 from "toStringTag" /* 611 */;
import objectToString from "objectToString" /* 612 */;

let toStringTag;
if (_mod608) {
  toStringTag = _mod608.toStringTag;
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
};
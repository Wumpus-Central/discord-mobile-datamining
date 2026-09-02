// === Module 604: toStringTag ===

// Module 604 (toStringTag)
import _mod605 from "module_605" /* 605 */;
import toStringTag2 from "toStringTag" /* 608 */;
import objectToString from "objectToString" /* 609 */;

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
};
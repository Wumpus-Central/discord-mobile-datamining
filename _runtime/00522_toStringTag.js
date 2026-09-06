// === Module 522: toStringTag ===

// Module 522 (toStringTag)
import _mod523 from "module_523" /* 523 */;
import toStringTag2 from "toStringTag" /* 526 */;
import objectToString from "objectToString" /* 527 */;

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
        tmp5 = toStringTag2(arg0);
      }
    }
    tmp5 = objectToString(arg0);
  }
  return tmp5;
};
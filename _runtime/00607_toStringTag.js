import { toStringTag } from "00611_toStringTag.js";
import { objectToString } from "00612_objectToString.js";
// _runtime/00607_toStringTag.js
let toStringTag;
if (require("module_608")) {
  toStringTag = require("module_608").toStringTag;
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
        tmp5 = toStringTag /* toStringTag */(arg0);
      }
    }
    tmp5 = objectToString /* objectToString */(arg0);
  }
  return tmp5;
};
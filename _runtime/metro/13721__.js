// _runtime/metro/13721__.js
import _mod13840 from "13840__.js";
import _mod13841 from "13841__.js";
import 13722__ from "13722__.js";
import patchDictionary from "../13765_patchDictionary.js";
import 13812__ from "13812__.js";

module.exports.version = _mod13841.version;

export default module_13722.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_13812, _mod13840));
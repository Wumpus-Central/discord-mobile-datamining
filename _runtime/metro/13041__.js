// _runtime/metro/13041__.js
import _mod13160 from "13160__.js";
import _mod13161 from "13161__.js";
import 13042__ from "13042__.js";
import patchDictionary from "../13085_patchDictionary.js";
import 13132__ from "13132__.js";

module.exports.version = _mod13161.version;

export default module_13042.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_13132, _mod13160));
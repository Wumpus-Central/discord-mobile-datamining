// _runtime/metro/13055__.js
import _mod13174 from "13174__.js";
import _mod13175 from "13175__.js";
import 13056__ from "13056__.js";
import patchDictionary from "../13099_patchDictionary.js";
import 13146__ from "13146__.js";

module.exports.version = _mod13175.version;

export default module_13056.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_13146, _mod13174));
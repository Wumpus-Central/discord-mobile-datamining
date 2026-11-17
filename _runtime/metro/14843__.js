// _runtime/metro/14843__.js
import _mod14962 from "14962__.js";
import _mod14963 from "14963__.js";
import 14844__ from "14844__.js";
import patchDictionary from "../14887_patchDictionary.js";
import 14934__ from "14934__.js";

module.exports.version = _mod14963.version;

export default module_14844.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_14934, _mod14962));
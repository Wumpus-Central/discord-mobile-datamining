// _runtime/metro/16226__.js
import _mod16345 from "16345__.js";
import _mod16346 from "16346__.js";
import 16227__ from "16227__.js";
import patchDictionary from "../16270_patchDictionary.js";
import 16317__ from "16317__.js";

module.exports.version = _mod16346.version;

export default module_16227.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_16317, _mod16345));
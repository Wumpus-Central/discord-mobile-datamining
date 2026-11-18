// _runtime/metro/16235__.js
import _mod16354 from "16354__.js";
import _mod16355 from "16355__.js";
import 16236__ from "16236__.js";
import patchDictionary from "../16279_patchDictionary.js";
import 16326__ from "16326__.js";

module.exports.version = _mod16355.version;

export default module_16236.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_16326, _mod16354));
// _runtime/metro/12648__.js
import _mod12767 from "12767__.js";
import _mod12768 from "12768__.js";
import module_12649 from "../12649_create.js";
import patchDictionary from "../12692_patchDictionary.js";
import 12739__ from "12739__.js";

module.exports.version = _mod12768.version;

export default module_12649.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_12739, _mod12767));
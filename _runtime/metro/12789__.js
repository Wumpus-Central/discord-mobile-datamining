// _runtime/metro/12789__.js
import _mod12908 from "12908__.js";
import _mod12909 from "12909__.js";
import module_12790 from "../12790_create.js";
import patchDictionary from "../12833_patchDictionary.js";
import 12880__ from "12880__.js";

module.exports.version = _mod12909.version;

export default module_12790.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_12880, _mod12908));
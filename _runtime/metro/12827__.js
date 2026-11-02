// _runtime/metro/12827__.js
import _mod12946 from "12946__.js";
import _mod12947 from "12947__.js";
import module_12828 from "../12828_create.js";
import patchDictionary from "../12871_patchDictionary.js";
import 12918__ from "12918__.js";

module.exports.version = _mod12947.version;

export default module_12828.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_12918, _mod12946));
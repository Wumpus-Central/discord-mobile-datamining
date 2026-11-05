// _runtime/metro/13053__.js
import _mod13172 from "13172__.js";
import _mod13173 from "13173__.js";
import 13054__ from "13054__.js";
import patchDictionary from "../13097_patchDictionary.js";
import 13144__ from "13144__.js";

module.exports.version = _mod13173.version;

export default module_13054.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_13144, _mod13172));
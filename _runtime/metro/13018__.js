// _runtime/metro/13018__.js
import _mod13137 from "13137__.js";
import _mod13138 from "13138__.js";
import 13019__ from "13019__.js";
import patchDictionary from "../13062_patchDictionary.js";
import 13109__ from "13109__.js";

module.exports.version = _mod13138.version;

export default module_13019.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_13109, _mod13137));
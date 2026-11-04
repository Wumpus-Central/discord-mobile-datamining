// _runtime/metro/13046__.js
import _mod13165 from "13165__.js";
import _mod13166 from "13166__.js";
import 13047__ from "13047__.js";
import patchDictionary from "../13090_patchDictionary.js";
import 13137__ from "13137__.js";

module.exports.version = _mod13166.version;

export default module_13047.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_13137, _mod13165));
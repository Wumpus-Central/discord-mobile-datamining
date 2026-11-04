// _runtime/metro/13045__.js
import _mod13164 from "13164__.js";
import _mod13165 from "13165__.js";
import 13046__ from "13046__.js";
import patchDictionary from "../13089_patchDictionary.js";
import 13136__ from "13136__.js";

module.exports.version = _mod13165.version;

export default module_13046.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_13136, _mod13164));
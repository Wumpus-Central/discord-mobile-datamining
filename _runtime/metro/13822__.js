// _runtime/metro/13822__.js
import _mod13941 from "13941__.js";
import _mod13942 from "13942__.js";
import 13823__ from "13823__.js";
import patchDictionary from "../13866_patchDictionary.js";
import 13913__ from "13913__.js";

module.exports.version = _mod13942.version;

export default module_13823.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_13913, _mod13941));
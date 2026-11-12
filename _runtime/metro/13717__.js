// _runtime/metro/13717__.js
import _mod13836 from "13836__.js";
import _mod13837 from "13837__.js";
import 13718__ from "13718__.js";
import patchDictionary from "../13761_patchDictionary.js";
import 13808__ from "13808__.js";

module.exports.version = _mod13837.version;

export default module_13718.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_13808, _mod13836));
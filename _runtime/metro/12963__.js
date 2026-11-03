// _runtime/metro/12963__.js
import _mod13082 from "13082__.js";
import _mod13083 from "13083__.js";
import 12964__ from "12964__.js";
import patchDictionary from "../13007_patchDictionary.js";
import 13054__ from "13054__.js";

module.exports.version = _mod13083.version;

export default module_12964.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_13054, _mod13082));
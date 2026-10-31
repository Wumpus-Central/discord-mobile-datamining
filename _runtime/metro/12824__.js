// _runtime/metro/12824__.js
import _mod12943 from "12943__.js";
import _mod12944 from "12944__.js";
import module_12825 from "../12825_create.js";
import patchDictionary from "../12868_patchDictionary.js";
import 12915__ from "12915__.js";

module.exports.version = _mod12944.version;

export default module_12825.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_12915, _mod12943));
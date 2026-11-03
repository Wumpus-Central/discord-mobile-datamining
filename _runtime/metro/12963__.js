// === Module 12963: ? ===

// Module 12963
import _mod13082 from "module_13082" /* 13082 */;
import _mod13083 from "module_13083" /* 13083 */;
import module_12964 from "module_12964" /* 12964 */;
import patchDictionary from "patchDictionary" /* 13007 */;
import module_13054 from "module_13054" /* 13054 */;

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
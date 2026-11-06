// === Module 13018: ? ===

// Module 13018
import _mod13137 from "module_13137" /* 13137 */;
import _mod13138 from "module_13138" /* 13138 */;
import module_13019 from "module_13019" /* 13019 */;
import patchDictionary from "patchDictionary" /* 13062 */;
import module_13109 from "module_13109" /* 13109 */;

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
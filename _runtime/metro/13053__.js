// === Module 13053: ? ===

// Module 13053
import _mod13172 from "module_13172" /* 13172 */;
import _mod13173 from "module_13173" /* 13173 */;
import module_13054 from "module_13054" /* 13054 */;
import patchDictionary from "patchDictionary" /* 13097 */;
import module_13144 from "module_13144" /* 13144 */;

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
// === Module 13041: ? ===

// Module 13041
import _mod13160 from "module_13160" /* 13160 */;
import _mod13161 from "module_13161" /* 13161 */;
import module_13042 from "module_13042" /* 13042 */;
import patchDictionary from "patchDictionary" /* 13085 */;
import module_13132 from "module_13132" /* 13132 */;

module.exports.version = _mod13161.version;

export default module_13042.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_13132, _mod13160));
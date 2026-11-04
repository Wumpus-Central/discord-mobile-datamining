// === Module 13046: ? ===

// Module 13046
import _mod13165 from "module_13165" /* 13165 */;
import _mod13166 from "module_13166" /* 13166 */;
import module_13047 from "module_13047" /* 13047 */;
import patchDictionary from "patchDictionary" /* 13090 */;
import module_13137 from "module_13137" /* 13137 */;

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
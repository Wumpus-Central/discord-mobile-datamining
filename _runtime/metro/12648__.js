// === Module 12648: ? ===

// Module 12648
import _mod12767 from "module_12767" /* 12767 */;
import _mod12768 from "module_12768" /* 12768 */;
import module_12649 from "create" /* 12649 */;
import patchDictionary from "patchDictionary" /* 12692 */;
import module_12739 from "module_12739" /* 12739 */;

module.exports.version = _mod12768.version;

export default module_12649.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_12739, _mod12767));
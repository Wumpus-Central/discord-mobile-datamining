// === Module 12789: ? ===

// Module 12789
import _mod12908 from "module_12908" /* 12908 */;
import _mod12909 from "module_12909" /* 12909 */;
import module_12790 from "create" /* 12790 */;
import patchDictionary from "patchDictionary" /* 12833 */;
import module_12880 from "module_12880" /* 12880 */;

module.exports.version = _mod12909.version;

export default module_12790.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_12880, _mod12908));
// === Module 12827: ? ===

// Module 12827
import _mod12946 from "module_12946" /* 12946 */;
import _mod12947 from "module_12947" /* 12947 */;
import module_12828 from "create" /* 12828 */;
import patchDictionary from "patchDictionary" /* 12871 */;
import module_12918 from "module_12918" /* 12918 */;

module.exports.version = _mod12947.version;

export default module_12828.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_12918, _mod12946));
// === Module 16235: ? ===

// Module 16235
import _mod16354 from "module_16354" /* 16354 */;
import _mod16355 from "module_16355" /* 16355 */;
import module_16236 from "module_16236" /* 16236 */;
import patchDictionary from "patchDictionary" /* 16279 */;
import module_16326 from "module_16326" /* 16326 */;

module.exports.version = _mod16355.version;

export default module_16236.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_16326, _mod16354));
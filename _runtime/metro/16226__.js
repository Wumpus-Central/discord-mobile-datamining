// === Module 16226: ? ===

// Module 16226
import _mod16345 from "module_16345" /* 16345 */;
import _mod16346 from "module_16346" /* 16346 */;
import module_16227 from "module_16227" /* 16227 */;
import patchDictionary from "patchDictionary" /* 16270 */;
import module_16317 from "module_16317" /* 16317 */;

module.exports.version = _mod16346.version;

export default module_16227.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_16317, _mod16345));
// === Module 13055: ? ===

// Module 13055
import _mod13174 from "module_13174" /* 13174 */;
import _mod13175 from "module_13175" /* 13175 */;
import module_13056 from "module_13056" /* 13056 */;
import patchDictionary from "patchDictionary" /* 13099 */;
import module_13146 from "module_13146" /* 13146 */;

module.exports.version = _mod13175.version;

export default module_13056.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_13146, _mod13174));
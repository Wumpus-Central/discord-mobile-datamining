// === Module 13045: ? ===

// Module 13045
import _mod13164 from "module_13164" /* 13164 */;
import _mod13165 from "module_13165" /* 13165 */;
import module_13046 from "module_13046" /* 13046 */;
import patchDictionary from "patchDictionary" /* 13089 */;
import module_13136 from "module_13136" /* 13136 */;

module.exports.version = _mod13165.version;

export default module_13046.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_13136, _mod13164));
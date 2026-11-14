// === Module 13822: ? ===

// Module 13822
import _mod13941 from "module_13941" /* 13941 */;
import _mod13942 from "module_13942" /* 13942 */;
import module_13823 from "module_13823" /* 13823 */;
import patchDictionary from "patchDictionary" /* 13866 */;
import module_13913 from "module_13913" /* 13913 */;

module.exports.version = _mod13942.version;

export default module_13823.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_13913, _mod13941));
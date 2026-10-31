// === Module 12824: ? ===

// Module 12824
import _mod12943 from "module_12943" /* 12943 */;
import _mod12944 from "module_12944" /* 12944 */;
import module_12825 from "create" /* 12825 */;
import patchDictionary from "patchDictionary" /* 12868 */;
import module_12915 from "module_12915" /* 12915 */;

module.exports.version = _mod12944.version;

export default module_12825.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_12915, _mod12943));
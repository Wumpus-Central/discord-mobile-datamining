// === Module 14843: ? ===

// Module 14843
import _mod14962 from "module_14962" /* 14962 */;
import _mod14963 from "module_14963" /* 14963 */;
import module_14844 from "module_14844" /* 14844 */;
import patchDictionary from "patchDictionary" /* 14887 */;
import module_14934 from "module_14934" /* 14934 */;

module.exports.version = _mod14963.version;

export default module_14844.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_14934, _mod14962));
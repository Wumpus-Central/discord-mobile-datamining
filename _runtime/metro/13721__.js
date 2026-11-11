// === Module 13721: ? ===

// Module 13721
import _mod13840 from "module_13840" /* 13840 */;
import _mod13841 from "module_13841" /* 13841 */;
import module_13722 from "module_13722" /* 13722 */;
import patchDictionary from "patchDictionary" /* 13765 */;
import module_13812 from "module_13812" /* 13812 */;

module.exports.version = _mod13841.version;

export default module_13722.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_13812, _mod13840));
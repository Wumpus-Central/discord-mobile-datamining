// === Module 13717: ? ===

// Module 13717
import _mod13836 from "module_13836" /* 13836 */;
import _mod13837 from "module_13837" /* 13837 */;
import module_13718 from "module_13718" /* 13718 */;
import patchDictionary from "patchDictionary" /* 13761 */;
import module_13808 from "module_13808" /* 13808 */;

module.exports.version = _mod13837.version;

export default module_13718.create((function merge() {
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
})(patchDictionary, module_13808, _mod13836));
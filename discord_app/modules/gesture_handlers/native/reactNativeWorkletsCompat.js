// === Module 4611: reactNativeWorkletsCompat ===

// Module 4611 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import size from "module_2" /* 2 */;

const obj = {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    const runOnUIResult = ReanimatedRexport.runOnUI(fn);
    return runOnUIResult(...substr);
  }
};
const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default obj;
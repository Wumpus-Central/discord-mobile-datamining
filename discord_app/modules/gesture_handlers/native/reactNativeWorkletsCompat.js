// === Module 4611: reactNativeWorkletsCompat ===

// Module 4611 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return ReanimatedRexport.runOnUI(fn)(...substr);
  }
};
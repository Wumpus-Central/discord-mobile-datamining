// === Module 5085: reactNativeWorkletsCompat ===

// Module 5085 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 5086 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return ReanimatedRexport.runOnUI(fn)(...substr);
  }
};
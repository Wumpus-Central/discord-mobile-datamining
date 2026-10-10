// === Module 4849: reactNativeWorkletsCompat ===

// Module 4849 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return ReanimatedRexport.runOnUI(fn)(...substr);
  }
};
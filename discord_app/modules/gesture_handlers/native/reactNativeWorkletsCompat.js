// === Module 4119: ? ===

// Module 4119
import set from "set" /* 2 */;
import _mod4120 from "module_4120" /* 4120 */;

const result = set.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return _mod4120.runOnUI(fn)(...substr);
  }
};
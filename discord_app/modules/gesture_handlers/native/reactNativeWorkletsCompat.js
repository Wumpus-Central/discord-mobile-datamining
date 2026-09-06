// === Module 4295: ? ===

// Module 4295
import set from "set" /* 2 */;
import _mod4296 from "module_4296" /* 4296 */;

const result = set.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return _mod4296.runOnUI(fn)(...substr);
  }
};
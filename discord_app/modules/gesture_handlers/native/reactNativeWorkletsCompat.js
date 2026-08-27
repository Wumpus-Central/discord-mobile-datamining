// === Module 4184: ? ===

// Module 4184
import set from "set" /* 2 */;
import _mod4185 from "module_4185" /* 4185 */;

const result = set.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return _mod4185.runOnUI(fn)(...substr);
  }
};
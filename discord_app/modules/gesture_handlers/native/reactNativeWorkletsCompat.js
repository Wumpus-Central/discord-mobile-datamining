// === Module 4185: ? ===

// Module 4185
import set from "set" /* 2 */;
import _mod4186 from "module_4186" /* 4186 */;

const result = set.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return _mod4186.runOnUI(fn)(...substr);
  }
};
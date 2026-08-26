// === Module 4183: ? ===

// Module 4183
import set from "set" /* 2 */;
import _mod4184 from "module_4184" /* 4184 */;

const result = set.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return _mod4184.runOnUI(fn)(...substr);
  }
};
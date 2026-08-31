// === Module 4186: ? ===

// Module 4186
import set from "set" /* 2 */;
import _mod4187 from "module_4187" /* 4187 */;

const result = set.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return _mod4187.runOnUI(fn)(...substr);
  }
};
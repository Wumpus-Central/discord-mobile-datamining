// === Module 4216: ? ===

// Module 4216
import set from "set" /* 2 */;
import _mod4217 from "module_4217" /* 4217 */;

const result = set.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return _mod4217.runOnUI(fn)(...substr);
  }
};
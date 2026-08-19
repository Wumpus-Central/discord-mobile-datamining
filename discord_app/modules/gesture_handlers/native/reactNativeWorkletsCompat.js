// === Module 4114: ? ===

// Module 4114
import obj132 from "obj132" /* 2 */;
import _mod4115 from "module_4115" /* 4115 */;

const result = obj132.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return _mod4115.runOnUI(fn)(...substr);
  }
};
// === Module 4118: ? ===

// Module 4118
import set from "set" /* 2 */;
import _mod4119 from "module_4119" /* 4119 */;

const result = set.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return _mod4119.runOnUI(fn)(...substr);
  }
};
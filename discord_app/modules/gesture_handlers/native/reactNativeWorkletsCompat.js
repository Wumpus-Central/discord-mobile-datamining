// discord_app/modules/gesture_handlers/native/reactNativeWorkletsCompat.js
import set from "set" /* 2 */;
import _mod4115 from "module_4115" /* 4115 */;

const result = set.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return _mod4115.runOnUI(fn)(...substr);
  }
};
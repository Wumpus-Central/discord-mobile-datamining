// discord_app/modules/gesture_handlers/native/reactNativeWorkletsCompat.js
import obj132 from "../../../../_runtime/00002_obj132.js";
import _mod4115 from "../../reanimated/ReanimatedRexport.tsx";

const result = obj132.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return _mod4115.runOnUI(fn)(...substr);
  }
};
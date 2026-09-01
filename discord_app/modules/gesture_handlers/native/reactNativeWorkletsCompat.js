// discord_app/modules/gesture_handlers/native/reactNativeWorkletsCompat.js
import set from "../../../../_runtime/00002_set.js";
import _mod4217 from "../../reanimated/ReanimatedRexport.tsx";

const result = set.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return _mod4217.runOnUI(fn)(...substr);
  },
};

// discord_app/modules/gesture_handlers/native/reactNativeWorkletsCompat.js
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return ReanimatedRexport.runOnUI(fn)(...substr);
  },
};

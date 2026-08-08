// discord_app/modules/gesture_handlers/native/reactNativeWorkletsCompat.js
import { ReanimatedRexport } from "../../reanimated/ReanimatedRexport.tsx";
const result = require("set").fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return ReanimatedRexport.runOnUI(fn)(...substr);
  }
};
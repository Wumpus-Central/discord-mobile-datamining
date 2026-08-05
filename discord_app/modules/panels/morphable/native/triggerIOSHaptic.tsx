// discord_app/modules/panels/morphable/native/triggerIOSHaptic.tsx
import { IS_IOS } from "MIN_PAN_GESTURE_MOVE";

let result = require("set").fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require("../../../haptics/HapticUtils.native.tsx") /* HapticFeedbackTypes */.triggerHapticFeedback(require("../../../haptics/HapticUtils.native.tsx") /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require("../../../haptics/HapticUtils.native.tsx") /* HapticFeedbackTypes */;
  }
};
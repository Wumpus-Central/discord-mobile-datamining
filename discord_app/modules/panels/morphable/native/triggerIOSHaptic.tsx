import { HapticFeedbackTypes } from "../../../haptics/HapticUtils.native.tsx";
// discord_app/modules/panels/morphable/native/triggerIOSHaptic.tsx
import { IS_IOS } from "MIN_PAN_GESTURE_MOVE";

let result = require("set").fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticFeedbackTypes /* HapticFeedbackTypes */.triggerHapticFeedback(HapticFeedbackTypes /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = HapticFeedbackTypes /* HapticFeedbackTypes */;
  }
};
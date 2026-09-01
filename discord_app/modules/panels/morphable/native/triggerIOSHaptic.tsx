// discord_app/modules/panels/morphable/native/triggerIOSHaptic.tsx
import set from "../../../../../_runtime/00002_set.js";
import HapticFeedbackTypes from "../../../haptics/HapticUtils.native.tsx";
import MIN_PAN_GESTURE_MOVE from "MorphablePanelConstants.tsx";

const IS_IOS = MIN_PAN_GESTURE_MOVE.IS_IOS;
let result = set.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticFeedbackTypes.triggerHapticFeedback(HapticFeedbackTypes.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = HapticFeedbackTypes;
  }
}

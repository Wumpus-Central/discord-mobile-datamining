// === Module 16241: triggerIOSHaptic ===

// Module 16241 (triggerIOSHaptic)
import obj132 from "obj132" /* 2 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 4343 */;
import MIN_PAN_GESTURE_MOVE from "MIN_PAN_GESTURE_MOVE" /* 11441 */;

const IS_IOS = MIN_PAN_GESTURE_MOVE.IS_IOS;
let result = obj132.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticFeedbackTypes.triggerHapticFeedback(HapticFeedbackTypes.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
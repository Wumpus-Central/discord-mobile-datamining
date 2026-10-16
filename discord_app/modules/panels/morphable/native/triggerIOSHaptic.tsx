// === Module 18081: triggerIOSHaptic ===

// Module 18081 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5119 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12844 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
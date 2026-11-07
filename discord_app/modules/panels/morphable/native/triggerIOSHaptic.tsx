// === Module 19495: triggerIOSHaptic ===

// Module 19495 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5376 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11364 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
// === Module 17115: triggerIOSHaptic ===

// Module 17115 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4573 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12344 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
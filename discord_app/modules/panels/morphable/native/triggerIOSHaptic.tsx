// === Module 19231: triggerIOSHaptic ===

// Module 19231 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5133 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11636 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
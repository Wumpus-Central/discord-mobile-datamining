// === Module 18152: triggerIOSHaptic ===

// Module 18152 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5156 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12915 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
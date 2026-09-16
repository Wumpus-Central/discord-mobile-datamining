// === Module 17299: utils/triggerIOSHaptic ===

// Module 17299 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4606 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12415 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
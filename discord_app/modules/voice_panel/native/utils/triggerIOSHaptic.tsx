// === Module 19015: utils/triggerIOSHaptic ===

// Module 19015 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5249 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10974 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
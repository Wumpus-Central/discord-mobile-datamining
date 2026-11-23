// === Module 19243: utils/triggerIOSHaptic ===

// Module 19243 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5129 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11750 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
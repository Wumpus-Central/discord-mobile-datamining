// === Module 18486: utils/triggerIOSHaptic ===

// Module 18486 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5212 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10897 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
// === Module 17233: triggerIOSHaptic ===

// Module 17233 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4861 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11916 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
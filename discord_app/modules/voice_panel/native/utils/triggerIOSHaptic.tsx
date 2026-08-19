// === Module 16313: triggerIOSHaptic ===

// Module 16313 (triggerIOSHaptic)
import obj132 from "obj132" /* 2 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 4343 */;
import VoicePanelModes from "VoicePanelModes" /* 11440 */;

const IS_IOS = VoicePanelModes.IS_IOS;
let result = obj132.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticFeedbackTypes.triggerHapticFeedback(HapticFeedbackTypes.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
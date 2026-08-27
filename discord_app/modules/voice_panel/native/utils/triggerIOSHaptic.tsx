// === Module 16588: triggerIOSHaptic ===

// Module 16588 (triggerIOSHaptic)
import set from "set" /* 2 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 4413 */;
import VoicePanelModes from "VoicePanelModes" /* 11757 */;

const IS_IOS = VoicePanelModes.IS_IOS;
let result = set.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticFeedbackTypes.triggerHapticFeedback(HapticFeedbackTypes.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = HapticFeedbackTypes;
  }
};
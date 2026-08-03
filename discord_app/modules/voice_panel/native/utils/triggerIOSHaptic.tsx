// === Module 16006: triggerIOSHaptic ===

// Module 16006 (triggerIOSHaptic)
import { IS_IOS } from "VoicePanelModes";

let result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4224) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4224) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4224) /* HapticFeedbackTypes */;
  }
};
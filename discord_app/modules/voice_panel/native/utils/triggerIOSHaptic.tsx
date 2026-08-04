// discord_app/modules/voice_panel/native/utils/triggerIOSHaptic.tsx
import { IS_IOS } from "VoicePanelModes";

let result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(4162) /* HapticFeedbackTypes */.triggerHapticFeedback(require(4162) /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(4162) /* HapticFeedbackTypes */;
  }
};
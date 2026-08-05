import { HapticFeedbackTypes } from "../../../haptics/HapticUtils.native.tsx";
// discord_app/modules/voice_panel/native/utils/triggerIOSHaptic.tsx
import { IS_IOS } from "VoicePanelModes";

let result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticFeedbackTypes /* HapticFeedbackTypes */.triggerHapticFeedback(HapticFeedbackTypes /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = HapticFeedbackTypes /* HapticFeedbackTypes */;
  }
};
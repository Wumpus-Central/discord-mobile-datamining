// discord_app/modules/voice_panel/native/utils/triggerIOSHaptic.tsx
import { IS_IOS } from "VoicePanelModes";
import { HapticFeedbackTypes } from "../../../haptics/HapticUtils.native.tsx";

let result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticFeedbackTypes.triggerHapticFeedback(HapticFeedbackTypes.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = HapticFeedbackTypes;
  }
};
// discord_app/modules/voice_panel/native/utils/triggerIOSHaptic.tsx
import { IS_IOS } from "VoicePanelModes";

let result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require("../../../haptics/HapticUtils.native.tsx") /* HapticFeedbackTypes */.triggerHapticFeedback(require("../../../haptics/HapticUtils.native.tsx") /* HapticFeedbackTypes */.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require("../../../haptics/HapticUtils.native.tsx") /* HapticFeedbackTypes */;
  }
};
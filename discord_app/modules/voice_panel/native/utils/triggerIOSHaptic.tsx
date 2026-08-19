// discord_app/modules/voice_panel/native/utils/triggerIOSHaptic.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import HapticFeedbackTypes from "../../../haptics/HapticUtils.native.tsx";
import VoicePanelModes from "../../VoicePanelConstants.tsx";

const IS_IOS = VoicePanelModes.IS_IOS;
let result = obj132.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticFeedbackTypes.triggerHapticFeedback(HapticFeedbackTypes.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
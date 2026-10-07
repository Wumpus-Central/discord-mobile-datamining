// discord_app/modules/voice_panel/native/utils/triggerIOSHaptic.tsx
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import VoicePanelConstants from "../../VoicePanelConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
}

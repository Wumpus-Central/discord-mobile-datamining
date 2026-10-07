// discord_app/modules/panels/morphable/native/triggerIOSHaptic.tsx
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import MorphablePanelConstants from "MorphablePanelConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
}

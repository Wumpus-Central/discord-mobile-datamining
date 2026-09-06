// discord_app/modules/visual_effect_view/native/VisualEffectViewTarget.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import VisualEffectViewTargetAndroidNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/VisualEffectViewTargetAndroidNativeComponent.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let View = _mod17.View;
if (PlatformUtils.isAndroid()) {
  View = VisualEffectViewTargetAndroidNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewTarget.tsx");

export default View;

// discord_app/modules/visual_effect_view/native/VisualEffectViewTarget.tsx
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import __INTERNAL_VIEW_CONFIGDefault from "../../../../discord_common/js/packages/rtn-codegen/js/VisualEffectViewTargetAndroidNativeComponent.tsx";
import set from "../../../utils/PlatformUtils.tsx";

let View = get_ActivityIndicator.View;
if (set.isAndroid()) {
  View = __INTERNAL_VIEW_CONFIGDefault;
}
const result = set.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewTarget.tsx");

export default View;

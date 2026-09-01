// discord_app/components_native/common/NativeAPNGView.tsx
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import __INTERNAL_VIEW_CONFIG from "../../../discord_common/js/packages/rtn-codegen/js/APNGStickerNativeComponent.tsx";
import set from "../../utils/PlatformUtils.tsx";

if (set.isAndroid()) {
  let _default = __INTERNAL_VIEW_CONFIG.default;
} else {
  _default = get_ActivityIndicator.requireNativeComponent("APNGStickerView");
}
const result = set.fileFinishedImporting("components_native/common/NativeAPNGView.tsx");

export default _default;

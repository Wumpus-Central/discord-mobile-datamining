// discord_app/components_native/common/NativeAPNGView.tsx
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG" /* 10121 */;
import set from "set" /* 500 */;

if (set.isAndroid()) {
  let _default = __INTERNAL_VIEW_CONFIG.default;
} else {
  _default = get_ActivityIndicator.requireNativeComponent("APNGStickerView");
}
const result = set.fileFinishedImporting("components_native/common/NativeAPNGView.tsx");

export default _default;
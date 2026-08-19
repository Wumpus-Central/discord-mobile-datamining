// === Module 10120: ? ===

// Module 10120
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG" /* 10121 */;
import obj132 from "obj132" /* 500 */;

if (obj132.isAndroid()) {
  let _default = __INTERNAL_VIEW_CONFIG.default;
} else {
  _default = get_ActivityIndicator.requireNativeComponent("APNGStickerView");
}
const result = obj132.fileFinishedImporting("components_native/common/NativeAPNGView.tsx");

export default _default;
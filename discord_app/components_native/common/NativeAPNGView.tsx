// === Module 9726: NativeAPNGView ===

// Module 9726 (NativeAPNGView)
import _mod17 from "module_17" /* 17 */;
import APNGStickerNativeComponent from "APNGStickerNativeComponent" /* 9727 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isAndroid()) {
  let _default = APNGStickerNativeComponent.default;
} else {
  _default = _mod17.requireNativeComponent("APNGStickerView");
}
const result = size.fileFinishedImporting("components_native/common/NativeAPNGView.tsx");

export default _default;
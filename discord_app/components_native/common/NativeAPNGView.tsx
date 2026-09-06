// === Module 10177: NativeAPNGView ===

// Module 10177 (NativeAPNGView)
import _mod17 from "module_17" /* 17 */;
import APNGStickerNativeComponent from "APNGStickerNativeComponent" /* 10178 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isAndroid()) {
  let _default = APNGStickerNativeComponent.default;
} else {
  _default = _mod17.requireNativeComponent("APNGStickerView");
}
const result = size.fileFinishedImporting("components_native/common/NativeAPNGView.tsx");

export default _default;
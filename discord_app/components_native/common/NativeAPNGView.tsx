// discord_app/components_native/common/NativeAPNGView.tsx
import _mod17 from "../../../_runtime/metro/00017__.js";
import APNGStickerNativeComponent from "../../../discord_common/js/packages/rtn-codegen/js/APNGStickerNativeComponent.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

if (PlatformUtils.isAndroid()) {
  let _default = APNGStickerNativeComponent.default;
} else {
  _default = _mod17.requireNativeComponent("APNGStickerView");
}
const result = size.fileFinishedImporting("components_native/common/NativeAPNGView.tsx");

export default _default;

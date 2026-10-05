// discord_app/components_native/common/NativeAPNGView.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import APNGStickerNativeComponent from "../../../discord_common/js/packages/rtn-codegen/js/APNGStickerNativeComponent.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

let _default;
const requireNativeComponent = react_native.requireNativeComponent;
if (PlatformUtils.isAndroid()) {
  _default = APNGStickerNativeComponent.default;
} else {
  _default = requireNativeComponent("APNGStickerView");
}
const result = size.fileFinishedImporting("components_native/common/NativeAPNGView.tsx");

export default _default;

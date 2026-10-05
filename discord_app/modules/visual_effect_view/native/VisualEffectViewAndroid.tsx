// discord_app/modules/visual_effect_view/native/VisualEffectViewAndroid.tsx
import VisualEffectViewNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/VisualEffectViewNativeComponent.tsx";
import DeviceUtils from "../../../utils/native/DeviceUtils.tsx";
import requireNativeComponentOrDefault from "../../../utils/native/requireNativeComponentOrDefault.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;

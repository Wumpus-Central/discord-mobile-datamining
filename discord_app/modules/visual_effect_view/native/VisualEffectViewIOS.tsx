// discord_app/modules/visual_effect_view/native/VisualEffectViewIOS.tsx
import VisualEffectViewNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/VisualEffectViewNativeComponent.tsx";
import DeviceUtils from "../../../utils/native/DeviceUtils.tsx";
import requireNativeComponentOrDefault from "../../../utils/native/requireNativeComponentOrDefault.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 13;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewIOS.tsx");

export default requireNativeComponentOrDefault(obj);
export const BLUR_EFFECT_NAMES = [
  "UIBlurEffectStyleLight",
  "UIBlurEffectStyleExtraLight",
  "UIBlurEffectStyleDark",
  "UIBlurEffectStyleSystemUltraThinMaterialLight",
  "UIBlurEffectStyleSystemUltraThinMaterialDark",
  "UIBlurEffectStyleSystemThinMaterialLight",
  "UIBlurEffectStyleSystemThinMaterialDark",
  "UIBlurEffectStyleSystemMaterialLight",
  "UIBlurEffectStyleSystemMaterialDark",
  "UIBlurEffectStyleSystemThickMaterialLight",
  "UIBlurEffectStyleSystemThickMaterialDark",
  "UIBlurEffectStyleSystemChromeMaterialLight",
  "UIBlurEffectStyleSystemChromeMaterialDark",
];
export const MODERN_IOS_BLURS_EFFECTS_AVAILABLE = tmp2;

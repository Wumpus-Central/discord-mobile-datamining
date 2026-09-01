// discord_app/modules/visual_effect_view/native/VisualEffectViewIOS.tsx
import set from "../../../../_runtime/00002_set.js";
import __INTERNAL_VIEW_CONFIGDefault from "../../../../discord_common/js/packages/rtn-codegen/js/VisualEffectViewNativeComponent.tsx";
import DCDDeviceManager from "../../../utils/native/DeviceUtils.tsx";
import importDefaultResult from "../../../utils/native/requireNativeComponentOrDefault.native.tsx";

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
const tmp2 = DCDDeviceManager.getSystemVersionMajor() >= 13;
obj[1] = __INTERNAL_VIEW_CONFIGDefault;
const importDefaultResultResult = importDefaultResult(obj);
const result = set.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewIOS.tsx");

export default importDefaultResultResult;
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

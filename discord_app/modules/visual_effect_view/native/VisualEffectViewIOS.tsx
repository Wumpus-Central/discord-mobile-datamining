// === Module 5176: VisualEffectViewIOS ===

// Module 5176 (VisualEffectViewIOS)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5178 */;
import DeviceUtils from "DeviceUtils" /* 4735 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5177 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 13;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewIOS.tsx");

export default requireNativeComponentOrDefault(obj);
export const BLUR_EFFECT_NAMES = ["UIBlurEffectStyleLight", "UIBlurEffectStyleExtraLight", "UIBlurEffectStyleDark", "UIBlurEffectStyleSystemUltraThinMaterialLight", "UIBlurEffectStyleSystemUltraThinMaterialDark", "UIBlurEffectStyleSystemThinMaterialLight", "UIBlurEffectStyleSystemThinMaterialDark", "UIBlurEffectStyleSystemMaterialLight", "UIBlurEffectStyleSystemMaterialDark", "UIBlurEffectStyleSystemThickMaterialLight", "UIBlurEffectStyleSystemThickMaterialDark", "UIBlurEffectStyleSystemChromeMaterialLight", "UIBlurEffectStyleSystemChromeMaterialDark"];
export const MODERN_IOS_BLURS_EFFECTS_AVAILABLE = tmp2;
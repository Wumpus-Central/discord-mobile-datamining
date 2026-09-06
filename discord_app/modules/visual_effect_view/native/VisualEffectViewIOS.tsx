// === Module 4967: VisualEffectViewIOS ===

// Module 4967 (VisualEffectViewIOS)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 4969 */;
import DeviceUtils from "DeviceUtils" /* 4539 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 4968 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 13;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewIOS.tsx");

export default requireNativeComponentOrDefault(obj);
export const BLUR_EFFECT_NAMES = ["UIBlurEffectStyleLight", "UIBlurEffectStyleExtraLight", "UIBlurEffectStyleDark", "UIBlurEffectStyleSystemUltraThinMaterialLight", "UIBlurEffectStyleSystemUltraThinMaterialDark", "UIBlurEffectStyleSystemThinMaterialLight", "UIBlurEffectStyleSystemThinMaterialDark", "UIBlurEffectStyleSystemMaterialLight", "UIBlurEffectStyleSystemMaterialDark", "UIBlurEffectStyleSystemThickMaterialLight", "UIBlurEffectStyleSystemThickMaterialDark", "UIBlurEffectStyleSystemChromeMaterialLight", "UIBlurEffectStyleSystemChromeMaterialDark"];
export const MODERN_IOS_BLURS_EFFECTS_AVAILABLE = tmp2;
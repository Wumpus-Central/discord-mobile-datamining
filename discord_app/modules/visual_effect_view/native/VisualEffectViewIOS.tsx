// === Module 4727: BLUR_EFFECT_NAMES ===

// Module 4727 (BLUR_EFFECT_NAMES)
import obj132 from "obj132" /* 2 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 4729 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4354 */;
import importDefaultResult from "map" /* 4728 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
const tmp2 = DCDDeviceManager.getSystemVersionMajor() >= 13;
obj[1] = __INTERNAL_VIEW_CONFIGDefault;
const importDefaultResultResult = importDefaultResult(obj);
const result = obj132.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewIOS.tsx");

export default importDefaultResultResult;
export const BLUR_EFFECT_NAMES = ["UIBlurEffectStyleLight", "UIBlurEffectStyleExtraLight", "UIBlurEffectStyleDark", "UIBlurEffectStyleSystemUltraThinMaterialLight", "UIBlurEffectStyleSystemUltraThinMaterialDark", "UIBlurEffectStyleSystemThinMaterialLight", "UIBlurEffectStyleSystemThinMaterialDark", "UIBlurEffectStyleSystemMaterialLight", "UIBlurEffectStyleSystemMaterialDark", "UIBlurEffectStyleSystemThickMaterialLight", "UIBlurEffectStyleSystemThickMaterialDark", "UIBlurEffectStyleSystemChromeMaterialLight", "UIBlurEffectStyleSystemChromeMaterialDark"];
export const MODERN_IOS_BLURS_EFFECTS_AVAILABLE = tmp2;
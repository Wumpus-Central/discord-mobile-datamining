// === Module 5585: VisualEffectViewAndroid ===

// Module 5585 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5584 */;
import DeviceUtils from "DeviceUtils" /* 4969 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5583 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default requireNativeComponentOrDefault(obj);
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
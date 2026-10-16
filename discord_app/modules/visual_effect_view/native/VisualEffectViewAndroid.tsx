// === Module 5432: VisualEffectViewAndroid ===

// Module 5432 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5431 */;
import DeviceUtils from "DeviceUtils" /* 5130 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5430 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default requireNativeComponentOrDefault(obj);
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
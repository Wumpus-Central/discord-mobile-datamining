// === Module 5616: VisualEffectViewAndroid ===

// Module 5616 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5615 */;
import DeviceUtils from "DeviceUtils" /* 5000 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5614 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default requireNativeComponentOrDefault(obj);
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
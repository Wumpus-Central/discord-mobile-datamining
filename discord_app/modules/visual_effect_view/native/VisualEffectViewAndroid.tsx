// === Module 5778: VisualEffectViewAndroid ===

// Module 5778 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5777 */;
import DeviceUtils from "DeviceUtils" /* 4866 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5776 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default requireNativeComponentOrDefault(obj);
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
// === Module 19120: VisualEffectViewTarget ===

// Module 19120 (VisualEffectViewTarget)
import _mod17 from "module_17" /* 17 */;
import VisualEffectViewTargetAndroidNativeComponentDefault from "VisualEffectViewTargetAndroidNativeComponent" /* 19121 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import size from "module_2" /* 2 */;

let View = _mod17.View;
if (PlatformUtils.isAndroid()) {
  View = VisualEffectViewTargetAndroidNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewTarget.tsx");

export default View;
// === Module 16018: __INTERNAL_VIEW_CONFIG ===

// Module 16018 (__INTERNAL_VIEW_CONFIG)
import obj132 from "obj132" /* 2 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { uiViewClassName: "DCDVisualEffectViewTarget", validAttributes: {} };
const value = setRuntimeConfigProvider.get("DCDVisualEffectViewTarget", () => obj);
const result = obj132.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/VisualEffectViewTargetAndroidNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
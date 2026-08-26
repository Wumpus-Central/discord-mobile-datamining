// === Module 4873: __INTERNAL_VIEW_CONFIG ===

// Module 4873 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import result2 from "result" /* 26 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

let obj = { uiViewClassName: "DCDVisualEffectView", validAttributes: null };
obj = { blurAmount: true, blurEffectName: true, blurTintIOSParityCompensationColor: result2.colorAttribute, tintColor: result2.colorAttribute, blurTargetViewNativeId: true };
obj[1] = obj;
const value = setRuntimeConfigProvider.get("DCDVisualEffectView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/VisualEffectViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
// === Module 4729: __INTERNAL_VIEW_CONFIG ===

// Module 4729 (__INTERNAL_VIEW_CONFIG)
import obj132 from "obj132" /* 2 */;
import result2 from "result" /* 26 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { blurAmount: true, blurEffectName: true, blurTintIOSParityCompensationColor: result2.colorAttribute, tintColor: result2.colorAttribute, blurTargetViewNativeId: true };
obj[1] = obj;
const value = setRuntimeConfigProvider.get("DCDVisualEffectView", () => obj);
const result = obj132.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/VisualEffectViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
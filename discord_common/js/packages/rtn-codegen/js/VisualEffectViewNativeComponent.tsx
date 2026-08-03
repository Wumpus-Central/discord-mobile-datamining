// === Module 4598: __INTERNAL_VIEW_CONFIG ===

// Module 4598 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "DCDVisualEffectView", validAttributes: { blurAmount: true, blurEffectName: true, blurTintIOSParityCompensationRgba: true, blurTintRgba: true, blurTargetViewNativeId: true } };
const value = setRuntimeConfigProvider.get("DCDVisualEffectView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/VisualEffectViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
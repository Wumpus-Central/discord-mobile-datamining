// discord_common/js/packages/rtn-codegen/js/VisualEffectViewNativeComponent.tsx
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "DCDVisualEffectView", validAttributes: null };
obj = { blurAmount: true, blurEffectName: true, blurTintIOSParityCompensationColor: require("result").colorAttribute, tintColor: require("result").colorAttribute, blurTargetViewNativeId: true };
obj[1] = obj;
const value = setRuntimeConfigProvider.get("DCDVisualEffectView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/VisualEffectViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
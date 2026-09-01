// discord_common/js/packages/rtn-codegen/js/VisualEffectViewNativeComponent.tsx
import set from "../../../../../_runtime/00002_set.js";
import result2 from "../../../../../_runtime/00026_result.js";
import setRuntimeConfigProvider from "../../../../../_runtime/00065_setRuntimeConfigProvider.js";

let obj = { uiViewClassName: "DCDVisualEffectView", validAttributes: null };
obj = {
  blurAmount: true,
  blurEffectName: true,
  blurTintIOSParityCompensationColor: result2.colorAttribute,
  tintColor: result2.colorAttribute,
  blurTargetViewNativeId: true,
};
obj[1] = obj;
const value = setRuntimeConfigProvider.get("DCDVisualEffectView", () => obj);
const result = set.fileFinishedImporting(
  "../discord_common/js/packages/rtn-codegen/js/VisualEffectViewNativeComponent.tsx",
);

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;

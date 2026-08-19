// === Module 4117: __INTERNAL_VIEW_CONFIG ===

// Module 4117 (__INTERNAL_VIEW_CONFIG)
import obj132 from "obj132" /* 2 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { uiViewClassName: "ReanimatedView", validAttributes: { hasEnteringAnimation: true } };
const value = setRuntimeConfigProvider.get("ReanimatedView", () => obj);
const result = obj132.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ReanimatedViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
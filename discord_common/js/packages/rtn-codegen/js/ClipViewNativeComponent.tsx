// === Module 8033: __INTERNAL_VIEW_CONFIG ===

// Module 8033 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { uiViewClassName: "ClipView", validAttributes: { cutouts: true } };
const value = setRuntimeConfigProvider.get("ClipView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ClipViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
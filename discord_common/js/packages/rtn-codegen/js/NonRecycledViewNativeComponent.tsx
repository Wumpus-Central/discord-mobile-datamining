// === Module 11856: __INTERNAL_VIEW_CONFIG ===

// Module 11856 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { uiViewClassName: "DCDNonRecycledView", validAttributes: {} };
const value = setRuntimeConfigProvider.get("DCDNonRecycledView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NonRecycledViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
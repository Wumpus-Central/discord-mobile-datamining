// === Module 9064: __INTERNAL_VIEW_CONFIG ===

// Module 9064 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

let obj = { uiViewClassName: "DCDPortalView", directEventTypes: { topPortalViewLoaded: { registrationName: "onPortalViewLoaded" } }, validAttributes: null };
obj = { portal: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onPortalViewLoaded: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("DCDPortalView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/PortalViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
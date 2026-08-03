// === Module 8125: __INTERNAL_VIEW_CONFIG ===

// Module 8125 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "DCDPortalView", directEventTypes: { topPortalViewLoaded: { registrationName: "onPortalViewLoaded" } }, validAttributes: null };
obj = { portal: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onPortalViewLoaded: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("DCDPortalView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/PortalViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
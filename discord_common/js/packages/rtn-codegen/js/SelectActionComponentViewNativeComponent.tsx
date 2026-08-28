// === Module 15246: __INTERNAL_VIEW_CONFIG ===

// Module 15246 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

let obj = { uiViewClassName: "SelectActionComponentView", directEventTypes: { topTap: { registrationName: "onTap" } }, validAttributes: null };
obj = { model: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onTap: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("SelectActionComponentView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/SelectActionComponentViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
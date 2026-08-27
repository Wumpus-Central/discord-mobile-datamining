// === Module 13674: __INTERNAL_VIEW_CONFIG ===

// Module 13674 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

let obj = { uiViewClassName: "AccessibilityFocusView", directEventTypes: { topAccessibilityFocus: { registrationName: "onAccessibilityFocus" }, topAccessibilityBlur: { registrationName: "onAccessibilityBlur" } }, validAttributes: null };
obj = {};
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onAccessibilityFocus: true, onAccessibilityBlur: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("AccessibilityFocusView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/AccessibilityFocusNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
// discord_common/js/packages/rtn-codegen/js/AccessibilityFocusNativeComponent.tsx
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "AccessibilityFocusView", directEventTypes: { topAccessibilityFocus: { registrationName: "onAccessibilityFocus" }, topAccessibilityBlur: { registrationName: "onAccessibilityBlur" } }, validAttributes: null };
obj = {};
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onAccessibilityFocus: true, onAccessibilityBlur: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("AccessibilityFocusView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/AccessibilityFocusNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
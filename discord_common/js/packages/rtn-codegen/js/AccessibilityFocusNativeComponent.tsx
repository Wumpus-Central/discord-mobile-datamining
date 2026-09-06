// === Module 14117: AccessibilityFocusNativeComponent ===

// Module 14117 (AccessibilityFocusNativeComponent)
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let __INTERNAL_VIEW_CONFIG = { uiViewClassName: "AccessibilityFocusView", directEventTypes: { topAccessibilityFocus: { registrationName: "onAccessibilityFocus" }, topAccessibilityBlur: { registrationName: "onAccessibilityBlur" } }, validAttributes: null };
__INTERNAL_VIEW_CONFIG = {};
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onAccessibilityFocus: true, onAccessibilityBlur: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = __INTERNAL_VIEW_CONFIG;
const value = module_65.get("AccessibilityFocusView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/AccessibilityFocusNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
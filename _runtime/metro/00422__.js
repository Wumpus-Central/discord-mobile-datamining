// === Module 422: ? ===

// Module 422
import renderElement from "renderElement" /* 114 */;
import noop from "module_19" /* 19 */;

require = fn;
let __INTERNAL_VIEW_CONFIG = { uiViewClassName: "AndroidSwitch", bubblingEventTypes: null, validAttributes: null };
__INTERNAL_VIEW_CONFIG = { topChange: { phasedRegistrationNames: { captured: "onChangeCapture", bubbled: "onChange" } } };
__INTERNAL_VIEW_CONFIG.bubblingEventTypes = __INTERNAL_VIEW_CONFIG;
__INTERNAL_VIEW_CONFIG = { disabled: true, enabled: true, thumbColor: fn(26).colorAttribute, trackColorForFalse: fn(26).colorAttribute, trackColorForTrue: fn(26).colorAttribute, value: true, on: true, thumbTintColor: fn(26).colorAttribute, trackTintColor: fn(26).colorAttribute };
const weakSet = fn(106);
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onChange: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = __INTERNAL_VIEW_CONFIG;
const module_65 = fn(65);

export default module_65.get("AndroidSwitch", () => obj);
export { __INTERNAL_VIEW_CONFIG };
export const Commands = {
  setNativeValue(current, arg1) {
    const items = [arg1];
    renderElement.dispatchCommand(current, "setNativeValue", items);
  }
};
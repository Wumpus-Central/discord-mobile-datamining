// _runtime/metro/00422__.js
import renderElement from "../00114_renderElement.js";
import noop from "00019__.js";

require = fn;
const __INTERNAL_VIEW_CONFIG = {
  uiViewClassName: "AndroidSwitch",
  bubblingEventTypes: { topChange: { phasedRegistrationNames: { captured: "onChangeCapture", bubbled: "onChange" } } },
  validAttributes: null,
};
const weakSet = fn(106);
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onChange: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = {
  disabled: true,
  enabled: true,
  thumbColor: fn(26).colorAttribute,
  trackColorForFalse: fn(26).colorAttribute,
  trackColorForTrue: fn(26).colorAttribute,
  value: true,
  on: true,
  thumbTintColor: fn(26).colorAttribute,
  trackTintColor: fn(26).colorAttribute,
};
const module_65 = fn(65);

export default module_65.get("AndroidSwitch", () => obj);
export { __INTERNAL_VIEW_CONFIG };
export const Commands = {
  setNativeValue(current, arg1) {
    const items = [arg1];
    renderElement.dispatchCommand(current, "setNativeValue", items);
  },
};

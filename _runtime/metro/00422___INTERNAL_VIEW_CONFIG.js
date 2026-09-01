// _runtime/metro/00422___INTERNAL_VIEW_CONFIG.js
import noopAll from "../00019_noop.js";
import renderElement from "../00114_renderElement.js";
import weakSet from "../00106_weakSet.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

require = arg1;
noopAll;
let obj = {
  uiViewClassName: "AndroidSwitch",
  bubblingEventTypes: { topChange: { phasedRegistrationNames: { captured: "onChangeCapture", bubbled: "onChange" } } },
  validAttributes: null,
};
obj = {
  disabled: true,
  enabled: true,
  thumbColor: require("result").colorAttribute,
  trackColorForFalse: require("result").colorAttribute,
  trackColorForTrue: require("result").colorAttribute,
  value: true,
  on: true,
  thumbTintColor: require("result").colorAttribute,
  trackTintColor: require("result").colorAttribute,
};
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onChange: true }));
obj[2] = obj;
obj = {
  setNativeValue(current, arg1) {
    const items = [arg1];
    renderElement.dispatchCommand(current, "setNativeValue", items);
  },
};

export default setRuntimeConfigProvider.get("AndroidSwitch", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;

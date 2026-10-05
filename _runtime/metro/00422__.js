// _runtime/metro/00422__.js
import _mod26 from "00026__.js";
import renderElement from "../00114_renderElement.js";
import react from "../00019_react.js";
import DynamicallyInjectedByGestureHandler from "../00106_DynamicallyInjectedByGestureHandler.js";
import 00065__ from "00065__.js";

let obj2;
let obj3;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "AndroidSwitch", bubblingEventTypes: obj2, validAttributes: obj3 };
obj2 = { topChange: { phasedRegistrationNames: { captured: "onChangeCapture", bubbled: "onChange" } } };
obj3 = { disabled: true, enabled: true, thumbColor: _mod26.colorAttribute, trackColorForFalse: _mod26.colorAttribute, trackColorForTrue: _mod26.colorAttribute, value: true, on: true, thumbTintColor: _mod26.colorAttribute, trackTintColor: _mod26.colorAttribute };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onChange: true }));
const obj4 = {
  setNativeValue(current, arg1) {
    const items = [arg1];
    const obj = renderElement;
    obj.dispatchCommand(current, "setNativeValue", items);
  }
};

export default module_65.get("AndroidSwitch", () => obj);
export { __INTERNAL_VIEW_CONFIG };
export const Commands = obj4;
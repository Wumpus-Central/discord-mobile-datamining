// === Module 7955: ? ===

// Module 7955
import processColor from "processColor" /* 50 */;
import react_native from "react-native" /* 17 */;
import resolveAssetSource_mod from "resolveAssetSource" /* 81 */;
import DynamicallyInjectedByGestureHandler_mod from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;

let DynamicallyInjectedByGestureHandler;
let assign;
let obj2;
let obj3;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNCSlider", bubblingEventTypes: obj2, directEventTypes: { topRNCSliderSlidingStart: { registrationName: "onRNCSliderSlidingStart" }, topRNCSliderSlidingComplete: { registrationName: "onRNCSliderSlidingComplete" } }, validAttributes: assign(obj3, DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onChange: true, onRNCSliderSlidingStart: true, onRNCSliderSlidingComplete: true, onRNCSliderValueChange: true })) };
const _Object = Object;
assign = Object.assign;
obj2 = { topChange: { phasedRegistrationNames: { captured: "onChangeCapture", bubbled: "onChange" } }, topRNCSliderValueChange: { phasedRegistrationNames: { captured: "onRNCSliderValueChangeCapture", bubbled: "onRNCSliderValueChange" } } };
let resolveAssetSource = resolveAssetSource_mod;
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
obj3 = { accessibilityUnits: true, accessibilityIncrements: true, disabled: true, inverted: true, vertical: true, tapToSeek: true, maximumTrackImage: { process: resolveAssetSource }, maximumTrackTintColor: { process: processColor.default }, maximumValue: true, minimumTrackImage: { process: resolveAssetSource }, minimumTrackTintColor: { process: processColor.default }, minimumValue: true, step: true, testID: true, thumbImage: { process: resolveAssetSource }, thumbTintColor: { process: processColor.default }, thumbSize: true, trackImage: { process: resolveAssetSource }, value: true, lowerLimit: true, upperLimit: true };
({ process: processColor.default });
resolveAssetSource = resolveAssetSource_mod;
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
({ process: processColor.default });
resolveAssetSource = resolveAssetSource_mod;
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
({ process: processColor.default });
resolveAssetSource = resolveAssetSource_mod;
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
DynamicallyInjectedByGestureHandler = DynamicallyInjectedByGestureHandler_mod;

export { __INTERNAL_VIEW_CONFIG };
export default module_65.get("RNCSlider", () => obj);
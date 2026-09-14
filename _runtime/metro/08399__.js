// === Module 8399: ? ===

// Module 8399
import processColor from "processColor" /* 50 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import resolveAssetSource_mod from "resolveAssetSource" /* 81 */;
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNCSlider", bubblingEventTypes: { topChange: { phasedRegistrationNames: { captured: "onChangeCapture", bubbled: "onChange" } }, topRNCSliderValueChange: { phasedRegistrationNames: { captured: "onRNCSliderValueChangeCapture", bubbled: "onRNCSliderValueChange" } } }, directEventTypes: { topRNCSliderSlidingStart: { registrationName: "onRNCSliderSlidingStart" }, topRNCSliderSlidingComplete: { registrationName: "onRNCSliderSlidingComplete" } }, validAttributes: null };
let resolveAssetSource = resolveAssetSource_mod;
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
const obj3 = { accessibilityUnits: true, accessibilityIncrements: true, disabled: true, inverted: true, vertical: true, tapToSeek: true, maximumTrackImage: { process: resolveAssetSource }, maximumTrackTintColor: { process: processColor.default }, maximumValue: true, minimumTrackImage: null, minimumTrackTintColor: null, minimumValue: true, step: true, testID: true, thumbImage: null, thumbTintColor: null, thumbSize: true, trackImage: null, value: true, lowerLimit: true, upperLimit: true };
let resolveAssetSource = resolveAssetSource_mod;
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
obj3.minimumTrackImage = { process: resolveAssetSource };
const obj2 = { topChange: { phasedRegistrationNames: { captured: "onChangeCapture", bubbled: "onChange" } }, topRNCSliderValueChange: { phasedRegistrationNames: { captured: "onRNCSliderValueChangeCapture", bubbled: "onRNCSliderValueChange" } } };
const obj4 = { process: processColor.default };
obj3.minimumTrackTintColor = { process: processColor.default };
let resolveAssetSource = resolveAssetSource_mod;
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
obj3.thumbImage = { process: resolveAssetSource };
const obj5 = { process: processColor.default };
obj3.thumbTintColor = { process: processColor.default };
let resolveAssetSource = resolveAssetSource_mod;
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
obj3.trackImage = { process: resolveAssetSource };
__INTERNAL_VIEW_CONFIG.validAttributes = Object.assign(obj3, weakSet.ConditionallyIgnoredEventHandlers({ onChange: true, onRNCSliderSlidingStart: true, onRNCSliderSlidingComplete: true, onRNCSliderValueChange: true }));

export { __INTERNAL_VIEW_CONFIG };
export default module_65.get("RNCSlider", () => obj);
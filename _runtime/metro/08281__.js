// === Module 8281: ? ===

// Module 8281
import processColor from "processColor" /* 50 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import resolveAssetSource from "resolveAssetSource" /* 81 */;
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;

let __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNCSlider", bubblingEventTypes: null, directEventTypes: null, validAttributes: null };
__INTERNAL_VIEW_CONFIG = { topChange: { phasedRegistrationNames: { captured: "onChangeCapture", bubbled: "onChange" } }, topRNCSliderValueChange: { phasedRegistrationNames: { captured: "onRNCSliderValueChangeCapture", bubbled: "onRNCSliderValueChange" } } };
__INTERNAL_VIEW_CONFIG.bubblingEventTypes = __INTERNAL_VIEW_CONFIG;
__INTERNAL_VIEW_CONFIG.directEventTypes = { topRNCSliderSlidingStart: { registrationName: "onRNCSliderSlidingStart" }, topRNCSliderSlidingComplete: { registrationName: "onRNCSliderSlidingComplete" } };
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
__INTERNAL_VIEW_CONFIG = { accessibilityUnits: true, accessibilityIncrements: true, disabled: true, inverted: true, vertical: true, tapToSeek: true, maximumTrackImage: { process: resolveAssetSource }, maximumTrackTintColor: { process: processColor.default }, maximumValue: true, minimumTrackImage: null, minimumTrackTintColor: null, minimumValue: true, step: true, testID: true, thumbImage: null, thumbTintColor: null, thumbSize: true, trackImage: null, value: true, lowerLimit: true, upperLimit: true };
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
__INTERNAL_VIEW_CONFIG.minimumTrackImage = { process: resolveAssetSource };
const obj1 = { process: processColor.default };
__INTERNAL_VIEW_CONFIG.minimumTrackTintColor = { process: processColor.default };
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
__INTERNAL_VIEW_CONFIG.thumbImage = { process: resolveAssetSource };
const obj2 = { process: processColor.default };
__INTERNAL_VIEW_CONFIG.thumbTintColor = { process: processColor.default };
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
__INTERNAL_VIEW_CONFIG.trackImage = { process: resolveAssetSource };
__INTERNAL_VIEW_CONFIG.validAttributes = Object.assign(__INTERNAL_VIEW_CONFIG, weakSet.ConditionallyIgnoredEventHandlers({ onChange: true, onRNCSliderSlidingStart: true, onRNCSliderSlidingComplete: true, onRNCSliderValueChange: true }));

export { __INTERNAL_VIEW_CONFIG };
export default module_65.get("RNCSlider", () => obj);
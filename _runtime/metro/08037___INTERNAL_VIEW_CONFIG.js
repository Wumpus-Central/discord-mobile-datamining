// _runtime/metro/08037___INTERNAL_VIEW_CONFIG.js
import 08035__ from "08035__.js";
import codegenNativeComponent from "codegenNativeComponent";
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "RNCSlider", bubblingEventTypes: { topChange: { phasedRegistrationNames: { captured: "onChangeCapture", bubbled: "onChange" } }, topRNCSliderValueChange: { phasedRegistrationNames: { captured: "onRNCSliderValueChangeCapture", bubbled: "onRNCSliderValueChange" } } }, directEventTypes: { topRNCSliderSlidingStart: { registrationName: "onRNCSliderSlidingStart" }, topRNCSliderSlidingComplete: { registrationName: "onRNCSliderSlidingComplete" } }, validAttributes: null };
obj = { accessibilityUnits: true, accessibilityIncrements: true, disabled: true, inverted: true, vertical: true, tapToSeek: true, maximumTrackImage: null, maximumTrackTintColor: null, maximumValue: true, minimumTrackImage: null, minimumTrackTintColor: null, minimumValue: true, step: true, testID: true, thumbImage: null, thumbTintColor: null, trackImage: null, value: true, lowerLimit: true, upperLimit: true };
obj = { process: require("resolveAssetSource") };
obj[6] = obj;
obj[7] = { process: require("processColor").default };
const obj1 = { process: require("processColor").default };
obj[9] = { process: require("resolveAssetSource") };
const obj2 = { process: require("resolveAssetSource") };
obj[10] = { process: require("processColor").default };
const obj3 = { process: require("processColor").default };
obj[14] = { process: require("resolveAssetSource") };
const obj4 = { process: require("resolveAssetSource") };
obj[15] = { process: require("processColor").default };
const obj5 = { process: require("processColor").default };
obj[16] = { process: require("resolveAssetSource") };
obj[3] = Object.assign(obj, weakSet.ConditionallyIgnoredEventHandlers({ onChange: true, onRNCSliderSlidingStart: true, onRNCSliderSlidingComplete: true, onRNCSliderValueChange: true }));

export const __INTERNAL_VIEW_CONFIG = obj;
export default setRuntimeConfigProvider.get("RNCSlider", () => obj);
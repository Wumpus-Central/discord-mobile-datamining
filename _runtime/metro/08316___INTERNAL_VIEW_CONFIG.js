// _runtime/metro/08316___INTERNAL_VIEW_CONFIG.js
import processColor from "../00050_processColor.js";
import resolveAssetSource from "../00081_resolveAssetSource.js";
import codegenNativeComponent2 from "../00463_codegenNativeComponent.js";
import 08314__ from "08314__.js";
import weakSet from "../00106_weakSet.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

const codegenNativeComponent = module_8314(codegenNativeComponent2);
let obj = { uiViewClassName: "RNCSlider", bubblingEventTypes: { topChange: { phasedRegistrationNames: { captured: "onChangeCapture", bubbled: "onChange" } }, topRNCSliderValueChange: { phasedRegistrationNames: { captured: "onRNCSliderValueChangeCapture", bubbled: "onRNCSliderValueChange" } } }, directEventTypes: { topRNCSliderSlidingStart: { registrationName: "onRNCSliderSlidingStart" }, topRNCSliderSlidingComplete: { registrationName: "onRNCSliderSlidingComplete" } }, validAttributes: null };
obj = { accessibilityUnits: true, accessibilityIncrements: true, disabled: true, inverted: true, vertical: true, tapToSeek: true, maximumTrackImage: null, maximumTrackTintColor: null, maximumValue: true, minimumTrackImage: null, minimumTrackTintColor: null, minimumValue: true, step: true, testID: true, thumbImage: null, thumbTintColor: null, trackImage: null, value: true, lowerLimit: true, upperLimit: true };
obj = { process: resolveAssetSource };
obj[6] = obj;
obj[7] = { process: processColor.default };
const obj1 = { process: processColor.default };
obj[9] = { process: resolveAssetSource };
const obj2 = { process: resolveAssetSource };
obj[10] = { process: processColor.default };
const obj3 = { process: processColor.default };
obj[14] = { process: resolveAssetSource };
const obj4 = { process: resolveAssetSource };
obj[15] = { process: processColor.default };
const obj5 = { process: processColor.default };
obj[16] = { process: resolveAssetSource };
obj[3] = Object.assign(obj, weakSet.ConditionallyIgnoredEventHandlers({ onChange: true, onRNCSliderSlidingStart: true, onRNCSliderSlidingComplete: true, onRNCSliderValueChange: true }));

export const __INTERNAL_VIEW_CONFIG = obj;
export default setRuntimeConfigProvider.get("RNCSlider", () => obj);
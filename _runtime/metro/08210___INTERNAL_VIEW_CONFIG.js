// === Module 8210: __INTERNAL_VIEW_CONFIG ===

// Module 8210 (__INTERNAL_VIEW_CONFIG)
import processColor from "processColor" /* 50 */;
import resolveAssetSource from "resolveAssetSource" /* 81 */;
import codegenNativeComponent2 from "codegenNativeComponent" /* 463 */;
import module_8208 from "module_8208" /* 8208 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const codegenNativeComponent = module_8208(codegenNativeComponent2);
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
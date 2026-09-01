// _runtime/metro/08384___INTERNAL_VIEW_CONFIG.js
import processColor from "../00050_processColor.js";
import get_ActivityIndicator from "../00017_get_ActivityIndicator.js";
import resolveAssetSource from "../00081_resolveAssetSource.js";
import weakSet from "../00106_weakSet.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

let obj = {
  uiViewClassName: "RNCSlider",
  bubblingEventTypes: {
    topChange: { phasedRegistrationNames: { captured: "onChangeCapture", bubbled: "onChange" } },
    topRNCSliderValueChange: {
      phasedRegistrationNames: { captured: "onRNCSliderValueChangeCapture", bubbled: "onRNCSliderValueChange" },
    },
  },
  directEventTypes: {
    topRNCSliderSlidingStart: { registrationName: "onRNCSliderSlidingStart" },
    topRNCSliderSlidingComplete: { registrationName: "onRNCSliderSlidingComplete" },
  },
  validAttributes: null,
};
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
obj = {
  accessibilityUnits: true,
  accessibilityIncrements: true,
  disabled: true,
  inverted: true,
  vertical: true,
  tapToSeek: true,
  maximumTrackImage: { process: resolveAssetSource },
  maximumTrackTintColor: null,
  maximumValue: true,
  minimumTrackImage: null,
  minimumTrackTintColor: null,
  minimumValue: true,
  step: true,
  testID: true,
  thumbImage: null,
  thumbTintColor: null,
  thumbSize: true,
  trackImage: null,
  value: true,
  lowerLimit: true,
  upperLimit: true,
};
obj = { process: processColor.default };
obj[7] = obj;
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
obj[9] = { process: resolveAssetSource };
obj[10] = { process: processColor.default };
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
obj[14] = { process: resolveAssetSource };
const obj1 = { process: processColor.default };
obj[15] = { process: processColor.default };
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
obj[17] = { process: resolveAssetSource };
obj[3] = Object.assign(
  obj,
  weakSet.ConditionallyIgnoredEventHandlers({
    onChange: true,
    onRNCSliderSlidingStart: true,
    onRNCSliderSlidingComplete: true,
    onRNCSliderValueChange: true,
  }),
);

export const __INTERNAL_VIEW_CONFIG = obj;
export default setRuntimeConfigProvider.get("RNCSlider", () => obj);

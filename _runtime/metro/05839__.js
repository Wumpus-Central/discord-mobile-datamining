// _runtime/metro/05839__.js
import renderElement from "../00114_renderElement.js";
import weakSet from "../00106_weakSet.js";
import 00065__ from "00065__.js";

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "LottieAnimationView", bubblingEventTypes: { topAnimationFinish: { phasedRegistrationNames: { captured: "onAnimationFinishCapture", bubbled: "onAnimationFinish" } }, topAnimationFailure: { phasedRegistrationNames: { captured: "onAnimationFailureCapture", bubbled: "onAnimationFailure" } }, topAnimationLoaded: { phasedRegistrationNames: { captured: "onAnimationLoadedCapture", bubbled: "onAnimationLoaded" } } }, validAttributes: null };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onAnimationFinish: true, onAnimationFailure: true, onAnimationLoaded: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = { resizeMode: true, renderMode: true, sourceName: true, sourceJson: true, sourceURL: true, sourceDotLottieURI: true, imageAssetsFolder: true, progress: true, speed: true, loop: true, autoPlay: true, enableMergePathsAndroidForKitKatAndAbove: true, enableSafeModeAndroid: true, hardwareAccelerationAndroid: true, cacheComposition: true, colorFilters: true, dummy: true, textFiltersAndroid: true, textFiltersIOS: true };

export default module_65.get("LottieAnimationView", () => obj);
export { __INTERNAL_VIEW_CONFIG };
export const Commands = {
  play(arg0, arg1, arg2) {
    const items = [arg1, arg2];
    renderElement.dispatchCommand(arg0, "play", items);
  },
  reset(arg0) {
    renderElement.dispatchCommand(arg0, "reset", []);
  },
  pause(arg0) {
    renderElement.dispatchCommand(arg0, "pause", []);
  },
  resume(arg0) {
    renderElement.dispatchCommand(arg0, "resume", []);
  }
};
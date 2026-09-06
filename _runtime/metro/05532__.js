// === Module 5532: ? ===

// Module 5532
import renderElement from "renderElement" /* 114 */;
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;

let __INTERNAL_VIEW_CONFIG = { uiViewClassName: "LottieAnimationView", bubblingEventTypes: null, validAttributes: null };
__INTERNAL_VIEW_CONFIG = { topAnimationFinish: { phasedRegistrationNames: { captured: "onAnimationFinishCapture", bubbled: "onAnimationFinish" } }, topAnimationFailure: { phasedRegistrationNames: { captured: "onAnimationFailureCapture", bubbled: "onAnimationFailure" } }, topAnimationLoaded: { phasedRegistrationNames: { captured: "onAnimationLoadedCapture", bubbled: "onAnimationLoaded" } } };
__INTERNAL_VIEW_CONFIG.bubblingEventTypes = __INTERNAL_VIEW_CONFIG;
__INTERNAL_VIEW_CONFIG = { resizeMode: true, renderMode: true, sourceName: true, sourceJson: true, sourceURL: true, sourceDotLottieURI: true, imageAssetsFolder: true, progress: true, speed: true, loop: true, autoPlay: true, enableMergePathsAndroidForKitKatAndAbove: true, enableSafeModeAndroid: true, hardwareAccelerationAndroid: true, cacheComposition: true, colorFilters: true, dummy: true, textFiltersAndroid: true, textFiltersIOS: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onAnimationFinish: true, onAnimationFailure: true, onAnimationLoaded: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = __INTERNAL_VIEW_CONFIG;

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
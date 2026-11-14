// === Module 5926: ? ===

// Module 5926
import renderElement from "renderElement" /* 114 */;
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "LottieAnimationView", bubblingEventTypes: { topAnimationFinish: { phasedRegistrationNames: { captured: "onAnimationFinishCapture", bubbled: "onAnimationFinish" } }, topAnimationFailure: { phasedRegistrationNames: { captured: "onAnimationFailureCapture", bubbled: "onAnimationFailure" } }, topAnimationLoaded: { phasedRegistrationNames: { captured: "onAnimationLoadedCapture", bubbled: "onAnimationLoaded" } } }, validAttributes: null };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onAnimationFinish: true, onAnimationFailure: true, onAnimationLoaded: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = { resizeMode: true, renderMode: true, sourceName: true, sourceJson: true, sourceURL: true, sourceDotLottieURI: true, imageAssetsFolder: true, progress: true, speed: true, loop: true, autoPlay: true, enableMergePathsAndroidForKitKatAndAbove: true, enableSafeModeAndroid: true, hardwareAccelerationAndroid: true, cacheComposition: true, colorFilters: true, dummy: true, textFiltersAndroid: true, textFiltersIOS: true };

export default module_65.get("LottieAnimationView", () => obj);
export { __INTERNAL_VIEW_CONFIG };
export const Commands = {
  play(nodeFromPublicInstance, arg1, arg2) {
    items = [arg1, arg2];
    renderElement.dispatchCommand(nodeFromPublicInstance, "play", items);
  },
  reset(nodeFromPublicInstance) {
    renderElement.dispatchCommand(nodeFromPublicInstance, "reset", []);
  },
  pause(nodeFromPublicInstance) {
    renderElement.dispatchCommand(nodeFromPublicInstance, "pause", []);
  },
  resume(nodeFromPublicInstance) {
    renderElement.dispatchCommand(nodeFromPublicInstance, "resume", []);
  }
};
// === Module 5736: ? ===

// Module 5736
import react_native from "react-native" /* 17 */;
import resolveAssetSource_mod from "resolveAssetSource" /* 81 */;
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;

let obj2;
const codegenNativeComponent = react_native.codegenNativeComponent;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNSTabsScreenAndroid", directEventTypes: { topWillAppear: { registrationName: "onWillAppear" }, topDidAppear: { registrationName: "onDidAppear" }, topWillDisappear: { registrationName: "onWillDisappear" }, topDidDisappear: { registrationName: "onDidDisappear" } }, validAttributes: obj2 };
let resolveAssetSource = resolveAssetSource_mod;
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
obj2 = { screenKey: true, preventNativeSelection: true, title: true, badgeValue: true, tabBarItemTestID: true, tabBarItemAccessibilityLabel: true, specialEffects: true, drawableIconResourceName: true, imageIconResource: { process: resolveAssetSource }, selectedDrawableIconResourceName: true, selectedImageIconResource: { process: resolveAssetSource }, standardAppearance: true };
resolveAssetSource = resolveAssetSource_mod;
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onWillAppear: true, onDidAppear: true, onWillDisappear: true, onDidDisappear: true }));

export default module_65.get("RNSTabsScreenAndroid", () => obj);
export { __INTERNAL_VIEW_CONFIG };
// _runtime/metro/05736__.js
import react_native from "../00017_react-native.js";
import resolveAssetSource_mod from "../00081_resolveAssetSource.js";
import DynamicallyInjectedByGestureHandler from "../00106_DynamicallyInjectedByGestureHandler.js";
import 00065__ from "00065__.js";

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
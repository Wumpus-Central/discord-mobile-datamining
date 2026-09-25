// === Module 5218: ? ===

// Module 5218
import _mod17 from "module_17" /* 17 */;
import resolveAssetSource_mod from "resolveAssetSource" /* 81 */;
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;

const codegenNativeComponent = _mod17.codegenNativeComponent;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNSTabsScreenAndroid", directEventTypes: { topWillAppear: { registrationName: "onWillAppear" }, topDidAppear: { registrationName: "onDidAppear" }, topWillDisappear: { registrationName: "onWillDisappear" }, topDidDisappear: { registrationName: "onDidDisappear" } }, validAttributes: null };
let resolveAssetSource = resolveAssetSource_mod;
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
const obj2 = { screenKey: true, preventNativeSelection: true, title: true, badgeValue: true, tabBarItemTestID: true, tabBarItemAccessibilityLabel: true, specialEffects: true, drawableIconResourceName: true, imageIconResource: { process: resolveAssetSource }, selectedDrawableIconResourceName: true, selectedImageIconResource: null, standardAppearance: true };
let resolveAssetSource = resolveAssetSource_mod;
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
obj2.selectedImageIconResource = { process: resolveAssetSource };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onWillAppear: true, onDidAppear: true, onWillDisappear: true, onDidDisappear: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = obj2;

export default module_65.get("RNSTabsScreenAndroid", () => obj);
export { __INTERNAL_VIEW_CONFIG };
// === Module 4971: ? ===

// Module 4971
import _mod17 from "module_17" /* 17 */;
import resolveAssetSource from "resolveAssetSource" /* 81 */;
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;

const codegenNativeComponent = _mod17.codegenNativeComponent;
let __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNSTabsScreenAndroid", directEventTypes: { topWillAppear: { registrationName: "onWillAppear" }, topDidAppear: { registrationName: "onDidAppear" }, topWillDisappear: { registrationName: "onWillDisappear" }, topDidDisappear: { registrationName: "onDidDisappear" } }, validAttributes: null };
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
__INTERNAL_VIEW_CONFIG = { screenKey: true, preventNativeSelection: true, title: true, badgeValue: true, tabBarItemTestID: true, tabBarItemAccessibilityLabel: true, specialEffects: true, drawableIconResourceName: true, imageIconResource: { process: resolveAssetSource }, selectedDrawableIconResourceName: true, selectedImageIconResource: null, standardAppearance: true };
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
__INTERNAL_VIEW_CONFIG.selectedImageIconResource = { process: resolveAssetSource };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onWillAppear: true, onDidAppear: true, onWillDisappear: true, onDidDisappear: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = __INTERNAL_VIEW_CONFIG;

export default module_65.get("RNSTabsScreenAndroid", () => obj);
export { __INTERNAL_VIEW_CONFIG };
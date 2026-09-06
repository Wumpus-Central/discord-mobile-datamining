// === Module 4957: ? ===

// Module 4957
import _mod17 from "module_17" /* 17 */;
import _mod26 from "module_26" /* 26 */;
import resolveAssetSource from "resolveAssetSource" /* 81 */;
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;

const codegenNativeComponent = _mod17.codegenNativeComponent;
let __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNSTabsScreen", directEventTypes: { topLifecycleStateChange: { registrationName: "onLifecycleStateChange" }, topWillAppear: { registrationName: "onWillAppear" }, topDidAppear: { registrationName: "onDidAppear" }, topWillDisappear: { registrationName: "onWillDisappear" }, topDidDisappear: { registrationName: "onDidDisappear" } }, validAttributes: null };
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
__INTERNAL_VIEW_CONFIG = { isFocused: true, tabKey: true, title: true, isTitleUndefined: true, badgeValue: true, tabBarItemTestID: true, tabBarItemAccessibilityLabel: true, orientation: true, drawableIconResourceName: true, imageIconResource: { process: resolveAssetSource }, tabBarItemBadgeTextColor: _mod26.colorAttribute, tabBarItemBadgeBackgroundColor: _mod26.colorAttribute, standardAppearance: true, scrollEdgeAppearance: true, iconType: true, iconImageSource: null, iconResourceName: true, selectedIconImageSource: null, selectedIconResourceName: true, systemItem: true, specialEffects: true, overrideScrollViewContentInsetAdjustmentBehavior: true, bottomScrollEdgeEffect: true, leftScrollEdgeEffect: true, rightScrollEdgeEffect: true, topScrollEdgeEffect: true, userInterfaceStyle: true };
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
__INTERNAL_VIEW_CONFIG.iconImageSource = { process: resolveAssetSource };
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
__INTERNAL_VIEW_CONFIG.selectedIconImageSource = { process: resolveAssetSource };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onLifecycleStateChange: true, onWillAppear: true, onDidAppear: true, onWillDisappear: true, onDidDisappear: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = __INTERNAL_VIEW_CONFIG;

export default module_65.get("RNSTabsScreen", () => obj);
export { __INTERNAL_VIEW_CONFIG };
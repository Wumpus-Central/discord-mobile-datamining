// _runtime/metro/04957__.js
import _mod17 from "00017__.js";
import _mod26 from "00026__.js";
import resolveAssetSource from "../00081_resolveAssetSource.js";
import weakSet from "../00106_weakSet.js";
import 00065__ from "00065__.js";

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
// === Module 4862: __INTERNAL_VIEW_CONFIG ===

// Module 4862 (__INTERNAL_VIEW_CONFIG)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import result from "result" /* 26 */;
import resolveAssetSource from "resolveAssetSource" /* 81 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const codegenNativeComponent = get_ActivityIndicator.codegenNativeComponent;
let obj = { uiViewClassName: "RNSTabsScreen", directEventTypes: { topLifecycleStateChange: { registrationName: "onLifecycleStateChange" }, topWillAppear: { registrationName: "onWillAppear" }, topDidAppear: { registrationName: "onDidAppear" }, topWillDisappear: { registrationName: "onWillDisappear" }, topDidDisappear: { registrationName: "onDidDisappear" } }, validAttributes: null };
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
obj = { isFocused: true, tabKey: true, title: true, isTitleUndefined: true, badgeValue: true, tabBarItemTestID: true, tabBarItemAccessibilityLabel: true, orientation: true, drawableIconResourceName: true, imageIconResource: { process: resolveAssetSource }, tabBarItemBadgeTextColor: result.colorAttribute, tabBarItemBadgeBackgroundColor: result.colorAttribute, standardAppearance: true, scrollEdgeAppearance: true, iconType: true, iconImageSource: null, iconResourceName: true, selectedIconImageSource: null, selectedIconResourceName: true, systemItem: true, specialEffects: true, overrideScrollViewContentInsetAdjustmentBehavior: true, bottomScrollEdgeEffect: true, leftScrollEdgeEffect: true, rightScrollEdgeEffect: true, topScrollEdgeEffect: true, userInterfaceStyle: true };
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
obj[15] = { process: resolveAssetSource };
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
obj[17] = { process: resolveAssetSource };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onLifecycleStateChange: true, onWillAppear: true, onDidAppear: true, onWillDisappear: true, onDidDisappear: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RNSTabsScreen", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
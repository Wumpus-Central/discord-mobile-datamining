// _runtime/metro/04646___INTERNAL_VIEW_CONFIG.js
import { codegenNativeComponent } from "get ActivityIndicator";
import resolveAssetSource from "resolveAssetSource";
import resolveAssetSource from "resolveAssetSource";
import resolveAssetSource from "resolveAssetSource";
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "RNSTabsScreen", directEventTypes: { topLifecycleStateChange: { registrationName: "onLifecycleStateChange" }, topWillAppear: { registrationName: "onWillAppear" }, topDidAppear: { registrationName: "onDidAppear" }, topWillDisappear: { registrationName: "onWillDisappear" }, topDidDisappear: { registrationName: "onDidDisappear" } }, validAttributes: null };
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
obj = { isFocused: true, tabKey: true, title: true, isTitleUndefined: true, badgeValue: true, tabBarItemTestID: true, tabBarItemAccessibilityLabel: true, orientation: true, drawableIconResourceName: true, imageIconResource: { process: resolveAssetSource }, tabBarItemBadgeTextColor: require("result").colorAttribute, tabBarItemBadgeBackgroundColor: require("result").colorAttribute, standardAppearance: true, scrollEdgeAppearance: true, iconType: true, iconImageSource: null, iconResourceName: true, selectedIconImageSource: null, selectedIconResourceName: true, systemItem: true, specialEffects: true, overrideScrollViewContentInsetAdjustmentBehavior: true, bottomScrollEdgeEffect: true, leftScrollEdgeEffect: true, rightScrollEdgeEffect: true, topScrollEdgeEffect: true, userInterfaceStyle: true };
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
// _runtime/metro/04731___INTERNAL_VIEW_CONFIG.js
import { codegenNativeComponent } from "get ActivityIndicator";
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "RNSScreenStackHeaderConfig", directEventTypes: { topAttached: { registrationName: "onAttached" }, topDetached: { registrationName: "onDetached" }, topPressHeaderBarButtonItem: { registrationName: "onPressHeaderBarButtonItem" }, topPressHeaderBarButtonMenuItem: { registrationName: "onPressHeaderBarButtonMenuItem" } }, validAttributes: null };
obj = { backgroundColor: require("result").colorAttribute, backTitle: true, backTitleFontFamily: true, backTitleFontSize: true, backTitleVisible: true, color: require("result").colorAttribute, direction: true, hidden: true, hideShadow: true, largeTitle: true, largeTitleFontFamily: true, largeTitleFontSize: true, largeTitleFontWeight: true, largeTitleBackgroundColor: require("result").colorAttribute, largeTitleHideShadow: true, largeTitleColor: require("result").colorAttribute, translucent: true, title: true, titleFontFamily: true, titleFontSize: true, titleFontWeight: true, titleColor: require("result").colorAttribute, disableBackButtonMenu: true, backButtonDisplayMode: true, hideBackButton: true, backButtonInCustomView: true, blurEffect: true, topInsetEnabled: true, consumeLeftInset: true, consumeRightInset: true, consumeBottomInset: true, headerLeftBarButtonItems: true, headerRightBarButtonItems: true, synchronousShadowStateUpdatesEnabled: true, userInterfaceStyle: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onAttached: true, onDetached: true, onPressHeaderBarButtonItem: true, onPressHeaderBarButtonMenuItem: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RNSScreenStackHeaderConfig", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
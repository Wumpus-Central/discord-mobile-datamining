// _runtime/metro/05751__.js
import react_native from "../00017_react-native.js";
import _mod26 from "00026__.js";
import DynamicallyInjectedByGestureHandler from "../00106_DynamicallyInjectedByGestureHandler.js";
import 00065__ from "00065__.js";

let obj2;
const codegenNativeComponent = react_native.codegenNativeComponent;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNSScreenStackHeaderConfig", directEventTypes: { topAttached: { registrationName: "onAttached" }, topDetached: { registrationName: "onDetached" }, topPressHeaderBarButtonItem: { registrationName: "onPressHeaderBarButtonItem" }, topPressHeaderBarButtonMenuItem: { registrationName: "onPressHeaderBarButtonMenuItem" } }, validAttributes: obj2 };
obj2 = { backgroundColor: _mod26.colorAttribute, backTitle: true, backTitleFontFamily: true, backTitleFontSize: true, backTitleVisible: true, color: _mod26.colorAttribute, direction: true, hidden: true, hideShadow: true, largeTitle: true, largeTitleFontFamily: true, largeTitleFontSize: true, largeTitleFontWeight: true, largeTitleBackgroundColor: _mod26.colorAttribute, largeTitleHideShadow: true, largeTitleColor: _mod26.colorAttribute, translucent: true, title: true, titleFontFamily: true, titleFontSize: true, titleFontWeight: true, titleColor: _mod26.colorAttribute, disableBackButtonMenu: true, backButtonDisplayMode: true, hideBackButton: true, backButtonInCustomView: true, blurEffect: true, topInsetEnabled: true, headerLeftBarButtonItems: true, headerRightBarButtonItems: true, synchronousShadowStateUpdatesEnabled: true, userInterfaceStyle: true, consumeTopInset: true, consumeLeftInset: true, consumeRightInset: true, consumeBottomInset: true, legacyTopInsetBehavior: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onAttached: true, onDetached: true, onPressHeaderBarButtonItem: true, onPressHeaderBarButtonMenuItem: true }));

export default module_65.get("RNSScreenStackHeaderConfig", () => obj);
export { __INTERNAL_VIEW_CONFIG };
// === Module 4694: __INTERNAL_VIEW_CONFIG ===

// Module 4694 (__INTERNAL_VIEW_CONFIG)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import result from "result" /* 26 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const codegenNativeComponent = get_ActivityIndicator.codegenNativeComponent;
let obj = { uiViewClassName: "RNSScreenStackHeaderConfig", directEventTypes: { topAttached: { registrationName: "onAttached" }, topDetached: { registrationName: "onDetached" }, topPressHeaderBarButtonItem: { registrationName: "onPressHeaderBarButtonItem" }, topPressHeaderBarButtonMenuItem: { registrationName: "onPressHeaderBarButtonMenuItem" } }, validAttributes: null };
obj = { backgroundColor: result.colorAttribute, backTitle: true, backTitleFontFamily: true, backTitleFontSize: true, backTitleVisible: true, color: result.colorAttribute, direction: true, hidden: true, hideShadow: true, largeTitle: true, largeTitleFontFamily: true, largeTitleFontSize: true, largeTitleFontWeight: true, largeTitleBackgroundColor: result.colorAttribute, largeTitleHideShadow: true, largeTitleColor: result.colorAttribute, translucent: true, title: true, titleFontFamily: true, titleFontSize: true, titleFontWeight: true, titleColor: result.colorAttribute, disableBackButtonMenu: true, backButtonDisplayMode: true, hideBackButton: true, backButtonInCustomView: true, blurEffect: true, topInsetEnabled: true, consumeLeftInset: true, consumeRightInset: true, consumeBottomInset: true, headerLeftBarButtonItems: true, headerRightBarButtonItems: true, synchronousShadowStateUpdatesEnabled: true, userInterfaceStyle: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onAttached: true, onDetached: true, onPressHeaderBarButtonItem: true, onPressHeaderBarButtonMenuItem: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RNSScreenStackHeaderConfig", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
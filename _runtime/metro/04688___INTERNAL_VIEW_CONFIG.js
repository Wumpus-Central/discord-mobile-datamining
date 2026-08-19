// _runtime/metro/04688___INTERNAL_VIEW_CONFIG.js
import get_ActivityIndicator from "../00017_get_ActivityIndicator.js";
import result from "../00026_result.js";
import weakSet from "../00106_weakSet.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

const codegenNativeComponent = get_ActivityIndicator.codegenNativeComponent;
const obj = { backgroundColor: result.colorAttribute, backTitle: true, backTitleFontFamily: true, backTitleFontSize: true, backTitleVisible: true, color: result.colorAttribute, direction: true, hidden: true, hideShadow: true, largeTitle: true, largeTitleFontFamily: true, largeTitleFontSize: true, largeTitleFontWeight: true, largeTitleBackgroundColor: result.colorAttribute, largeTitleHideShadow: true, largeTitleColor: result.colorAttribute, translucent: true, title: true, titleFontFamily: true, titleFontSize: true, titleFontWeight: true, titleColor: result.colorAttribute, disableBackButtonMenu: true, backButtonDisplayMode: true, hideBackButton: true, backButtonInCustomView: true, blurEffect: true, topInsetEnabled: true, consumeLeftInset: true, consumeRightInset: true, consumeBottomInset: true, headerLeftBarButtonItems: true, headerRightBarButtonItems: true, synchronousShadowStateUpdatesEnabled: true, userInterfaceStyle: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onAttached: true, onDetached: true, onPressHeaderBarButtonItem: true, onPressHeaderBarButtonMenuItem: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RNSScreenStackHeaderConfig", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
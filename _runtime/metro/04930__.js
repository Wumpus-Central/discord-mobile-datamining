// === Module 4930: ? ===

// Module 4930
import _mod17 from "module_17" /* 17 */;
import _mod26 from "module_26" /* 26 */;
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;

const codegenNativeComponent = _mod17.codegenNativeComponent;
let __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNSScreenStackHeaderConfig", directEventTypes: { topAttached: { registrationName: "onAttached" }, topDetached: { registrationName: "onDetached" }, topPressHeaderBarButtonItem: { registrationName: "onPressHeaderBarButtonItem" }, topPressHeaderBarButtonMenuItem: { registrationName: "onPressHeaderBarButtonMenuItem" } }, validAttributes: null };
__INTERNAL_VIEW_CONFIG = { backgroundColor: _mod26.colorAttribute, backTitle: true, backTitleFontFamily: true, backTitleFontSize: true, backTitleVisible: true, color: _mod26.colorAttribute, direction: true, hidden: true, hideShadow: true, largeTitle: true, largeTitleFontFamily: true, largeTitleFontSize: true, largeTitleFontWeight: true, largeTitleBackgroundColor: _mod26.colorAttribute, largeTitleHideShadow: true, largeTitleColor: _mod26.colorAttribute, translucent: true, title: true, titleFontFamily: true, titleFontSize: true, titleFontWeight: true, titleColor: _mod26.colorAttribute, disableBackButtonMenu: true, backButtonDisplayMode: true, hideBackButton: true, backButtonInCustomView: true, blurEffect: true, topInsetEnabled: true, consumeLeftInset: true, consumeRightInset: true, consumeBottomInset: true, headerLeftBarButtonItems: true, headerRightBarButtonItems: true, synchronousShadowStateUpdatesEnabled: true, userInterfaceStyle: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onAttached: true, onDetached: true, onPressHeaderBarButtonItem: true, onPressHeaderBarButtonMenuItem: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = __INTERNAL_VIEW_CONFIG;

export default module_65.get("RNSScreenStackHeaderConfig", () => obj);
export { __INTERNAL_VIEW_CONFIG };
// === Module 4791: __INTERNAL_VIEW_CONFIG ===

// Module 4791 (__INTERNAL_VIEW_CONFIG)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import result from "result" /* 26 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const codegenNativeComponent = get_ActivityIndicator.codegenNativeComponent;
let obj = { uiViewClassName: "RNSTabsHost", directEventTypes: { topNativeFocusChange: { registrationName: "onNativeFocusChange" } }, validAttributes: null };
obj = { tabBarHidden: true, nativeContainerBackgroundColor: result.colorAttribute, tabBarBackgroundColor: result.colorAttribute, tabBarItemTitleFontFamily: true, tabBarItemTitleFontSize: true, tabBarItemTitleFontSizeActive: true, tabBarItemTitleFontWeight: true, tabBarItemTitleFontStyle: true, tabBarItemTitleFontColor: result.colorAttribute, tabBarItemTitleFontColorActive: result.colorAttribute, tabBarItemIconColor: result.colorAttribute, tabBarItemIconColorActive: result.colorAttribute, tabBarItemActiveIndicatorColor: result.colorAttribute, tabBarItemActiveIndicatorEnabled: true, tabBarItemRippleColor: result.colorAttribute, tabBarItemLabelVisibilityMode: true, tabBarTintColor: result.colorAttribute, tabBarMinimizeBehavior: true, tabBarControllerMode: true, controlNavigationStateInJS: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onNativeFocusChange: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RNSTabsHost", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
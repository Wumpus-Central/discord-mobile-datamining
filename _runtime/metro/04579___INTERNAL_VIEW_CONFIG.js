// === Module 4579: __INTERNAL_VIEW_CONFIG ===

// Module 4579 (__INTERNAL_VIEW_CONFIG)
import { codegenNativeComponent } from "get ActivityIndicator";
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "RNSTabsHost", directEventTypes: { topNativeFocusChange: { registrationName: "onNativeFocusChange" } }, validAttributes: null };
obj = { tabBarHidden: true, nativeContainerBackgroundColor: require("result").colorAttribute, tabBarBackgroundColor: require("result").colorAttribute, tabBarItemTitleFontFamily: true, tabBarItemTitleFontSize: true, tabBarItemTitleFontSizeActive: true, tabBarItemTitleFontWeight: true, tabBarItemTitleFontStyle: true, tabBarItemTitleFontColor: require("result").colorAttribute, tabBarItemTitleFontColorActive: require("result").colorAttribute, tabBarItemIconColor: require("result").colorAttribute, tabBarItemIconColorActive: require("result").colorAttribute, tabBarItemActiveIndicatorColor: require("result").colorAttribute, tabBarItemActiveIndicatorEnabled: true, tabBarItemRippleColor: require("result").colorAttribute, tabBarItemLabelVisibilityMode: true, tabBarTintColor: require("result").colorAttribute, tabBarMinimizeBehavior: true, tabBarControllerMode: true, controlNavigationStateInJS: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onNativeFocusChange: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RNSTabsHost", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
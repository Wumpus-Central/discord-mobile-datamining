// _runtime/metro/04869___INTERNAL_VIEW_CONFIG.js
import get_ActivityIndicator from "../00017_get_ActivityIndicator.js";
import result from "../00026_result.js";
import weakSet from "../00106_weakSet.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

const codegenNativeComponent = get_ActivityIndicator.codegenNativeComponent;
let obj = { uiViewClassName: "RNSTabsHost", directEventTypes: { topNativeFocusChange: { registrationName: "onNativeFocusChange" } }, validAttributes: null };
obj = { tabBarHidden: true, nativeContainerBackgroundColor: result.colorAttribute, tabBarBackgroundColor: result.colorAttribute, tabBarItemTitleFontFamily: true, tabBarItemTitleFontSize: true, tabBarItemTitleFontSizeActive: true, tabBarItemTitleFontWeight: true, tabBarItemTitleFontStyle: true, tabBarItemTitleFontColor: result.colorAttribute, tabBarItemTitleFontColorActive: result.colorAttribute, tabBarItemIconColor: result.colorAttribute, tabBarItemIconColorActive: result.colorAttribute, tabBarItemActiveIndicatorColor: result.colorAttribute, tabBarItemActiveIndicatorEnabled: true, tabBarItemRippleColor: result.colorAttribute, tabBarItemLabelVisibilityMode: true, tabBarTintColor: result.colorAttribute, tabBarMinimizeBehavior: true, tabBarControllerMode: true, controlNavigationStateInJS: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onNativeFocusChange: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RNSTabsHost", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
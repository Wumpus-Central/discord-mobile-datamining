// === Module 5725: ? ===

// Module 5725
import react_native from "react-native" /* 17 */;
import _mod26 from "module_26" /* 26 */;
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;

let obj2;
const codegenNativeComponent = react_native.codegenNativeComponent;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNSTabsHostAndroid", directEventTypes: { topTabSelected: { registrationName: "onTabSelected" }, topTabSelectionRejected: { registrationName: "onTabSelectionRejected" }, topTabSelectionPrevented: { registrationName: "onTabSelectionPrevented" } }, validAttributes: obj2 };
obj2 = { navStateRequest: true, rejectStaleNavStateUpdates: true, tabBarHidden: true, nativeContainerBackgroundColor: _mod26.colorAttribute, colorScheme: true, tabBarRespectsIMEInsets: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onTabSelected: true, onTabSelectionRejected: true, onTabSelectionPrevented: true }));

export default module_65.get("RNSTabsHostAndroid", () => obj);
export { __INTERNAL_VIEW_CONFIG };
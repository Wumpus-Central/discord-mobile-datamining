// _runtime/metro/05732__.js
import react_native from "../00017_react-native.js";
import _mod26 from "00026__.js";
import DynamicallyInjectedByGestureHandler from "../00106_DynamicallyInjectedByGestureHandler.js";
import 00065__ from "00065__.js";

let obj2;
const codegenNativeComponent = react_native.codegenNativeComponent;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNSTabsHostAndroid", directEventTypes: { topTabSelected: { registrationName: "onTabSelected" }, topTabSelectionRejected: { registrationName: "onTabSelectionRejected" }, topTabSelectionPrevented: { registrationName: "onTabSelectionPrevented" } }, validAttributes: obj2 };
obj2 = { navStateRequest: true, rejectStaleNavStateUpdates: true, tabBarHidden: true, nativeContainerBackgroundColor: _mod26.colorAttribute, colorScheme: true, tabBarRespectsIMEInsets: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onTabSelected: true, onTabSelectionRejected: true, onTabSelectionPrevented: true }));

export default module_65.get("RNSTabsHostAndroid", () => obj);
export { __INTERNAL_VIEW_CONFIG };
// _runtime/metro/04967__.js
import _mod17 from "00017__.js";
import _mod26 from "00026__.js";
import weakSet from "../00106_weakSet.js";
import 00065__ from "00065__.js";

const codegenNativeComponent = _mod17.codegenNativeComponent;
let __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNSTabsHostAndroid", directEventTypes: { topTabSelected: { registrationName: "onTabSelected" }, topTabSelectionRejected: { registrationName: "onTabSelectionRejected" }, topTabSelectionPrevented: { registrationName: "onTabSelectionPrevented" } }, validAttributes: null };
__INTERNAL_VIEW_CONFIG = { navStateRequest: true, rejectStaleNavStateUpdates: true, tabBarHidden: true, nativeContainerBackgroundColor: _mod26.colorAttribute, colorScheme: true, tabBarRespectsIMEInsets: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onTabSelected: true, onTabSelectionRejected: true, onTabSelectionPrevented: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = __INTERNAL_VIEW_CONFIG;

export default module_65.get("RNSTabsHostAndroid", () => obj);
export { __INTERNAL_VIEW_CONFIG };
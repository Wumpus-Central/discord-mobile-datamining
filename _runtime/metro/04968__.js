// === Module 4968: ? ===

// Module 4968
import _mod17 from "module_17" /* 17 */;
import _mod26 from "module_26" /* 26 */;
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;

const codegenNativeComponent = _mod17.codegenNativeComponent;
let __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNSTabsHostAndroid", directEventTypes: { topTabSelected: { registrationName: "onTabSelected" }, topTabSelectionRejected: { registrationName: "onTabSelectionRejected" }, topTabSelectionPrevented: { registrationName: "onTabSelectionPrevented" } }, validAttributes: null };
__INTERNAL_VIEW_CONFIG = { navStateRequest: true, rejectStaleNavStateUpdates: true, tabBarHidden: true, nativeContainerBackgroundColor: _mod26.colorAttribute, colorScheme: true, tabBarRespectsIMEInsets: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onTabSelected: true, onTabSelectionRejected: true, onTabSelectionPrevented: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = __INTERNAL_VIEW_CONFIG;

export default module_65.get("RNSTabsHostAndroid", () => obj);
export { __INTERNAL_VIEW_CONFIG };
// === Module 310: ? ===

// Module 310
import _mod26 from "module_26" /* 26 */;
import renderElement from "renderElement" /* 114 */;
import react from "react" /* 19 */;
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "AndroidDrawerLayout", directEventTypes: { topDrawerSlide: { registrationName: "onDrawerSlide" }, topDrawerStateChanged: { registrationName: "onDrawerStateChanged" }, topDrawerOpen: { registrationName: "onDrawerOpen" }, topDrawerClose: { registrationName: "onDrawerClose" } }, validAttributes: obj2 };
obj2 = { keyboardDismissMode: true, drawerBackgroundColor: _mod26.colorAttribute, drawerPosition: true, drawerWidth: true, drawerLockMode: true, statusBarBackgroundColor: _mod26.colorAttribute };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onDrawerSlide: true, onDrawerStateChanged: true, onDrawerOpen: true, onDrawerClose: true }));
const obj3 = {
  openDrawer(nodeFromPublicInstance) {
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "openDrawer", []);
  },
  closeDrawer(nodeFromPublicInstance) {
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "closeDrawer", []);
  }
};

export default module_65.get("AndroidDrawerLayout", () => obj);
export { __INTERNAL_VIEW_CONFIG };
export const Commands = obj3;
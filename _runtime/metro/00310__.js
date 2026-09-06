// === Module 310: ? ===

// Module 310
import renderElement from "renderElement" /* 114 */;
import noop from "module_19" /* 19 */;

require = fn;
let Commands = { uiViewClassName: "AndroidDrawerLayout", directEventTypes: { topDrawerSlide: { registrationName: "onDrawerSlide" }, topDrawerStateChanged: { registrationName: "onDrawerStateChanged" }, topDrawerOpen: { registrationName: "onDrawerOpen" }, topDrawerClose: { registrationName: "onDrawerClose" } }, validAttributes: null };
Commands = { keyboardDismissMode: true, drawerBackgroundColor: fn(26).colorAttribute, drawerPosition: true, drawerWidth: true, drawerLockMode: true, statusBarBackgroundColor: fn(26).colorAttribute };
const weakSet = fn(106);
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onDrawerSlide: true, onDrawerStateChanged: true, onDrawerOpen: true, onDrawerClose: true }));
Commands.validAttributes = Commands;
const module_65 = fn(65);
Commands = {
  openDrawer(arg0) {
    renderElement.dispatchCommand(arg0, "openDrawer", []);
  },
  closeDrawer(arg0) {
    renderElement.dispatchCommand(arg0, "closeDrawer", []);
  }
};

export default module_65.get("AndroidDrawerLayout", () => obj);
export const __INTERNAL_VIEW_CONFIG = Commands;
export { Commands };
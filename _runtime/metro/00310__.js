// _runtime/metro/00310__.js
import renderElement from "../00114_renderElement.js";
import noop from "00019__.js";

require = fn;
const __INTERNAL_VIEW_CONFIG = {
  uiViewClassName: "AndroidDrawerLayout",
  directEventTypes: {
    topDrawerSlide: { registrationName: "onDrawerSlide" },
    topDrawerStateChanged: { registrationName: "onDrawerStateChanged" },
    topDrawerOpen: { registrationName: "onDrawerOpen" },
    topDrawerClose: { registrationName: "onDrawerClose" },
  },
  validAttributes: null,
};
const weakSet = fn(106);
const merged = Object.assign(
  weakSet.ConditionallyIgnoredEventHandlers({
    onDrawerSlide: true,
    onDrawerStateChanged: true,
    onDrawerOpen: true,
    onDrawerClose: true,
  }),
);
__INTERNAL_VIEW_CONFIG.validAttributes = {
  keyboardDismissMode: true,
  drawerBackgroundColor: fn(26).colorAttribute,
  drawerPosition: true,
  drawerWidth: true,
  drawerLockMode: true,
  statusBarBackgroundColor: fn(26).colorAttribute,
};
const module_65 = fn(65);

export default module_65.get("AndroidDrawerLayout", () => obj);
export { __INTERNAL_VIEW_CONFIG };
export const Commands = {
  openDrawer(arg0) {
    renderElement.dispatchCommand(arg0, "openDrawer", []);
  },
  closeDrawer(arg0) {
    renderElement.dispatchCommand(arg0, "closeDrawer", []);
  },
};

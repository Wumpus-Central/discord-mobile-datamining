// _runtime/metro/00310__.js
import _mod26 from "00026__.js";
import renderElement from "../00114_renderElement.js";
import react from "../00019_react.js";
import DynamicallyInjectedByGestureHandler from "../00106_DynamicallyInjectedByGestureHandler.js";
import 00065__ from "00065__.js";

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
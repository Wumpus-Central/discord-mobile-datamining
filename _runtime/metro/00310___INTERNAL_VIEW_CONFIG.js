// _runtime/metro/00310___INTERNAL_VIEW_CONFIG.js
import "noop";
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";
import { renderElement } from "../00114_renderElement.js";

const require = arg1;
let obj = { uiViewClassName: "AndroidDrawerLayout", directEventTypes: { topDrawerSlide: { registrationName: "onDrawerSlide" }, topDrawerStateChanged: { registrationName: "onDrawerStateChanged" }, topDrawerOpen: { registrationName: "onDrawerOpen" }, topDrawerClose: { registrationName: "onDrawerClose" } }, validAttributes: null };
obj = { keyboardDismissMode: true, drawerBackgroundColor: require("result").colorAttribute, drawerPosition: true, drawerWidth: true, drawerLockMode: true, statusBarBackgroundColor: require("result").colorAttribute };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onDrawerSlide: true, onDrawerStateChanged: true, onDrawerOpen: true, onDrawerClose: true }));
obj[2] = obj;
obj = {
  openDrawer(arg0) {
    renderElement.dispatchCommand(arg0, "openDrawer", []);
  },
  closeDrawer(arg0) {
    renderElement.dispatchCommand(arg0, "closeDrawer", []);
  }
};

export default setRuntimeConfigProvider.get("AndroidDrawerLayout", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;
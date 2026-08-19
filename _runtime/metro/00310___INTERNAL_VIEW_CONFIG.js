// _runtime/metro/00310___INTERNAL_VIEW_CONFIG.js
import noopAll from "../00019_noop.js";
import renderElement from "../00114_renderElement.js";
import weakSet from "../00106_weakSet.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

require = fn;
noopAll;
let obj = { keyboardDismissMode: true, drawerBackgroundColor: require("result").colorAttribute, drawerPosition: true, drawerWidth: true, drawerLockMode: true, statusBarBackgroundColor: require("result").colorAttribute };
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
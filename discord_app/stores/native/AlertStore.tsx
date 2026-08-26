// === Module 11177: getAlert ===

// Module 11177 (getAlert)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let c0 = null;
let c1 = -1;
let c2 = null;
const Store = initializeDefault.Store;
class AlertStore extends Store {
}
const prototype = AlertStore.prototype;
prototype["getAlert"] = function getAlert() {
  return c0;
};
prototype["getAlertKey"] = function getAlertKey() {
  return "alert-store-" + c1;
};
prototype["isAlertDismissable"] = function isAlertDismissable() {
  return c2;
};
AlertStore.displayName = "AlertStore";
const alertStore = new AlertStore(dispatcherDefault, {
  ALERT_OPEN: function handleOpen(arg0) {
    closure_1 = closure_1 + 1;
    ({ alert: c0, isDismissable: c2 } = arg0);
  },
  ALERT_CLOSE: function handleClose() {
    c0 = null;
    c2 = null;
  }
});
const result = require("set").fileFinishedImporting("stores/native/AlertStore.tsx");

export default alertStore;
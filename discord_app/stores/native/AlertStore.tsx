// === Module 11545: AlertStore ===

// Module 11545 (AlertStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let c0 = null;
let closure_1 = -1;
let c2 = null;
const Store = initializeDefault.Store;
class AlertStore extends Store {
}
const prototype = AlertStore.prototype;
prototype["getAlert"] = function getAlert() {
  return c0;
};
prototype["getAlertKey"] = function getAlertKey() {
  return "alert-store-" + closure_1;
};
prototype["isAlertDismissable"] = function isAlertDismissable() {
  return c2;
};
AlertStore.displayName = "AlertStore";
const alertStore = new AlertStore(DispatcherDefault, {
  ALERT_OPEN: function handleOpen(arg0) {
    closure_1 = closure_1 + 1;
    ({ alert: c0, isDismissable: c2 } = arg0);
  },
  ALERT_CLOSE: function handleClose() {
    c0 = null;
    c2 = null;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/native/AlertStore.tsx");

export default alertStore;
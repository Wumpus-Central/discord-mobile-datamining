// === Module 11175: AlertStore ===

// Module 11175 (AlertStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let c0 = null;
let closure_1 = -1;
let c2 = null;
const Store = get_initializedDefault.Store;
class AlertStore extends Store {
  getAlert() {
    return c0;
  }
  getAlertKey() {
    return "alert-store-" + closure_1;
  }
  isAlertDismissable() {
    return c2;
  }
}
const prototype = AlertStore.prototype;
AlertStore.displayName = "AlertStore";
const obj = {
  ALERT_OPEN: function handleOpen(arg0) {
    closure_1 = closure_1 + 1;
    ({ alert: c0, isDismissable: c2 } = arg0);
  },
  ALERT_CLOSE: function handleClose() {
    c0 = null;
    c2 = null;
  }
};
const alertStore = new AlertStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/native/AlertStore.tsx");

export default alertStore;
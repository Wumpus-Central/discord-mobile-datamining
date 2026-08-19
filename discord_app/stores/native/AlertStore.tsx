// discord_app/stores/native/AlertStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";

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
const result = require("obj132").fileFinishedImporting("stores/native/AlertStore.tsx");

export default alertStore;
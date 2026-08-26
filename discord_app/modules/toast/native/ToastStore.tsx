// === Module 16383: ToastStore ===

// Module 16383 (ToastStore)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let c0 = null;
const Store = initializeDefault.Store;
class ToastStore extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.getContent = function getContent() {
      return closure_0;
    };
    return applyArgumentsResult;
  }
}
ToastStore.displayName = "ToastStore";
const toastStore = new ToastStore(dispatcherDefault, {
  TOAST_OPEN: function handleOpen(toastProps) {
    toastProps = toastProps.toastProps;
    let key;
    if (toastProps != null) {
      key = toastProps.key;
    }
    if (key === toastProps.key) {
      return false;
    }
  },
  TOAST_CLOSE: function handleClose() {
    c0 = null;
  }
});
const result = require("set").fileFinishedImporting("modules/toast/native/ToastStore.tsx");

export default toastStore;
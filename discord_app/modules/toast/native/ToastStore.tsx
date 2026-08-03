// === Module 15867: ToastStore ===

// Module 15867 (ToastStore)
import { Store } from "initialize";

let c0 = null;
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
const toastStore = new ToastStore(require("dispatcher"), {
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
    let c0 = null;
  }
});
const result = require("set").fileFinishedImporting("modules/toast/native/ToastStore.tsx");

export default toastStore;
// === Module 16955: ToastStore ===

// Module 16955 (ToastStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let c0 = null;
const Store = initializeDefault.Store;
class ToastStore extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.getContent = function getContent() {
      return _null;
    };
    return applyArgumentsResult;
  }
}
ToastStore.displayName = "ToastStore";
const toastStore = new ToastStore(DispatcherDefault, {
  TOAST_OPEN: function handleOpen(toastProps) {
    toastProps = toastProps.toastProps;
    let key;
    if (_null != null) {
      key = _null.key;
    }
    if (key === toastProps.key) {
      return false;
    } else {
      _null = toastProps;
    }
  },
  TOAST_CLOSE: function handleClose() {
    c0 = null;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/toast/native/ToastStore.tsx");

export default toastStore;
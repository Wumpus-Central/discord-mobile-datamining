// === Module 4455: ToastActionCreators ===

// Module 4455 (ToastActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/toast/native/ToastActionCreators.tsx");

export default {
  open(toastProps) {
    importDefault = toastProps;
    DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "TOAST_OPEN", toastProps }));
  },
  close() {
    DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "TOAST_CLOSE" }));
  }
};
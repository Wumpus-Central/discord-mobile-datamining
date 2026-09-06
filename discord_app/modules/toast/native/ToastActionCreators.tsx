// === Module 4259: ToastActionCreators ===

// Module 4259 (ToastActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/toast/native/ToastActionCreators.tsx");

export default {
  open(toastProps) {
    importDefault = toastProps;
    DispatcherDefault.wait(() => {
      const obj = { type: "TOAST_OPEN", toastProps };
      return obj.dispatch(obj);
    });
  },
  close() {
    DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "TOAST_CLOSE" }));
  }
};
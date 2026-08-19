// === Module 4094: dispatcher ===

// Module 4094 (dispatcher)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/toast/native/ToastActionCreators.tsx");

export default {
  open(arg0) {
    importDefault = arg0;
    dispatcherDefault.wait(() => {
      callback(dependencyMap[0]);
      const obj = { type: "TOAST_OPEN", toastProps: callback };
      return obj.dispatch(obj);
    });
  },
  close() {
    dispatcherDefault.wait(() => callback(table[0]).dispatch({ type: "TOAST_CLOSE" }));
  }
};
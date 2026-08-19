// === Module 4094: dispatcher ===

// Module 4094 (dispatcher)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/toast/native/ToastActionCreators.tsx");

export default {
  open(arg0) {
    importDefault = arg0;
    dispatcherDefault.wait(() => {
      let obj = callback(closure_1_1[0]);
      obj = { type: "TOAST_OPEN", toastProps: callback };
      return obj.dispatch(obj);
    });
  },
  close() {
    dispatcherDefault.wait(() => callback(table[0]).dispatch({ type: "TOAST_CLOSE" }));
  }
};
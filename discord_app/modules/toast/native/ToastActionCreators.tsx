// discord_app/modules/toast/native/ToastActionCreators.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import dispatcherDefault from "../../../Dispatcher.tsx";

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
// discord_app/modules/toast/native/ToastActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  },
};

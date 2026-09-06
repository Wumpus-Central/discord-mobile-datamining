// discord_app/actions/PermissionActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("actions/PermissionActionCreators.tsx");

export default {
  clearVADWarning() {
    DispatcherDefault.dispatch({ type: "PERMISSION_CLEAR_VAD_WARNING" });
  },
  clearSuppressWarning() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    DispatcherDefault.dispatch({ type: "PERMISSION_CLEAR_SUPPRESS_WARNING", forever: flag });
  },
  clearPTTAdminWarning() {
    DispatcherDefault.dispatch({ type: "PERMISSION_CLEAR_PTT_ADMIN_WARNING" });
  },
  requestElevatedProcess(pid) {
    const obj = { type: "PERMISSION_REQUEST_ELEVATED_PROCESS", pid };
    obj.dispatch(obj);
  },
  clearElevatedProcess() {
    DispatcherDefault.dispatch({ type: "PERMISSION_CLEAR_ELEVATED_PROCESS" });
  },
  continueNonelevatedProcess(pid) {
    const obj = { type: "PERMISSION_CONTINUE_NONELEVATED_PROCESS", pid };
    obj.dispatch(obj);
  },
};

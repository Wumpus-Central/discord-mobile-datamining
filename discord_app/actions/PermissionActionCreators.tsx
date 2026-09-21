// === Module 17387: PermissionActionCreators ===

// Module 17387 (PermissionActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

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
    DispatcherDefault.dispatch({ type: "PERMISSION_REQUEST_ELEVATED_PROCESS", pid });
  },
  clearElevatedProcess() {
    DispatcherDefault.dispatch({ type: "PERMISSION_CLEAR_ELEVATED_PROCESS" });
  },
  continueNonelevatedProcess(pid) {
    DispatcherDefault.dispatch({ type: "PERMISSION_CONTINUE_NONELEVATED_PROCESS", pid });
  }
};
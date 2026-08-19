// === Module 16134: dispatcher ===

// Module 16134 (dispatcher)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("actions/PermissionActionCreators.tsx");

export default {
  clearVADWarning() {
    dispatcherDefault.dispatch({ type: "PERMISSION_CLEAR_VAD_WARNING" });
  },
  clearSuppressWarning() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    dispatcherDefault.dispatch({ type: "PERMISSION_CLEAR_SUPPRESS_WARNING", forever: flag });
  },
  clearPTTAdminWarning() {
    dispatcherDefault.dispatch({ type: "PERMISSION_CLEAR_PTT_ADMIN_WARNING" });
  },
  requestElevatedProcess(pid) {
    const obj = { type: "PERMISSION_REQUEST_ELEVATED_PROCESS", pid };
    obj.dispatch(obj);
  },
  clearElevatedProcess() {
    dispatcherDefault.dispatch({ type: "PERMISSION_CLEAR_ELEVATED_PROCESS" });
  },
  continueNonelevatedProcess(pid) {
    const obj = { type: "PERMISSION_CONTINUE_NONELEVATED_PROCESS", pid };
    obj.dispatch(obj);
  }
};
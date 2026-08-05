// discord_app/actions/PermissionActionCreators.tsx
const result = require("set").fileFinishedImporting("actions/PermissionActionCreators.tsx");

export default {
  clearVADWarning() {
    require("../Dispatcher.tsx").dispatch({ type: "PERMISSION_CLEAR_VAD_WARNING" });
  },
  clearSuppressWarning() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    require("../Dispatcher.tsx").dispatch({ type: "PERMISSION_CLEAR_SUPPRESS_WARNING", forever: flag });
  },
  clearPTTAdminWarning() {
    require("../Dispatcher.tsx").dispatch({ type: "PERMISSION_CLEAR_PTT_ADMIN_WARNING" });
  },
  requestElevatedProcess(pid) {
    let obj = require("../Dispatcher.tsx");
    obj = { type: "PERMISSION_REQUEST_ELEVATED_PROCESS", pid };
    obj.dispatch(obj);
  },
  clearElevatedProcess() {
    require("../Dispatcher.tsx").dispatch({ type: "PERMISSION_CLEAR_ELEVATED_PROCESS" });
  },
  continueNonelevatedProcess(pid) {
    let obj = require("../Dispatcher.tsx");
    obj = { type: "PERMISSION_CONTINUE_NONELEVATED_PROCESS", pid };
    obj.dispatch(obj);
  }
};
// discord_app/modules/debug/native/AppCrashedFatalReport.android.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";

const CrashReportingManager = get_ActivityIndicator.NativeModules.CrashReportingManager;
const result = obj132.fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export const init = function init() {
  CrashReportingManager.initializeManager();
};
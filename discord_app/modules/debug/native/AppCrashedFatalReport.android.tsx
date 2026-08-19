// === Module 17142: init ===

// Module 17142 (init)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const CrashReportingManager = get_ActivityIndicator.NativeModules.CrashReportingManager;
const result = obj132.fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export const init = function init() {
  CrashReportingManager.initializeManager();
};
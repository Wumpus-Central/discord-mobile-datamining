// === Module 17926: AppCrashedFatalReport ===

// Module 17926 (AppCrashedFatalReport)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const CrashReportingManager = _mod17.NativeModules.CrashReportingManager;
const result = size.fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export const init = function init() {
  CrashReportingManager.initializeManager();
};
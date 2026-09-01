// discord_app/modules/debug/native/AppCrashedFatalReport.android.tsx
import set from "../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";

const CrashReportingManager = get_ActivityIndicator.NativeModules.CrashReportingManager;
const result = set.fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export const init = function init() {
  CrashReportingManager.initializeManager();
};

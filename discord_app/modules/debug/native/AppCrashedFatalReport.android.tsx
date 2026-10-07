// discord_app/modules/debug/native/AppCrashedFatalReport.android.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import size from "../../../../_runtime/metro/00002__.js";

const CrashReportingManager = _mod17.NativeModules.CrashReportingManager;
const result = size.fileFinishedImporting("modules/debug/native/AppCrashedFatalReport.android.tsx");

export const init = function init() {
  CrashReportingManager.initializeManager();
};

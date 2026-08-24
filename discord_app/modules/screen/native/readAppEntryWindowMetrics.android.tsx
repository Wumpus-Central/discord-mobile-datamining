// discord_app/modules/screen/native/readAppEntryWindowMetrics.android.tsx
import set from "../../../../_runtime/00002_set.js";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceModule.tsx";

const result = set.fileFinishedImporting("modules/screen/native/readAppEntryWindowMetrics.android.tsx");

export const readWindowSizeForAppEntry = function readWindowSizeForAppEntry(appEntryKey) {
  const obj = enforcingDefault;
  let windowSize;
  if (obj != null) {
    windowSize = obj.getWindowSize(appEntryKey);
  }
  return windowSize;
};
export const readScreenSizeForAppEntry = function readScreenSizeForAppEntry(appEntryKey) {
  const obj = enforcingDefault;
  let screenSize;
  if (obj != null) {
    screenSize = obj.getScreenSize(appEntryKey);
  }
  return screenSize;
};
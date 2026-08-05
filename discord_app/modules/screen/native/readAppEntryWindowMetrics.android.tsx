// discord_app/modules/screen/native/readAppEntryWindowMetrics.android.tsx
import { enforcing } from "../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceModule.tsx";
const result = require("set").fileFinishedImporting("modules/screen/native/readAppEntryWindowMetrics.android.tsx");

export const readWindowSizeForAppEntry = function readWindowSizeForAppEntry(appEntryKey) {
  const obj = enforcing;
  let windowSize;
  if (obj != null) {
    windowSize = obj.getWindowSize(appEntryKey);
  }
  return windowSize;
};
export const readScreenSizeForAppEntry = function readScreenSizeForAppEntry(appEntryKey) {
  const obj = enforcing;
  let screenSize;
  if (obj != null) {
    screenSize = obj.getScreenSize(appEntryKey);
  }
  return screenSize;
};
// discord_app/modules/screen/native/readAppEntryWindowMetrics.android.tsx
const result = require("set").fileFinishedImporting("modules/screen/native/readAppEntryWindowMetrics.android.tsx");

export const readWindowSizeForAppEntry = function readWindowSizeForAppEntry(appEntryKey) {
  const obj = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceModule.tsx");
  let windowSize;
  if (obj != null) {
    windowSize = obj.getWindowSize(appEntryKey);
  }
  return windowSize;
};
export const readScreenSizeForAppEntry = function readScreenSizeForAppEntry(appEntryKey) {
  const obj = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceModule.tsx");
  let screenSize;
  if (obj != null) {
    screenSize = obj.getScreenSize(appEntryKey);
  }
  return screenSize;
};
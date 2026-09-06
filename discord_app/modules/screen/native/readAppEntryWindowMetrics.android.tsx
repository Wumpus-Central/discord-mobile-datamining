// === Module 1876: readAppEntryWindowMetrics ===

// Module 1876 (readAppEntryWindowMetrics)
import NativeDeviceModuleDefault from "NativeDeviceModule" /* 1343 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/screen/native/readAppEntryWindowMetrics.android.tsx");

export const readWindowSizeForAppEntry = function readWindowSizeForAppEntry(appEntryKey) {
  const obj = NativeDeviceModuleDefault;
  let windowSize;
  if (obj != null) {
    windowSize = obj.getWindowSize(appEntryKey);
  }
  return windowSize;
};
export const readScreenSizeForAppEntry = function readScreenSizeForAppEntry(appEntryKey) {
  const obj = NativeDeviceModuleDefault;
  let screenSize;
  if (obj != null) {
    screenSize = obj.getScreenSize(appEntryKey);
  }
  return screenSize;
};
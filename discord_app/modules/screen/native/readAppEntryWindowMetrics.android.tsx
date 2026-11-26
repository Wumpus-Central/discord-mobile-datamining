// === Module 2021: readAppEntryWindowMetrics ===

// Module 2021 (readAppEntryWindowMetrics)
import NativeDeviceModuleDefault from "NativeDeviceModule" /* 1351 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/screen/native/readAppEntryWindowMetrics.android.tsx");

export function readWindowSizeForAppEntry(appEntryKey) {
  const obj = NativeDeviceModuleDefault;
  let windowSize;
  if (obj != null) {
    windowSize = obj.getWindowSize(appEntryKey);
  }
  return windowSize;
}
export function readScreenSizeForAppEntry(appEntryKey) {
  const obj = NativeDeviceModuleDefault;
  let screenSize;
  if (obj != null) {
    screenSize = obj.getScreenSize(appEntryKey);
  }
  return screenSize;
}
// === Module 1894: readWindowSizeForAppEntry ===

// Module 1894 (readWindowSizeForAppEntry)
import obj132 from "obj132" /* 2 */;
import enforcingDefault from "enforcing" /* 671 */;

const result = obj132.fileFinishedImporting("modules/screen/native/readAppEntryWindowMetrics.android.tsx");

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
// === Module 16231: isJankScreenReportingEnabled ===

// Module 16231 (isJankScreenReportingEnabled)
import libdiscoreExperiments from "libdiscoreExperiments" /* 559 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/jank_stats/native/isJankScreenReportingEnabled.tsx");

export const isJankScreenReportingEnabled = function isJankScreenReportingEnabled() {
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    const AndroidJankPerScreenExperiment = libdiscoreExperiments.AndroidJankPerScreenExperiment;
    isAndroidResult = AndroidJankPerScreenExperiment.getCachedEnabled();
  }
  return isAndroidResult;
};
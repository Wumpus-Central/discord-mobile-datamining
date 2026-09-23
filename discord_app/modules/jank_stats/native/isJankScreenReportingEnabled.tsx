// === Module 16406: isJankScreenReportingEnabled ===

// Module 16406 (isJankScreenReportingEnabled)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import libdiscoreExperiments from "libdiscoreExperiments" /* 2068 */;
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
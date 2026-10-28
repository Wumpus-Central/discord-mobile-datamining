// === Module 17707: isJankScreenReportingEnabled ===

// Module 17707 (isJankScreenReportingEnabled)
import libdiscoreExperiments from "libdiscoreExperiments" /* 559 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import DeviceUtils from "DeviceUtils" /* 4961 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/jank_stats/native/isJankScreenReportingEnabled.tsx");

export const isJankScreenReportingEnabled = function isJankScreenReportingEnabled() {
  if (obj.isAndroid()) {
    const AndroidJankPerScreenExperiment = libdiscoreExperiments.AndroidJankPerScreenExperiment;
    let cachedEnabled = AndroidJankPerScreenExperiment.getCachedEnabled();
  } else {
    cachedEnabled = PlatformUtils.isIOS();
    if (cachedEnabled) {
      cachedEnabled = DeviceUtils.getSystemVersionMajor() >= 18;
      const tmpResult2 = DeviceUtils;
    }
    if (cachedEnabled) {
      const IOSJankPerScreenExperiment = libdiscoreExperiments.IOSJankPerScreenExperiment;
      cachedEnabled = IOSJankPerScreenExperiment.getCachedEnabled();
    }
    const tmpResult = PlatformUtils;
  }
  return cachedEnabled;
};
// === Module 17163: isJankScreenReportingEnabled ===

// Module 17163 (isJankScreenReportingEnabled)
import libdiscoreExperiments from "libdiscoreExperiments" /* 559 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import DeviceUtils from "DeviceUtils" /* 4902 */;
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
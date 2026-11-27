// === Module 17737: isJankScreenReportingEnabled ===

// Module 17737 (isJankScreenReportingEnabled)
import PlatformUtils from "PlatformUtils" /* 1379 */;
import libdiscoreExperiments from "libdiscoreExperiments" /* 4918 */;
import DeviceUtils from "DeviceUtils" /* 5000 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/jank_stats/native/isJankScreenReportingEnabled.tsx");

export function isJankScreenReportingEnabled() {
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
}
// discord_app/modules/jank_stats/native/isJankScreenReportingEnabled.tsx
import libdiscoreExperiments from "../../libdiscore/libdiscoreExperiments.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import DeviceUtils from "../../../utils/native/DeviceUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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

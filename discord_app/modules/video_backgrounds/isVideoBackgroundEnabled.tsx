// === Module 5265: isVideoBackgroundEnabled ===

// Module 5265 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 5266 */;
import VirtualBackgroundsIosExperimentDefault from "VirtualBackgroundsIosExperiment" /* 5267 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/video_backgrounds/isVideoBackgroundEnabled.tsx");

export default function isVideoBackgroundEnabled(location) {
  let tmp3 = isVideoBackgroundSupportedDefault();
  if (tmp3) {
    const isIOSResult = PlatformUtils.isIOS();
    let enabled = !isIOSResult;
    if (isIOSResult) {
      const obj2 = { location };
      enabled = VirtualBackgroundsIosExperimentDefault.getConfig(obj2).enabled;
      const tmpResult = VirtualBackgroundsIosExperimentDefault;
    }
    tmp3 = enabled;
  }
  return tmp3;
};
// === Module 6025: isVideoBackgroundEnabled ===

// Module 6025 (isVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1379 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 6026 */;
import VirtualBackgroundsIosExperimentDefault from "VirtualBackgroundsIosExperiment" /* 6027 */;
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
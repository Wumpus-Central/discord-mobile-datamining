// === Module 9107: isVideoBackgroundSupported ===

// Module 9107 (isVideoBackgroundSupported)
import VirtualBackgroundsIosExperimentDefault from "VirtualBackgroundsIosExperiment" /* 9108 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

const require = fn;
const Features = fn(4585).Features;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_backgrounds/isVideoBackgroundSupported.tsx");

export default function isVideoBackgroundSupported() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = MediaEngineStore;
  }
  let supportsResult = obj.supports(Features.VIDEO_BACKGROUND_FILTER);
  if (supportsResult) {
    const _Object = Object;
    supportsResult = Object.values(obj.getVideoDevices()).length > 0;
  }
  let tmp4 = supportsResult;
  if (obj2.isIOS()) {
    tmp4 = VirtualBackgroundsIosExperimentDefault.getConfig({ location: "isVideoBackgroundSupported" }).enabled && supportsResult;
    const tmp6 = VirtualBackgroundsIosExperimentDefault.getConfig({ location: "isVideoBackgroundSupported" }).enabled && supportsResult;
  }
  return tmp4;
};
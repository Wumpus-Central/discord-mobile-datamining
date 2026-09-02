// === Module 9820: isVideoBackgroundSupported ===

// Module 9820 (isVideoBackgroundSupported)
import apexExperimentDefault from "apexExperiment" /* 9821 */;
import closure_3 from "_detectH265HardwareDecode" /* 4529 */;
import { Features } from "DesktopSources" /* 4542 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/video_backgrounds/isVideoBackgroundSupported.tsx");

export default function isVideoBackgroundSupported() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = closure_3;
  }
  let supportsResult = obj.supports(Features.VIDEO_BACKGROUND_FILTER);
  if (supportsResult) {
    const _Object = Object;
    supportsResult = Object.values(obj.getVideoDevices()).length > 0;
  }
  let tmp4 = supportsResult;
  if (obj2.isIOS()) {
    const obj3 = apexExperimentDefault;
    tmp4 = apexExperimentDefault.getConfig({ location: "isVideoBackgroundSupported" }).enabled && supportsResult;
    const tmp6 = apexExperimentDefault.getConfig({ location: "isVideoBackgroundSupported" }).enabled && supportsResult;
  }
  return tmp4;
};
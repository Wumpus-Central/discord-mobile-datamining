// === Module 9315: isVideoBackgroundSupported ===

// Module 9315 (isVideoBackgroundSupported)
import closure_0 from "_detectH265HardwareDecode" /* 4431 */;
import { Features } from "DesktopSources" /* 4444 */;

const result = require("set").fileFinishedImporting("modules/video_backgrounds/isVideoBackgroundSupported.tsx");

export default function isVideoBackgroundSupported() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = closure_0;
  }
  let supportsResult = obj.supports(Features.MEDIAPIPE);
  if (supportsResult) {
    const _Object = Object;
    supportsResult = Object.values(obj.getVideoDevices()).length > 0;
  }
  return supportsResult;
};
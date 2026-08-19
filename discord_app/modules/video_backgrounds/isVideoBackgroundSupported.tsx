// === Module 9666: isVideoBackgroundSupported ===

// Module 9666 (isVideoBackgroundSupported)
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import { Features } from "DesktopSources" /* 4529 */;

const result = require("obj132").fileFinishedImporting("modules/video_backgrounds/isVideoBackgroundSupported.tsx");

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
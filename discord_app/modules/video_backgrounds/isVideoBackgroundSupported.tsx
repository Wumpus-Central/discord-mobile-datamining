// discord_app/modules/video_backgrounds/isVideoBackgroundSupported.tsx
import _detectH265HardwareDecode from "../../stores/MediaEngineStore.tsx";
import { Features } from "../../../discord_common/js/packages/media-engine/Constants.tsx";

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
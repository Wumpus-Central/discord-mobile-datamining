// discord_app/modules/video_backgrounds/isVideoBackgroundSupported.tsx
import Constants from "../../../discord_common/js/packages/media-engine/Constants.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Features = Constants.Features;
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
  return supportsResult;
}

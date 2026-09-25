// discord_app/modules/video_backgrounds/useIsVideoBackgroundSupported.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_backgrounds/useIsVideoBackgroundSupported.tsx");

export default function useIsVideoBackgroundSupported() {
  const items = [MediaEngineStore];
  return initialize.useStateFromStores(items, () => isVideoBackgroundSupportedDefault(MediaEngineStore));
}

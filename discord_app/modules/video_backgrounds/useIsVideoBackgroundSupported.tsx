// === Module 12142: useIsVideoBackgroundSupported ===

// Module 12142 (useIsVideoBackgroundSupported)
import initialize from "initialize" /* 504 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 6075 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_backgrounds/useIsVideoBackgroundSupported.tsx");

export default function useIsVideoBackgroundSupported() {
  items = [MediaEngineStore];
  return initialize.useStateFromStores(items, () => isVideoBackgroundSupportedDefault(MediaEngineStore));
};
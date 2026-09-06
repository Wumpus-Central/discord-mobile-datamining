// === Module 13996: VideoQualityModeStore ===

// Module 13996 (VideoQualityModeStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let mode = Constants.VideoQualityMode.AUTO;
const Store = initializeDefault.Store;
class VideoQualityModeStore extends Store {
}
Object.defineProperty(VideoQualityModeStore.prototype, "mode", {
  get: function mode() {
    return mode;
  },
  set: undefined
});
VideoQualityModeStore.displayName = "VideoQualityModeStore";
const videoQualityModeStore = new VideoQualityModeStore(DispatcherDefault, {
  SET_CHANNEL_VIDEO_QUALITY_MODE: function handleSetChannelVideoQualityMode(mode) {
    mode = mode.mode;
  }
});
const result = size.fileFinishedImporting("stores/VideoQualityModeStore.tsx");

export default videoQualityModeStore;
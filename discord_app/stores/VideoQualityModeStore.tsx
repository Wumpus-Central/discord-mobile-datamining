// === Module 13298: mode ===

// Module 13298 (mode)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const AUTO = ME.VideoQualityMode.AUTO;
const Store = initializeDefault.Store;
class VideoQualityModeStore extends Store {
}
Object.defineProperty(VideoQualityModeStore.prototype, "mode", {
  get: function mode(activeIndex, arg1) {
    return AUTO;
  },
  set: undefined
});
VideoQualityModeStore.displayName = "VideoQualityModeStore";
const videoQualityModeStore = new VideoQualityModeStore(dispatcherDefault, {
  SET_CHANNEL_VIDEO_QUALITY_MODE: function handleSetChannelVideoQualityMode(mode) {
    mode = mode.mode;
  }
});
const result = set.fileFinishedImporting("stores/VideoQualityModeStore.tsx");

export default videoQualityModeStore;
// === Module 13103: mode ===

// Module 13103 (mode)
import obj132 from "obj132" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const AUTO = ME.VideoQualityMode.AUTO;
const Store = initializeDefault.Store;
class VideoQualityModeStore extends Store {
}
Object.defineProperty(VideoQualityModeStore.prototype, "mode", {
  get: function mode(closure_3, arg1) {
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
const result = obj132.fileFinishedImporting("stores/VideoQualityModeStore.tsx");

export default videoQualityModeStore;
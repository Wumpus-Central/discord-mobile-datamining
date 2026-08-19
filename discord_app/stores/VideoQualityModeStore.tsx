// discord_app/stores/VideoQualityModeStore.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import ME from "../Constants.tsx";
import dispatcherDefault from "../Dispatcher.tsx";

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
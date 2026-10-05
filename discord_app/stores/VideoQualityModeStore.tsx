// discord_app/stores/VideoQualityModeStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let mode = Constants.VideoQualityMode.AUTO;
const Store = get_initializedDefault.Store;
class VideoQualityModeStore extends Store {}
Object.defineProperty(VideoQualityModeStore.prototype, "mode", {
  get: function mode() {
    return mode;
  },
  set: undefined,
});
VideoQualityModeStore.displayName = "VideoQualityModeStore";
const obj = {
  SET_CHANNEL_VIDEO_QUALITY_MODE: function handleSetChannelVideoQualityMode(mode) {
    mode = mode.mode;
  },
};
const videoQualityModeStore = new VideoQualityModeStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/VideoQualityModeStore.tsx");

export default videoQualityModeStore;

// discord_app/modules/media_viewer/native/MediaPlayerMuteManager.tsx
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import 00560__ from "../../../../_runtime/metro/00560__.js";
import size from "../../../../_runtime/metro/00002__.js";

({ NativeEventEmitter, NativeModules } = get_ActivityIndicator);
const useMediaPlayerMutedStore = module_560.create(() => ({ isMuted: false }));
const nativeEventEmitter = new NativeEventEmitter(NativeModules.MediaPlayerManager);
class MediaPlayerMuteManager {
  constructor() {
    return Object.assign({ muteSubscription: "Array" });
  }
}
const prototype = MediaPlayerMuteManager.prototype;
prototype["initialize"] = function initialize() {
  this.muteSubscription = nativeEventEmitter.addListener("MediaPlayerMuteStateChanged", (isMuted) => {
    isMuted = isMuted.isMuted;
    isMuted(closure_1[2]).batchUpdates(() => {
      state.setState({ isMuted });
    });
  });
};
prototype["terminate"] = function terminate() {
  const muteSubscription = this.muteSubscription;
  if (muteSubscription != null) {
    muteSubscription.remove();
  }
};
const result = size.fileFinishedImporting("modules/media_viewer/native/MediaPlayerMuteManager.tsx");

export default Object.assign({ muteSubscription: "Array" });
export { useMediaPlayerMutedStore };
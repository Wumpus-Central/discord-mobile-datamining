// === Module 8390: MediaPlayerMuteManager ===

// Module 8390 (MediaPlayerMuteManager)
import get_ActivityIndicator from "module_17" /* 17 */;
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

({ NativeEventEmitter, NativeModules } = get_ActivityIndicator);
const useMediaPlayerMutedStore = module_570.create(() => ({ isMuted: false }));
const nativeEventEmitter = new NativeEventEmitter(NativeModules.MediaPlayerManager);
class MediaPlayerMuteManager {
  constructor() {
    return Object.assign({ muteSubscription: "r" });
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

export default Object.assign({ muteSubscription: "r" });
export { useMediaPlayerMutedStore };
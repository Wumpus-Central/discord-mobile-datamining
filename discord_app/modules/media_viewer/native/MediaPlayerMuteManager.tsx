// === Module 8459: nativeEventEmitter ===

// Module 8459 (nativeEventEmitter)
import get_ActivityIndicator from "get ActivityIndicator";
import keys from "keys";

let NativeEventEmitter;
let NativeModules;
({ NativeEventEmitter, NativeModules } = get_ActivityIndicator);
const obj = keys.create(() => ({ isMuted: false }));
const nativeEventEmitter = new NativeEventEmitter(NativeModules.MediaPlayerManager);
class MediaPlayerMuteManager {
}
const prototype = MediaPlayerMuteManager.prototype;
prototype["initialize"] = function initialize() {
  this.muteSubscription = nativeEventEmitter.addListener("MediaPlayerMuteStateChanged", (isMuted) => {
    isMuted = isMuted.isMuted;
    isMuted(table[2]).batchUpdates(() => {
      outer1_2.setState({ isMuted });
    });
  });
};
prototype["terminate"] = function terminate() {
  const muteSubscription = this.muteSubscription;
  if (muteSubscription != null) {
    muteSubscription.remove();
  }
};
const result = require("batchUpdates").fileFinishedImporting("modules/media_viewer/native/MediaPlayerMuteManager.tsx");

export default Object.create(MediaPlayerMuteManager.prototype);
export const useMediaPlayerMutedStore = obj;
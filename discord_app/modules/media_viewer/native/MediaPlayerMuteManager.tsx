// discord_app/modules/media_viewer/native/MediaPlayerMuteManager.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import 00570__ from "../../../../_runtime/metro/00570__.js";
import size from "../../../../_runtime/metro/00002__.js";

let isMuted;

let NativeEventEmitter;
let NativeModules;
({ NativeEventEmitter, NativeModules } = react_native);
const useMediaPlayerMutedStore = module_570.create(() => ({ isMuted: false }));
const nativeEventEmitter = new NativeEventEmitter(NativeModules.MediaPlayerManager);
class MediaPlayerMuteManager {
  constructor() {
    return Object.assign({ muteSubscription: "r" });
  }
  initialize() {
    let state;
    this.muteSubscription = nativeEventEmitter.addListener("MediaPlayerMuteStateChanged", (isMuted) => {
      isMuted = isMuted.isMuted;
      let obj = isMuted(closure_1[2]);
      obj.batchUpdates(() => {
        const obj = { isMuted };
        state.setState(obj);
      });
    });
  }
  terminate() {
    const muteSubscription = this.muteSubscription;
    if (muteSubscription != null) {
      muteSubscription.remove();
    }
  }
}
const prototype = MediaPlayerMuteManager.prototype;
const prototype2 = MediaPlayerMuteManager.prototype;
const result = size.fileFinishedImporting("modules/media_viewer/native/MediaPlayerMuteManager.tsx");

export default Object.assign({ muteSubscription: "r" });
export { useMediaPlayerMutedStore };
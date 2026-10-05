// === Module 9559: StageMusicStore ===

// Module 9559 (StageMusicStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let muted = false;
let c1 = false;
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class StageMusicStore extends DeviceSettingsStore {
  initialize(arg0) {
    if (null != arg0) {
      muted = arg0;
    }
  }
  isMuted() {
    return muted;
  }
  shouldPlay() {
    return c1;
  }
  getUserAgnosticState() {
    return muted;
  }
}
const prototype = StageMusicStore.prototype;
StageMusicStore.displayName = "StageMusicStore";
StageMusicStore.persistKey = "StageMusicStore";
const obj = {
  STAGE_MUSIC_MUTE: function handleMute(muted) {
    muted = muted.muted;
    c1 = false;
  },
  STAGE_MUSIC_PLAY: function handlePlay(play) {
    play = play.play;
  },
  VOICE_CHANNEL_SELECT: function handleConnect() {
    c1 = false;
  }
};
const stageMusicStore = new StageMusicStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/stage_channels/StageMusicStore.tsx");

export default stageMusicStore;
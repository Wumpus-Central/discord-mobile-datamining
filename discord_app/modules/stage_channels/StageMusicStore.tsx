// discord_app/modules/stage_channels/StageMusicStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  },
};
const stageMusicStore = new StageMusicStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/stage_channels/StageMusicStore.tsx");

export default stageMusicStore;

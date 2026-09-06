// discord_app/modules/stage_channels/StageMusicStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

let muted = false;
let c1 = false;
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class StageMusicStore extends DeviceSettingsStore {}
const prototype = StageMusicStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    muted = arg0;
  }
};
prototype["isMuted"] = function isMuted() {
  return muted;
};
prototype["shouldPlay"] = function shouldPlay() {
  return c1;
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return muted;
};
StageMusicStore.displayName = "StageMusicStore";
StageMusicStore.persistKey = "StageMusicStore";
const stageMusicStore = new StageMusicStore(DispatcherDefault, {
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/StageMusicStore.tsx");

export default stageMusicStore;

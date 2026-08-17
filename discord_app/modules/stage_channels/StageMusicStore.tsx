// discord_app/modules/stage_channels/StageMusicStore.tsx
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let c0 = false;
let c1 = false;
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class StageMusicStore extends DeviceSettingsStore {
}
const prototype = StageMusicStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    closure_0 = arg0;
  }
};
prototype["isMuted"] = function isMuted() {
  return c0;
};
prototype["shouldPlay"] = function shouldPlay() {
  return c1;
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return c0;
};
StageMusicStore.displayName = "StageMusicStore";
StageMusicStore.persistKey = "StageMusicStore";
const stageMusicStore = new StageMusicStore(dispatcherDefault, {
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
});
const result = require("set").fileFinishedImporting("modules/stage_channels/StageMusicStore.tsx");

export default stageMusicStore;
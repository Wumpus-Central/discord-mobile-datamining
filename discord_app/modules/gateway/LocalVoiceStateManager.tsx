// === Module 13673: LocalVoiceStateManager ===

// Module 13673 (LocalVoiceStateManager)
import FlagUtils from "FlagUtils" /* 1384 */;
import UserSettings from "UserSettings" /* 1935 */;
import isClipsEnabled from "isClipsEnabled" /* 13674 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import RTCRegionStore from "RTCRegionStore" /* 4610 */;
import StateManager from "StateManager" /* 13671 */;

require = fn;
const Constants = fn(1074);
({ ChannelTypes: hasOwnProperty, VoiceFlags: metroRequire } = Constants);
class LocalVoiceStateManager extends tmp3 {
  constructor(arg0) {
    tmp = new LocalVoiceStateManager(new.target);
    tmp.socket = global;
    return tmp;
  }
}
const prototype = LocalVoiceStateManager.prototype;
Object.defineProperty(prototype, "guildId", {
  get: function guildId() {
    return this.getState().guildId;
  },
  set: undefined
});
Object.defineProperty(prototype, "channelId", {
  get: function channelId() {
    return this.getState().channelId;
  },
  set: undefined
});
prototype["computeVoiceFlags"] = function computeVoiceFlags() {
  const ClipsAllowVoiceRecording = UserSettings.ClipsAllowVoiceRecording;
  const setting = ClipsAllowVoiceRecording.getSetting();
  const setFlagResult = FlagUtils.setFlag(0, constants2.ALLOW_VOICE_RECORDING, setting);
  const obj2 = FlagUtils;
  return obj2.setFlag(setFlagResult, constants2.CLIPS_ENABLED, isClipsEnabled.isClipsEnabled());
};
prototype["getInitialState"] = function getInitialState() {
  return { guildId: null, channelId: null, selfMute: MediaEngineStore.isSelfMute(), selfDeaf: MediaEngineStore.isSelfDeaf(), selfVideo: MediaEngineStore.isVideoEnabled(), preferredRegion: null, preferredRegions: null, videoStreamParameters: null, flags: 0 };
};
prototype["getNextState"] = function getNextState(guildId) {
  return { guildId: guildId.guildId, channelId: guildId.channelId, selfMute: MediaEngineStore.isSelfMute(), selfDeaf: MediaEngineStore.isSelfDeaf(), selfVideo: MediaEngineStore.isVideoEnabled(), preferredRegion: RTCRegionStore.getPreferredRegion(), preferredRegions: RTCRegionStore.getPreferredRegions(), videoStreamParameters: MediaEngineStore.getVideoStreamParameters(), flags: this.computeVoiceFlags() };
};
prototype["shouldCommit"] = function shouldCommit() {
  const socket = this.socket;
  return socket.isSessionEstablished();
};
prototype["didCommit"] = function didCommit(state) {
  ({ guildId, channelId, selfMute, selfDeaf, selfVideo, preferredRegion, preferredRegions, flags } = state);
  if (flags === undefined) {
    flags = 0;
  }
  const self = this;
  if (selfVideo) {
    const channel = ChannelStore.getChannel(channelId);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type === constants.GUILD_STAGE_VOICE) {
      const socket2 = self.socket;
      const obj = { guildId, channelId, selfMute, selfDeaf, selfVideo, preferredRegion, preferredRegions, videoStreamParameters: state.videoStreamParameters, flags };
      socket2.voiceStateUpdate(obj);
    }
  }
  const socket = self.socket;
  socket.voiceStateUpdate({ guildId, channelId, selfMute, selfDeaf, selfVideo, preferredRegion, preferredRegions, flags });
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/gateway/LocalVoiceStateManager.tsx");

export default LocalVoiceStateManager;
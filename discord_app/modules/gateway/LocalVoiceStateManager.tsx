// === Module 13220: guildId ===

// Module 13220 (guildId)
import hasFlag from "hasFlag" /* 1403 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import isClipsEnabled from "isClipsEnabled" /* 4505 */;
import shouldCommitDefault from "shouldCommit" /* 13218 */;
import closure_2 from "ensureGuildLoaded" /* 1391 */;
import closure_3 from "_detectH265HardwareDecode" /* 4495 */;
import closure_4 from "initialize" /* 4539 */;
import ME from "ME" /* 676 */;

require = arg1;
({ ChannelTypes: c5, VoiceFlags: closure_6 } = ME);
shouldCommitDefault;
class LocalVoiceStateManager extends tmp3 {
  constructor(arg0) {
    tmp = new LocalVoiceStateManager(new.target);
    // ThrowIfThisInitialized (0x7c)
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
  const ClipsAllowVoiceRecording = explicitContentFromProto.ClipsAllowVoiceRecording;
  const setting = ClipsAllowVoiceRecording.getSetting();
  const obj = hasFlag;
  const setFlagResult = hasFlag.setFlag(0, constants2.ALLOW_VOICE_RECORDING, setting);
  const obj2 = hasFlag;
  return obj2.setFlag(setFlagResult, constants2.CLIPS_ENABLED, isClipsEnabled.isClipsEnabled());
};
prototype["getInitialState"] = function getInitialState() {
  return { guildId: null, channelId: null, selfMute: closure_3.isSelfMute(), selfDeaf: closure_3.isSelfDeaf(), selfVideo: closure_3.isVideoEnabled(), preferredRegion: null, preferredRegions: null, videoStreamParameters: null, flags: 0 };
};
prototype["getNextState"] = function getNextState(guildId) {
  return { guildId: guildId.guildId, channelId: guildId.channelId, selfMute: closure_3.isSelfMute(), selfDeaf: closure_3.isSelfDeaf(), selfVideo: closure_3.isVideoEnabled(), preferredRegion: store.getPreferredRegion(), preferredRegions: store.getPreferredRegions(), videoStreamParameters: closure_3.getVideoStreamParameters(), flags: this.computeVoiceFlags() };
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
    channel = channel.getChannel(channelId);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type === constants.GUILD_STAGE_VOICE) {
      const socket2 = self.socket;
      const obj = { guildId: null, channelId: null, selfMute: null, selfDeaf: null, selfVideo: null, preferredRegion: null, preferredRegions: null, videoStreamParameters: null, flags: null };
      obj[0] = guildId;
      obj[1] = channelId;
      obj[2] = selfMute;
      obj[3] = selfDeaf;
      obj[4] = selfVideo;
      obj[5] = preferredRegion;
      obj[6] = preferredRegions;
      obj[7] = state.videoStreamParameters;
      obj[8] = flags;
      socket2.voiceStateUpdate(obj);
    }
  }
  const socket = self.socket;
  socket.voiceStateUpdate({ guildId, channelId, selfMute, selfDeaf, selfVideo, preferredRegion, preferredRegions, flags });
};
const result = require("set").fileFinishedImporting("modules/gateway/LocalVoiceStateManager.tsx");

export default LocalVoiceStateManager;
// === Module 13230: guildId ===

// Module 13230 (guildId)
import hasFlag from "hasFlag" /* 1403 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import isClipsEnabled from "isClipsEnabled" /* 4526 */;
import shouldCommitDefault from "shouldCommit" /* 13228 */;
import initialize from "initialize" /* 4504 */;
import reset from "reset" /* 4652 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import initialize2 from "initialize" /* 4565 */;
import ME from "ME" /* 676 */;

require = fn;
({ ApplicationStreamStates: error, ChannelTypes: closure_8, VoiceFlags: c9 } = ME);
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
  const setFlagResult = hasFlag.setFlag(0, constants3.ALLOW_VOICE_RECORDING, setting);
  let isClipsEnabledResult = isClipsEnabled.isClipsEnabled();
  if (isClipsEnabledResult) {
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    let state;
    if (currentUserActiveStream != null) {
      state = currentUserActiveStream.state;
    }
    let tmp11 = state === constants.ACTIVE;
    if (!tmp11) {
      const currentUserActiveStream1 = obj3.getCurrentUserActiveStream();
      let state1;
      if (currentUserActiveStream1 != null) {
        state1 = currentUserActiveStream1.state;
      }
      tmp11 = state1 === tmp10.PAUSED;
    }
    isClipsEnabledResult = tmp11;
    obj3 = currentUserActiveStream;
  }
  let tmpResult = isClipsEnabled;
  let result = tmpResult.isDecoupledClipsEnabled();
  if (result) {
    visibleGame = visibleGame.getVisibleGame();
    let windowHandle;
    if (visibleGame != null) {
      windowHandle = visibleGame.windowHandle;
    }
    result = null != windowHandle;
  }
  tmpResult = hasFlag;
  if (!isClipsEnabledResult) {
    isClipsEnabledResult = result;
  }
  return tmpResult.setFlag(setFlagResult, constants3.CLIPS_ENABLED, isClipsEnabledResult);
};
prototype["getInitialState"] = function getInitialState() {
  return { guildId: null, channelId: null, selfMute: closure_5.isSelfMute(), selfDeaf: closure_5.isSelfDeaf(), selfVideo: closure_5.isVideoEnabled(), preferredRegion: null, preferredRegions: null, videoStreamParameters: null, flags: 0 };
};
prototype["getNextState"] = function getNextState(guildId) {
  return { guildId: guildId.guildId, channelId: guildId.channelId, selfMute: closure_5.isSelfMute(), selfDeaf: closure_5.isSelfDeaf(), selfVideo: closure_5.isVideoEnabled(), preferredRegion: store.getPreferredRegion(), preferredRegions: store.getPreferredRegions(), videoStreamParameters: closure_5.getVideoStreamParameters(), flags: this.computeVoiceFlags() };
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
    if (type === constants2.GUILD_STAGE_VOICE) {
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
let result = require("obj132").fileFinishedImporting("modules/gateway/LocalVoiceStateManager.tsx");

export default LocalVoiceStateManager;
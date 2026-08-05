// discord_app/modules/gateway/LocalVoiceStateManager.tsx
import initialize from "initialize";
import reset from "reset";
import ensureGuildLoaded from "ensureGuildLoaded";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import closure_6 from "initialize";
import ME from "ME";
import "shouldCommit";
import { hasFlag } from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import { isClipsEnabled } from "../clips/isClipsEnabled.tsx";
import { explicitContentFromProto } from "../user_settings/UserSettings.tsx";

let c9;
let error;
let metroImportAll;
const require = arg1;
({ ApplicationStreamStates: error, ChannelTypes: metroImportAll, VoiceFlags: c9 } = ME);
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
  const ClipsAllowVoiceRecording = explicitContentFromProto /* explicitContentFromProto */.ClipsAllowVoiceRecording;
  const setting = ClipsAllowVoiceRecording.getSetting();
  const obj = hasFlag /* hasFlag */;
  const tmp4 = constants3;
  const setFlagResult = hasFlag /* hasFlag */.setFlag(0, constants3.ALLOW_VOICE_RECORDING, setting);
  let isClipsEnabledResult = isClipsEnabled /* isClipsEnabled */.isClipsEnabled();
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
  let tmpResult = tmp(4342);
  let result = tmpResult.isDecoupledClipsEnabled();
  if (result) {
    visibleGame = visibleGame.getVisibleGame();
    let windowHandle;
    if (visibleGame != null) {
      windowHandle = visibleGame.windowHandle;
    }
    result = null != windowHandle;
  }
  tmpResult = tmp(1384);
  if (!isClipsEnabledResult) {
    isClipsEnabledResult = result;
  }
  return tmpResult.setFlag(setFlagResult, tmp4.CLIPS_ENABLED, isClipsEnabledResult);
};
prototype["getInitialState"] = function getInitialState() {
  return { guildId: null, channelId: null, selfMute: _detectH265HardwareDecode.isSelfMute(), selfDeaf: _detectH265HardwareDecode.isSelfDeaf(), selfVideo: _detectH265HardwareDecode.isVideoEnabled(), preferredRegion: null, preferredRegions: null, videoStreamParameters: null, flags: 0 };
};
prototype["getNextState"] = function getNextState(guildId) {
  return { guildId: guildId.guildId, channelId: guildId.channelId, selfMute: _detectH265HardwareDecode.isSelfMute(), selfDeaf: _detectH265HardwareDecode.isSelfDeaf(), selfVideo: _detectH265HardwareDecode.isVideoEnabled(), preferredRegion: store.getPreferredRegion(), preferredRegions: store.getPreferredRegions(), videoStreamParameters: _detectH265HardwareDecode.getVideoStreamParameters(), flags: this.computeVoiceFlags() };
};
prototype["shouldCommit"] = function shouldCommit() {
  const socket = this.socket;
  return socket.isSessionEstablished();
};
prototype["didCommit"] = function didCommit(state) {
  let channelId;
  let flags;
  let guildId;
  let preferredRegion;
  let preferredRegions;
  let selfDeaf;
  let selfMute;
  let selfVideo;
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
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/gateway/LocalVoiceStateManager.tsx");

export default LocalVoiceStateManager;
// === Module 14971: LocalVoiceStateManager ===

// Module 14971 (LocalVoiceStateManager)
import FlagUtils from "FlagUtils" /* 1404 */;
import UserSettings from "UserSettings" /* 4742 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6690 */;
import isClipsEnabled from "isClipsEnabled" /* 14181 */;
import StreamDrawingChannel from "StreamDrawingChannel" /* 14972 */;
import StreamDrawingExperiment from "StreamDrawingExperiment" /* 14973 */;
import PassTheControllerStore from "PassTheControllerStore" /* 5724 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 5903 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4766 */;
import GuildStore from "GuildStore" /* 4788 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import RTCRegionStore from "RTCRegionStore" /* 5816 */;
import StateManager from "StateManager" /* 14969 */;

require = fn;
const Constants = fn(1071);
({ ChannelTypes: closure_9, VoiceFlags: closure_10 } = Constants);
const StreamTypes = fn(6688).StreamTypes;
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
prototype["computeVoiceFlags"] = function computeVoiceFlags(guildId, channelId) {
  const ClipsAllowVoiceRecording = UserSettings.ClipsAllowVoiceRecording;
  const setting = ClipsAllowVoiceRecording.getSetting();
  const setFlagResult = FlagUtils.setFlag(0, constants2.ALLOW_VOICE_RECORDING, setting);
  const obj2 = FlagUtils;
  const setFlagResult1 = obj2.setFlag(setFlagResult, constants2.CLIPS_ENABLED, isClipsEnabled.isClipsEnabled());
  if (null == channelId) {
    const setFlagResult2 = obj4.setFlag(setFlagResult1, constants2.PASS_THE_CONTROLLER_HOST, tmp7);
    const tmpResult = FlagUtils;
    const channel = ChannelStore.getChannel(channelId);
    let streamDrawingEnabled = StreamDrawingChannel.supportsStreamDrawing(channel, GuildStore.getGuild(guildId));
    if (streamDrawingEnabled) {
      streamDrawingEnabled = StreamDrawingExperiment.getIsStreamDrawingEnabled(channelId, "LocalVoiceStateManager", false);
      const tmpResult5 = StreamDrawingExperiment;
    }
    if (streamDrawingEnabled) {
      streamDrawingEnabled = ApplicationStreamingSettingsStore.getState().streamDrawingEnabled;
    }
    return tmpResult.setFlag(setFlagResult2, constants2.ALLOW_STREAM_DRAWING, streamDrawingEnabled);
  } else {
    if (null != guildId) {
      let CALL = StreamTypes.GUILD;
    } else {
      CALL = StreamTypes.CALL;
    }
    const obj5 = { streamType: CALL, guildId, channelId, ownerId: AuthenticationStore.getId() };
    const result = PassTheControllerStore.isSelfPassingController(StreamKeyUtils.encodeStreamKey(obj5));
    const tmpResult6 = StreamKeyUtils;
  }
  obj4 = FlagUtils;
};
prototype["getInitialState"] = function getInitialState() {
  return { guildId: null, channelId: null, selfMute: MediaEngineStore.isSelfMute(), selfDeaf: MediaEngineStore.isSelfDeaf(), selfVideo: MediaEngineStore.isVideoEnabled(), preferredRegion: null, preferredRegions: null, videoStreamParameters: null, flags: 0 };
};
prototype["getNextState"] = function getNextState(arg0) {
  ({ guildId, channelId } = arg0);
  return { guildId, channelId, selfMute: MediaEngineStore.isSelfMute(), selfDeaf: MediaEngineStore.isSelfDeaf(), selfVideo: MediaEngineStore.isVideoEnabled(), preferredRegion: RTCRegionStore.getPreferredRegion(), preferredRegions: RTCRegionStore.getPreferredRegions(), videoStreamParameters: MediaEngineStore.getVideoStreamParameters(), flags: this.computeVoiceFlags(guildId, channelId) };
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
let result = size.fileFinishedImporting("modules/gateway/LocalVoiceStateManager.tsx");

export default LocalVoiceStateManager;
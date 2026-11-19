// === Module 14849: LocalVoiceStateManager ===

// Module 14849 (LocalVoiceStateManager)
import FlagUtils from "FlagUtils" /* 1406 */;
import UserSettings from "UserSettings" /* 4617 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6280 */;
import isClipsEnabled from "isClipsEnabled" /* 14798 */;
import PassTheControllerStore from "PassTheControllerStore" /* 6274 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import RTCRegionStore from "RTCRegionStore" /* 5632 */;
import StateManager from "StateManager" /* 14847 */;

require = fn;
const Constants = fn(1072);
({ ChannelTypes: metroImportDefault, VoiceFlags: closure_8 } = Constants);
const StreamTypes = fn(6276).StreamTypes;
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
  let tmp = channelId;
  const ClipsAllowVoiceRecording = UserSettings.ClipsAllowVoiceRecording;
  const setting = ClipsAllowVoiceRecording.getSetting();
  const setFlagResult = FlagUtils.setFlag(0, constants2.ALLOW_VOICE_RECORDING, setting);
  const obj2 = FlagUtils;
  const setFlagResult1 = obj2.setFlag(setFlagResult, constants2.CLIPS_ENABLED, isClipsEnabled.isClipsEnabled());
  if (null == channelId) {
    return obj4.setFlag(setFlagResult1, constants2.PASS_THE_CONTROLLER_HOST, tmp7);
  } else {
    if (null != guildId) {
      let CALL = StreamTypes.GUILD;
    } else {
      CALL = StreamTypes.CALL;
    }
    const obj5 = { streamType: CALL, guildId, channelId: tmp, ownerId: null };
    tmp = AuthenticationStore;
    obj5.ownerId = AuthenticationStore.getId();
    const result = PassTheControllerStore.isSelfPassingController(StreamKeyUtils.encodeStreamKey(obj5));
    const tmp2Result = StreamKeyUtils;
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
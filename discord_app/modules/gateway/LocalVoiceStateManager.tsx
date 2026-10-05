// discord_app/modules/gateway/LocalVoiceStateManager.tsx
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import isClipsEnabled from "../clips/isClipsEnabled.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import RTCRegionStore from "../../stores/RTCRegionStore.tsx";
import Constants from "../../Constants.tsx";
import StateManager from "../../lib/StateManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
({ ChannelTypes: hasOwnProperty, VoiceFlags: metroRequire } = Constants);
class LocalVoiceStateManager extends StateManager {
  constructor(socket) {
    const tmp = new LocalVoiceStateManager(new.target);
    tmp.socket = socket;
    return tmp;
  }
  computeVoiceFlags() {
    const ClipsAllowVoiceRecording = UserSettings.ClipsAllowVoiceRecording;
    const setting = ClipsAllowVoiceRecording.getSetting();
    const obj = FlagUtils;
    const setFlagResult = obj.setFlag(0, metroRequire.ALLOW_VOICE_RECORDING, setting);
    const setFlag = FlagUtils.setFlag;
    const CLIPS_ENABLED = metroRequire.CLIPS_ENABLED;
    FlagUtils;
    const obj2 = isClipsEnabled;
    return setFlag(setFlagResult, CLIPS_ENABLED, obj2.isClipsEnabled());
  }
  getInitialState() {
    const obj = {
      guildId: null,
      channelId: null,
      selfMute: MediaEngineStore.isSelfMute(),
      selfDeaf: MediaEngineStore.isSelfDeaf(),
      selfVideo: MediaEngineStore.isVideoEnabled(),
      preferredRegion: null,
      preferredRegions: null,
      videoStreamParameters: null,
      flags: 0,
    };
    return obj;
  }
  getNextState(guildId) {
    const obj = {
      guildId: guildId.guildId,
      channelId: guildId.channelId,
      selfMute: MediaEngineStore.isSelfMute(),
      selfDeaf: MediaEngineStore.isSelfDeaf(),
      selfVideo: MediaEngineStore.isVideoEnabled(),
      preferredRegion: RTCRegionStore.getPreferredRegion(),
      preferredRegions: RTCRegionStore.getPreferredRegions(),
      videoStreamParameters: MediaEngineStore.getVideoStreamParameters(),
      flags: this.computeVoiceFlags(),
    };
    return obj;
  }
  shouldCommit() {
    const socket = this.socket;
    return socket.isSessionEstablished();
  }
  didCommit(state) {
    let channelId;
    let flags;
    let guildId;
    let preferredRegion;
    let preferredRegions;
    let selfDeaf;
    let selfMute;
    let selfVideo;
    ({ guildId, channelId, selfMute, selfDeaf, selfVideo, preferredRegion, preferredRegions, flags } = state);
    const videoStreamParameters = state.videoStreamParameters;
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
      if (type === hasOwnProperty.GUILD_STAGE_VOICE) {
        const socket2 = self.socket;
        const obj = {
          guildId,
          channelId,
          selfMute,
          selfDeaf,
          selfVideo,
          preferredRegion,
          preferredRegions,
          videoStreamParameters,
          flags,
        };
        socket2.voiceStateUpdate(obj);
      }
    }
    const socket = self.socket;
    socket.voiceStateUpdate({
      guildId,
      channelId,
      selfMute,
      selfDeaf,
      selfVideo,
      preferredRegion,
      preferredRegions,
      flags,
    });
  }
}
const prototype = LocalVoiceStateManager.prototype;
Object.defineProperty(prototype, "guildId", {
  get: function guildId() {
    return this.getState().guildId;
  },
  set: undefined,
});
Object.defineProperty(prototype, "channelId", {
  get: function channelId() {
    return this.getState().channelId;
  },
  set: undefined,
});
const result = size.fileFinishedImporting("modules/gateway/LocalVoiceStateManager.tsx");

export default LocalVoiceStateManager;

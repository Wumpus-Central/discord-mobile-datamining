// === Module 17584: GuildRoomSpatialAudioManager ===

// Module 17584 (GuildRoomSpatialAudioManager)
import GuildRoomsExperiment from "GuildRoomsExperiment" /* 4838 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9232 */;
import GuildRoomSpatialAudio from "GuildRoomSpatialAudio" /* 17585 */;
import _slicedToArray from "module_32" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 4553 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1235 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import MediaEngineStore from "MediaEngineStore" /* 1909 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4661 */;
import GuildRoomStore from "GuildRoomStore" /* 4796 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7228 */;

require = fn;
class GuildRoomSpatialAudioManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      AUDIO_SET_AUDIO_MIXER_SETTINGS() {
            return applyArgumentsResult.apply();
          },
      RTC_CONNECTION_STATE() {
            return applyArgumentsResult.apply();
          },
      RTC_CONNECTION_USERS_MERGED() {
            return applyArgumentsResult.apply();
          },
      MEDIA_SESSION_JOINED() {
            return applyArgumentsResult.apply();
          },
      GUILD_ROOM_CONNECT() {
            return applyArgumentsResult.apply();
          },
      GUILD_ROOM_UPDATE() {
            return applyArgumentsResult.apply();
          },
      GUILD_ROOM_LOCAL_UPDATE() {
            return applyArgumentsResult.apply();
          },
      GUILD_ROOM_DISCONNECT() {
            return applyArgumentsResult.apply();
          }
    };
    applyArgumentsResult.reapplyForExperimentUpdate = function reapplyForExperimentUpdate() {
      if (GuildRoomSpatialAudio.GUILD_ROOM_SPATIAL_AUDIO_ENABLED) {
        const audioMixerSettings = MediaEngineStore.getAudioMixerSettings();
        const result = AudioActionCreatorsDefault.setAudioMixerSettings(audioMixerSettings);
        applyArgumentsResult.apply();
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = GuildRoomSpatialAudioManager.prototype;
prototype["_initialize"] = function _initialize() {
  const result = new Map().set(ExperimentStore, this.reapplyForExperimentUpdate);
  this.stores = result.set(ApexExperimentStore, this.reapplyForExperimentUpdate);
};
prototype["_terminate"] = function _terminate() {

};
prototype["isLivingRoomAvailable"] = function isLivingRoomAvailable() {
  if (GuildRoomSpatialAudio.GUILD_ROOM_SPATIAL_AUDIO_ENABLED) {
    const guildId = RTCConnectionStore.getGuildId();
    let interactionsEnabled = null != guildId;
    if (interactionsEnabled) {
      const obj = { guildId, location: "GuildRoomSpatialAudioManager" };
      interactionsEnabled = GuildRoomsExperiment.getGuildRoomsConfig(obj, { autoTrackExposure: false }).interactionsEnabled;
      const tmpResult = GuildRoomsExperiment;
    }
    return interactionsEnabled;
  } else {
    return false;
  }
};
prototype["apply"] = function apply() {
  if (MediaEngineStore.getAudioMixerSettings().enabled) {
    const channelId = RTCConnectionStore.getChannelId();
    if (null != channelId) {
      const self = this;
      if (this.isLivingRoomAvailable()) {
        const channel = ChannelStore.getChannel(channelId);
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (!isGuildStageVoiceResult) {
          const obj2 = { users: GuildRoomStore.getRoomUsers(channelId), currentUserId: AuthenticationStore.getId(), channelId };
          _require = require("GuildRoomSpatialAudio").computeLivingRoomWorldPoints(obj2);
          const mediaEngine = MediaEngineStore.getMediaEngine();
          mediaEngine.eachConnection((setUserPosition) => {
            const entries = Object.entries(closure_0);
            while (tmp2 !== undefined) {
              let tmp5 = _slicedToArray(tmp3, 2);
              [tmp6, tmp7] = tmp5;
              let obj = GuildRoomSpatialAudio;
              let setUserPositionResult = setUserPosition.setUserPosition(tmp6, obj.livingRoomWorldPointToMediaEnginePoint(tmp7));
              continue;
            }
            tmp2 = entries[Symbol.iterator]();
          });
          const obj3 = require("GuildRoomSpatialAudio");
        }
      }
    }
  }
};
const guildRoomSpatialAudioManager = new GuildRoomSpatialAudioManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomSpatialAudioManager.tsx");

export default guildRoomSpatialAudioManager;
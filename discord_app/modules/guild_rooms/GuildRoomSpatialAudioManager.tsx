// === Module 17375: _initialize ===

// Module 17375 (_initialize)
import GUILD_ROOMS_EXPERIMENT_ID from "GUILD_ROOMS_EXPERIMENT_ID" /* 4760 */;
import initializeDefault from "initialize" /* 7118 */;
import GUILD_ROOM_SPATIAL_AUDIO_ENABLED from "GUILD_ROOM_SPATIAL_AUDIO_ENABLED" /* 17376 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "getHash" /* 4476 */;
import closure_5 from "initialize" /* 1236 */;
import closure_6 from "fetchFingerprint" /* 502 */;
import closure_7 from "ensureGuildLoaded" /* 1957 */;
import closure_8 from "_detectH265HardwareDecode" /* 1908 */;
import closure_9 from "createRTCConnection" /* 4583 */;
import closure_10 from "resolveCreatingNotes" /* 4718 */;

require = arg1;
initializeDefault;
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
      if (applyArgumentsResult(closure_1_2[9]).GUILD_ROOM_SPATIAL_AUDIO_ENABLED) {
        const audioMixerSettings = closure_1_8.getAudioMixerSettings();
        const result = closure_1_1(closure_1_2[10]).setAudioMixerSettings(audioMixerSettings);
        applyArgumentsResult.apply();
        const obj = closure_1_1(closure_1_2[10]);
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = GuildRoomSpatialAudioManager.prototype;
prototype["_initialize"] = function _initialize() {
  const result = new Map().set(closure_4, this.reapplyForExperimentUpdate);
  this.stores = result.set(closure_5, this.reapplyForExperimentUpdate);
};
prototype["_terminate"] = function _terminate() {

};
prototype["isLivingRoomAvailable"] = function isLivingRoomAvailable() {
  if (GUILD_ROOM_SPATIAL_AUDIO_ENABLED.GUILD_ROOM_SPATIAL_AUDIO_ENABLED) {
    const guildId = store.getGuildId();
    let interactionsEnabled = null != guildId;
    if (interactionsEnabled) {
      const obj = { guildId: null, location: "GuildRoomSpatialAudioManager" };
      obj[0] = guildId;
      interactionsEnabled = GUILD_ROOMS_EXPERIMENT_ID.getGuildRoomsConfig(obj, { autoTrackExposure: false }).interactionsEnabled;
      const tmpResult = GUILD_ROOMS_EXPERIMENT_ID;
    }
    return interactionsEnabled;
  } else {
    return false;
  }
  const tmp = require;
};
prototype["apply"] = function apply() {
  let obj = audioMixerSettings;
  if (audioMixerSettings.getAudioMixerSettings().enabled) {
    const channelId = store.getChannelId();
    if (null != channelId) {
      const self = this;
      if (this.isLivingRoomAvailable()) {
        channel = channel.getChannel(channelId);
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (!isGuildStageVoiceResult) {
          obj = { users: null, currentUserId: null, channelId: null };
          obj[0] = roomUsers.getRoomUsers(channelId);
          obj[1] = id.getId();
          obj[2] = channelId;
          _require = _require(17376).computeLivingRoomWorldPoints(obj);
          const mediaEngine = obj.getMediaEngine();
          mediaEngine.eachConnection((setUserPosition) => {
            const entries = Object.entries(callback);
            while (tmp2 !== undefined) {
              let tmp4 = closure_1_3;
              let tmp5 = closure_1_3(tmp3, 2);
              let tmp8 = callback;
              let tmp9 = closure_1_2;
              [tmp6, tmp7] = tmp5;
              let obj = callback(closure_1_2[9]);
              let setUserPositionResult = setUserPosition.setUserPosition(tmp6, obj.livingRoomWorldPointToMediaEnginePoint(tmp7));
              continue;
            }
          });
          const obj3 = _require(17376);
        }
      }
    }
  }
};
const guildRoomSpatialAudioManager = new GuildRoomSpatialAudioManager();
let result = require("set").fileFinishedImporting("modules/guild_rooms/GuildRoomSpatialAudioManager.tsx");

export default guildRoomSpatialAudioManager;
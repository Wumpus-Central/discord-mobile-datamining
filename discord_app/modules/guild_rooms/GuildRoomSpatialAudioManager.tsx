// === Module 16587: _initialize ===

// Module 16587 (_initialize)
import initializeDefault from "initialize" /* 5038 */;
import trackDeviceChangedDefault from "trackDeviceChanged" /* 9654 */;
import experimentDefault from "experiment" /* 9882 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import getHash from "getHash" /* 4288 */;
import initialize from "initialize" /* 1212 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;
import resolveCreatingNotes from "resolveCreatingNotes" /* 9864 */;

let require = fn;
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
      const audioMixerSettings = closure_1_8.getAudioMixerSettings();
      const result = trackDeviceChangedDefault.setAudioMixerSettings(audioMixerSettings);
      applyArgumentsResult.apply();
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
  const guildId = store.getGuildId();
  let interactionsEnabled = null != guildId;
  if (interactionsEnabled) {
    const obj = { guildId: null, location: "GuildRoomSpatialAudioManager" };
    obj[0] = guildId;
    interactionsEnabled = obj.getCurrentConfig(obj, { autoTrackExposure: false }).interactionsEnabled;
  }
  return interactionsEnabled;
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
          _require = _require(16588).computeLivingRoomWorldPoints(obj);
          const mediaEngine = obj.getMediaEngine();
          mediaEngine.eachConnection((setUserPosition) => {
            const entries = Object.entries(callback);
            while (tmp2 !== undefined) {
              let tmp5 = closure_1_3(tmp3, 2);
              [tmp6, tmp7] = tmp5;
              let obj = callback(dependencyMap[11]);
              let setUserPositionResult = setUserPosition.setUserPosition(tmp6, obj.livingRoomWorldPointToMediaEnginePoint(tmp7));
              continue;
            }
            tmp2 = entries[Symbol.iterator]();
          });
          const obj3 = _require(16588);
        }
      }
    }
  }
};
const guildRoomSpatialAudioManager = new GuildRoomSpatialAudioManager();
let result = require("obj132").fileFinishedImporting("modules/guild_rooms/GuildRoomSpatialAudioManager.tsx");

export default guildRoomSpatialAudioManager;
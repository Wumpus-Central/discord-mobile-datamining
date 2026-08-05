// discord_app/modules/guild_rooms/GuildRoomSpatialAudioManager.tsx
import _slicedToArray from "_slicedToArray";
import getHash from "getHash";
import initialize from "initialize";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";
import handleSelectedChannelStoreChange from "handleSelectedChannelStoreChange";
import "initialize";
import { experiment } from "GuildRoomsExperiment.tsx";
import { computeLivingRoomWorldPoints } from "GuildRoomSpatialAudio.tsx";

let require = arg1;
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
      const audioMixerSettings = outer1_8.getAudioMixerSettings();
      const result = outer1_1(outer1_2[9]).setAudioMixerSettings(audioMixerSettings);
      applyArgumentsResult.apply();
    };
    return applyArgumentsResult;
  }
}
const prototype = GuildRoomSpatialAudioManager.prototype;
prototype["_initialize"] = function _initialize() {
  const result = new Map().set(getHash, this.reapplyForExperimentUpdate);
  this.stores = result.set(initialize, this.reapplyForExperimentUpdate);
};
prototype["_terminate"] = function _terminate() {

};
prototype["isLivingRoomAvailable"] = function isLivingRoomAvailable() {
  const guildId = store.getGuildId();
  let interactionsEnabled = null != guildId;
  if (interactionsEnabled) {
    let obj = experiment;
    obj = { guildId: null, location: "GuildRoomSpatialAudioManager" };
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
          _require = _computeLivingRoomWorldPoints.computeLivingRoomWorldPoints(obj);
          const mediaEngine = obj.getMediaEngine();
          mediaEngine.eachConnection((setUserPosition) => {
            let tmp6;
            let tmp7;
            const entries = Object.entries(callback);
            while (tmp2 !== undefined) {
              let tmp4 = outer1_3;
              let tmp5 = outer1_3(tmp3, 2);
              let tmp8 = callback;
              let tmp9 = outer1_2;
              [tmp6, tmp7] = tmp5;
              let obj = callback(outer1_2[11]);
              let setUserPositionResult = setUserPosition.setUserPosition(tmp6, obj.livingRoomWorldPointToMediaEnginePoint(tmp7));
              continue;
            }
          });
          const obj3 = _computeLivingRoomWorldPoints;
        }
      }
    }
  }
};
const guildRoomSpatialAudioManager = new GuildRoomSpatialAudioManager();
let result = require("initialize").fileFinishedImporting("modules/guild_rooms/GuildRoomSpatialAudioManager.tsx");

export default guildRoomSpatialAudioManager;
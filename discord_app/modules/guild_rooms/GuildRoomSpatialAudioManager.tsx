// discord_app/modules/guild_rooms/GuildRoomSpatialAudioManager.tsx
import GUILD_ROOMS_EXPERIMENT_ID from "GuildRoomsExperiment.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import GUILD_ROOM_SPATIAL_AUDIO_ENABLED from "GuildRoomSpatialAudio.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../experiments/ExperimentStore.tsx";
import closure_5 from "../experiments/apex/ApexExperimentStore.tsx";
import closure_6 from "../../stores/AuthenticationStore.tsx";
import closure_7 from "../../stores/ChannelStore.tsx";
import closure_8 from "../../stores/MediaEngineStore.tsx";
import closure_9 from "../../stores/RTCConnectionStore.tsx";
import closure_10 from "GuildRoomStore.tsx";
import { GUILD_ROOM_SPATIAL_AUDIO_ENABLED } from "GuildRoomSpatialAudio.tsx";

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
      },
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
prototype["_terminate"] = function _terminate() {};
prototype["isLivingRoomAvailable"] = function isLivingRoomAvailable() {
  if (GUILD_ROOM_SPATIAL_AUDIO_ENABLED.GUILD_ROOM_SPATIAL_AUDIO_ENABLED) {
    const guildId = store.getGuildId();
    let interactionsEnabled = null != guildId;
    if (interactionsEnabled) {
      const obj = { guildId: null, location: "GuildRoomSpatialAudioManager" };
      obj[0] = guildId;
      interactionsEnabled = GUILD_ROOMS_EXPERIMENT_ID.getGuildRoomsConfig(obj, {
        autoTrackExposure: false,
      }).interactionsEnabled;
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
          _require = require("GuildRoomSpatialAudio.tsx").computeLivingRoomWorldPoints(obj);
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
              let setUserPositionResult = setUserPosition.setUserPosition(
                tmp6,
                obj.livingRoomWorldPointToMediaEnginePoint(tmp7),
              );
              continue;
            }
          });
          const obj3 = GUILD_ROOM_SPATIAL_AUDIO_ENABLED;
        }
      }
    }
  }
};
const guildRoomSpatialAudioManager = new GuildRoomSpatialAudioManager();
let result = require("set").fileFinishedImporting("modules/guild_rooms/GuildRoomSpatialAudioManager.tsx");

export default guildRoomSpatialAudioManager;

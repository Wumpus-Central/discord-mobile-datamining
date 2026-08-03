// === Module 10625: handleUpdateActivity ===

// Module 10625 (handleUpdateActivity)
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import createRTCConnection from "createRTCConnection";
import upsertRelationship from "upsertRelationship";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import getActiveStageChannelIds from "getActiveStageChannelIds";
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate";
import { STAGE_APPLICATION_ID } from "MAX_STAGE_TOPIC_LENGTH";
import ME from "ME";
import { Store } from "initialize";

let closure_14;
let closure_15;
let closure_16;
let map1;
const require = arg1;
function handleUpdateActivity() {
  voiceChannelId = voiceChannelId.getVoiceChannelId();
  let tmp2 = null;
  if (null != voiceChannelId) {
    stageInstanceByChannel = stageInstanceByChannel.getStageInstanceByChannel(voiceChannelId);
    tmp2 = null;
    if (null != stageInstanceByChannel) {
      channel = channel.getChannel(voiceChannelId);
      tmp2 = null;
      if (null != channel) {
        let obj1 = importAll(3888);
        tmp2 = null;
        if (obj1.canEveryone(constants2.VIEW_CHANNEL, channel)) {
          guild = guild.getGuild(channel.getGuildId());
          tmp2 = null;
          if (null != guild) {
            const features = guild.features;
            tmp2 = null;
            if (features.has(constants.DISCOVERABLE)) {
              let obj2 = require(9262) /* unpackStageChannelParty */;
              const result = obj2.packStageChannelPartyId(channel, stageInstanceByChannel);
              let id;
              if (_null != null) {
                const party = _null.party;
                if (party != null) {
                  id = party.id;
                }
              }
              let tmp15 = null;
              if (id === result) {
                tmp15 = _null;
              }
              const mutableParticipants = store.getMutableParticipants(channel.id, tmp12(5080).StageChannelParticipantNamedIndex.SPEAKER);
              const length = mutableParticipants.filter((type) => type.type === callback(table[12]).StageChannelParticipantTypes.STREAM).length;
              const diff = mutableParticipants.length - length;
              let size;
              const diff1 = store.getParticipantCount(voiceChannelId) - length;
              if (tmp15 != null) {
                const party2 = tmp15.party;
                if (party2 != null) {
                  size = party2.size;
                }
              }
              let num = 0;
              if (null != size) {
                num = tmp15.party.size[1];
              }
              let obj = { application_id: null, name: null, type: null, timestamps: null, assets: null, party: null };
              obj[0] = STAGE_APPLICATION_ID;
              let topic = stageInstanceByChannel.topic;
              if (topic == null) {
                topic = channel.topic;
              }
              if (topic == null) {
                let tmp12Result = tmp12(4446);
                topic = tmp12Result.computeChannelName(channel, mergeGuildAvatar, upsertRelationship);
              }
              obj[1] = topic;
              tmp12Result = tmp12(5073);
              obj[2] = tmp12Result.getStageHasMedia(channel.id) ? closure_13.WATCHING : closure_13.LISTENING;
              let start;
              if (tmp15 != null) {
                const timestamps = tmp15.timestamps;
                if (timestamps != null) {
                  start = timestamps.start;
                }
              }
              if (start == null) {
                const _Date = Date;
                const date = new Date();
                start = date.getTime();
              }
              obj = { start: null };
              obj[0] = start;
              obj[3] = obj;
              const icon = guild.icon;
              obj1 = { small_image: null, small_text: null };
              obj1[0] = icon;
              obj1[1] = guild.name;
              obj[4] = obj1;
              obj2 = { id: null, size: null };
              obj2[0] = result;
              const items = [diff, ];
              const _Math = Math;
              items[1] = Math.max(diff1, num);
              obj2[1] = items;
              obj[5] = obj2;
              tmp2 = obj;
            }
          }
        }
      }
    }
  }
  const tmp30 = importDefault(659)(tmp2, _null);
  let flag = !tmp30;
  if (!tmp30) {
    _null = tmp2;
    flag = true;
  }
  return flag;
}
({ ActivityTypes: map1, GuildFeatures: closure_14, Permissions: closure_15, RTCConnectionStates: closure_16 } = ME);
let c17 = null;
class StageChannelSelfRichPresenceStore extends Store {
}
const prototype = StageChannelSelfRichPresenceStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ensureGuildLoaded, createGuildRecordFromRust, createRTCConnection, handleConnectionOpen, getActiveStageChannelIds, handleStageInstanceCreateOrUpdate);
};
prototype["getActivity"] = function getActivity() {
  return c17;
};
StageChannelSelfRichPresenceStore.displayName = "StageChannelSelfRichPresenceStore";
const stageChannelSelfRichPresenceStore = new StageChannelSelfRichPresenceStore(require("dispatcher"), {
  CONNECTION_OPEN: handleUpdateActivity,
  STAGE_INSTANCE_CREATE: handleUpdateActivity,
  STAGE_INSTANCE_UPDATE: handleUpdateActivity,
  STAGE_INSTANCE_DELETE: handleUpdateActivity,
  VOICE_CHANNEL_SELECT: handleUpdateActivity,
  RTC_CONNECTION_STATE: function handleUpdateRTCConnection(state) {
    let num;
    if (_null != null) {
      const party = _null.party;
      if (party != null) {
        const size = party.size;
        if (size != null) {
          num = size[1];
        }
      }
    }
    if (num == null) {
      num = 0;
    }
    let tmp = state.state !== constants3.RTC_CONNECTED;
    if (!tmp) {
      tmp = num > 0;
    }
    let tmp2 = !tmp;
    if (!tmp) {
      tmp2 = handleUpdateActivity();
    }
    return tmp2;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    let _require;
    if (null != c17) {
      const result = _require(9262).unpackStageChannelParty(c17);
      _require = result;
      const obj = _require(9262);
      if (tmp5) {
        handleUpdateActivity();
      }
      tmp5 = null != result && null != voiceStates.find((channelId) => channelId.channelId === _undefined.channelId);
    }
  }
});
let result = require("createRTCConnection").fileFinishedImporting("modules/stage_channels/StageChannelSelfRichPresenceStore.tsx");

export default stageChannelSelfRichPresenceStore;
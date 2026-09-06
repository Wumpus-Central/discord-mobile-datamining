// discord_app/modules/stage_channels/StageChannelSelfRichPresenceStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import _modDef1332 from "../../../_runtime/metro/01332__.js";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import StageChannelParticipants from "StageChannelParticipants.tsx";
import StageChannelRichPresenceUtils from "StageChannelRichPresenceUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import StageChannelParticipantStore from "StageChannelParticipantStore.tsx";
import StageInstanceStore from "StageInstanceStore.tsx";

require = fn;
function handleUpdateActivity() {
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  let tmp2 = null;
  if (null != voiceChannelId) {
    const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(voiceChannelId);
    tmp2 = null;
    if (null != stageInstanceByChannel) {
      const channel = ChannelStore.getChannel(voiceChannelId);
      tmp2 = null;
      if (null != channel) {
        let obj1 = PermissionUtilsAll;
        tmp2 = null;
        if (obj1.canEveryone(constants2.VIEW_CHANNEL, channel)) {
          const guild = GuildStore.getGuild(channel.getGuildId());
          tmp2 = null;
          if (null != guild) {
            const features = guild.features;
            tmp2 = null;
            if (features.has(constants.DISCOVERABLE)) {
              let obj2 = StageChannelRichPresenceUtils;
              const result = obj2.packStageChannelPartyId(channel, stageInstanceByChannel);
              let id;
              if (timestamps != null) {
                const party = timestamps.party;
                if (party != null) {
                  id = party.id;
                }
              }
              let tmp15 = null;
              if (id === result) {
                tmp15 = timestamps;
              }
              const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
                channel.id,
                tmp12(5425).StageChannelParticipantNamedIndex.SPEAKER,
              );
              const length = mutableParticipants.filter(
                (type) => type.type === StageChannelParticipants.StageChannelParticipantTypes.STREAM,
              ).length;
              const diff = mutableParticipants.length - length;
              let size;
              const diff1 = StageChannelParticipantStore.getParticipantCount(voiceChannelId) - length;
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
              timestamps = {
                application_id: STAGE_APPLICATION_ID,
                name: null,
                type: null,
                timestamps: null,
                assets: null,
                party: null,
              };
              let topic = stageInstanceByChannel.topic;
              if (topic == null) {
                topic = channel.topic;
              }
              if (topic == null) {
                let tmp12Result = tmp12(4713);
                topic = tmp12Result.computeChannelName(channel, UserStore, RelationshipStore);
              }
              timestamps.name = topic;
              tmp12Result = tmp12(5417);
              timestamps.type = tmp12Result.getStageHasMedia(channel.id) ? map1.WATCHING : map1.LISTENING;
              let start;
              if (tmp15 != null) {
                timestamps = tmp15.timestamps;
                if (timestamps != null) {
                  start = timestamps.start;
                }
              }
              if (start == null) {
                const _Date = Date;
                const date = new Date();
                start = date.getTime();
              }
              timestamps = { start };
              timestamps.timestamps = timestamps;
              const icon = guild.icon;
              obj1 = { small_image: icon, small_text: guild.name };
              timestamps.assets = obj1;
              obj2 = { id: result, size: null };
              const items = [diff];
              const _Math = Math;
              items[1] = Math.max(diff1, num);
              obj2.size = items;
              timestamps.party = obj2;
              tmp2 = timestamps;
            }
          }
        }
      }
    }
  }
  const tmp30 = _modDef1332(tmp2, timestamps);
  let flag = !tmp30;
  if (!tmp30) {
    timestamps = tmp2;
    flag = true;
  }
  return flag;
}
const STAGE_APPLICATION_ID = fn(5414).STAGE_APPLICATION_ID;
const Constants = fn(1074);
({
  ActivityTypes: map1,
  GuildFeatures: closure_14,
  Permissions: closure_15,
  RTCConnectionStates: closure_16,
} = Constants);
let timestamps = null;
const Store = initializeDefault.Store;
class StageChannelSelfRichPresenceStore extends Store {}
const prototype = StageChannelSelfRichPresenceStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(
    ChannelStore,
    GuildStore,
    RTCConnectionStore,
    SelectedChannelStore,
    StageChannelParticipantStore,
    StageInstanceStore,
  );
};
prototype["getActivity"] = function getActivity() {
  return obj;
};
StageChannelSelfRichPresenceStore.displayName = "StageChannelSelfRichPresenceStore";
timestamps = {
  CONNECTION_OPEN: handleUpdateActivity,
  STAGE_INSTANCE_CREATE: handleUpdateActivity,
  STAGE_INSTANCE_UPDATE: handleUpdateActivity,
  STAGE_INSTANCE_DELETE: handleUpdateActivity,
  VOICE_CHANNEL_SELECT: handleUpdateActivity,
  RTC_CONNECTION_STATE: function handleUpdateRTCConnection(state) {
    let num;
    if (obj != null) {
      const party = obj.party;
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
    c0 = undefined;
    if (null != obj) {
      obj = StageChannelRichPresenceUtils;
      const result = obj.unpackStageChannelParty(obj);
      c0 = result;
      if (tmp5) {
        handleUpdateActivity();
      }
      tmp5 = null != result && null != voiceStates.find((channelId) => channelId.channelId === _undefined.channelId);
    }
  },
};
const stageChannelSelfRichPresenceStore = new StageChannelSelfRichPresenceStore(DispatcherDefault, timestamps);
let size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/StageChannelSelfRichPresenceStore.tsx");

export default stageChannelSelfRichPresenceStore;

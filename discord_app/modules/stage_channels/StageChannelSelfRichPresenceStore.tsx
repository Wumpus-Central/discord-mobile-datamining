// discord_app/modules/stage_channels/StageChannelSelfRichPresenceStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import _modDef1342 from "../../../_runtime/metro/01342__.js";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import useChannelName from "../channel/useChannelName.tsx";
import StageChannelsConstants from "StageChannelsConstants.tsx";
import StageMediaHooks from "StageMediaHooks.tsx";
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
import Constants from "../../Constants.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

let closure_14;
let closure_15;
let closure_16;
let map1;
function handleUpdateActivity() {
  let items;
  let obj4;
  let obj5;
  let obj6;
  let tmp12Result2;
  let topic;
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  let tmp2 = null;
  if (null != voiceChannelId) {
    const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(voiceChannelId);
    tmp2 = null;
    if (null != stageInstanceByChannel) {
      const channel = ChannelStore.getChannel(voiceChannelId);
      tmp2 = null;
      if (null != channel) {
        tmp2 = null;
        const obj2 = PermissionUtilsAll;
        if (obj2.canEveryone(constants2.VIEW_CHANNEL, channel)) {
          const guild = GuildStore.getGuild(channel.getGuildId());
          tmp2 = null;
          if (null != guild) {
            const features = guild.features;
            tmp2 = null;
            if (features.has(constants.DISCOVERABLE)) {
              const obj3 = StageChannelRichPresenceUtils;
              const result = obj3.packStageChannelPartyId(channel, stageInstanceByChannel);
              let id;
              if (obj != null) {
                const party = obj.party;
                if (party != null) {
                  id = party.id;
                }
              }
              let tmp15 = null;
              if (id === result) {
                tmp15 = obj;
              }
              const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
                channel.id,
                StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER,
              );
              const length = mutableParticipants.filter(
                (type) => type.type === StageChannelParticipants.StageChannelParticipantTypes.STREAM,
              ).length;
              const diff = mutableParticipants.length - length;
              size = undefined;
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
              obj = {
                application_id: STAGE_APPLICATION_ID,
                name: topic,
                type: tmp12Result2.getStageHasMedia(channel.id) ? map1.WATCHING : map1.LISTENING,
                timestamps: obj4,
                assets: obj5,
                party: obj6,
              };
              topic = stageInstanceByChannel.topic;
              if (topic == null) {
                topic = channel.topic;
              }
              if (topic == null) {
                const tmp12Result = useChannelName;
                topic = tmp12Result.computeChannelName(channel, UserStore, RelationshipStore);
              }
              let start;
              tmp12Result2 = StageMediaHooks;
              if (tmp15 != null) {
                const timestamps = tmp15.timestamps;
                if (timestamps != null) {
                  start = timestamps.start;
                }
              }
              if (start == null) {
                const _Date = Date;
                const self = this;
                const self2 = this;
                const date = new Date();
                start = date.getTime();
              }
              const icon = guild.icon;
              obj6 = { id: result, size: items };
              items = [diff];
              const _Math = Math;
              obj4 = { start };
              obj5 = { small_image: icon, small_text: guild.name };
              items[1] = Math.max(diff1, num);
              tmp2 = obj;
            }
          }
        }
      }
    }
  }
  let flag = !_modDef1342(tmp2, obj);
  _modDef1342(tmp2, obj);
  if (flag) {
    obj = tmp2;
    flag = true;
  }
  return flag;
}
const STAGE_APPLICATION_ID = StageChannelsConstants.STAGE_APPLICATION_ID;
({
  ActivityTypes: map1,
  GuildFeatures: closure_14,
  Permissions: closure_15,
  RTCConnectionStates: closure_16,
} = Constants);
let obj = null;
const Store = get_initializedDefault.Store;
class StageChannelSelfRichPresenceStore extends Store {
  initialize() {
    this.waitFor(
      ChannelStore,
      GuildStore,
      RTCConnectionStore,
      SelectedChannelStore,
      StageChannelParticipantStore,
      StageInstanceStore,
    );
  }
  getActivity() {
    return obj;
  }
}
const prototype = StageChannelSelfRichPresenceStore.prototype;
StageChannelSelfRichPresenceStore.displayName = "StageChannelSelfRichPresenceStore";
obj = {
  CONNECTION_OPEN: handleUpdateActivity,
  STAGE_INSTANCE_CREATE: handleUpdateActivity,
  STAGE_INSTANCE_UPDATE: handleUpdateActivity,
  STAGE_INSTANCE_DELETE: handleUpdateActivity,
  VOICE_CHANNEL_SELECT: handleUpdateActivity,
  RTC_CONNECTION_STATE: function handleUpdateRTCConnection(state) {
    let num;
    state = state.state;
    if (obj != null) {
      const party = obj.party;
      if (party != null) {
        size = party.size;
        if (size != null) {
          num = size[1];
        }
      }
    }
    if (num == null) {
      num = 0;
    }
    const tmp = state !== constants3.RTC_CONNECTED || num > 0;
    const tmp2 = !tmp && handleUpdateActivity();
    return tmp2;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    let c0;
    if (null != obj) {
      obj = StageChannelRichPresenceUtils;
      const result = obj.unpackStageChannelParty(obj);
      c0 = result;
      const tmp5 =
        null != result && null != voiceStates.find((channelId) => channelId.channelId === _undefined.channelId);
      if (tmp5) {
        handleUpdateActivity();
      }
    }
  },
};
const stageChannelSelfRichPresenceStore = new StageChannelSelfRichPresenceStore(DispatcherDefault, obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/stage_channels/StageChannelSelfRichPresenceStore.tsx");

export default stageChannelSelfRichPresenceStore;

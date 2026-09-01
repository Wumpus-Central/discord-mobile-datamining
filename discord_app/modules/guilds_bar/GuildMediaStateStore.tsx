// discord_app/modules/guilds_bar/GuildMediaStateStore.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import shallowEqualDefault from "../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import set from "../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_3 from "../activities/EmbeddedActivitiesStore.tsx";
import closure_4 from "../experiments/apex/ApexExperimentStore.tsx";
import closure_5 from "../guild_scheduled_events/GuildScheduledEventStore.tsx";
import closure_6 from "../stage_channels/StageInstanceStore.tsx";
import { isVoiceChannel } from "../../records/ChannelRecord.tsx";
import closure_8 from "../../stores/ApplicationStreamingStore.tsx";
import closure_9 from "../../stores/AuthenticationStore.tsx";
import closure_10 from "../../stores/ChannelStore.tsx";
import closure_11 from "../../stores/GuildStore.tsx";
import closure_12 from "../../stores/PermissionStore.tsx";
import closure_13 from "../../stores/RelationshipStore.tsx";
import closure_14 from "../../stores/SelectedChannelStore.tsx";
import closure_15 from "../../stores/UserGuildSettingsStore.tsx";
import closure_16 from "../../stores/VoiceStateStore.tsx";
import ME from "../../Constants.tsx";
import { getEmbeddedActivityLocationChannelId } from "../activities/utils/embeddedActivityLocationUtils.tsx";

require = arg1;
function markAllStale() {
  let flag = 0 !== map.size;
  if (flag) {
    closure_21 = closure_21 + 1;
    closure_22 = closure_22 + 1;
    flag = true;
  }
  return flag;
}
function markGuildStale(guildId) {
  if (null != guildId) {
    if (guildId !== closure_18) {
      closure_22 = closure_22 + 1;
      const value = map.get(guildId);
      let flag = null != value;
      if (flag) {
        value.version = -1;
        flag = true;
      }
      return flag;
    }
  }
  return false;
}
function reset() {
  let flag = 0 !== map.size;
  if (flag) {
    map.clear();
    closure_21 = closure_21 + 1;
    closure_22 = closure_22 + 1;
    flag = true;
  }
  return flag;
}
function isBadgeableVoiceChannel(closure_0, channelId, afkChannelId, skipMutedVcs) {
  if (null == channelId) {
    return false;
  } else {
    const basicChannel = store.getBasicChannel(channelId);
    let tmp3 = null != basicChannel;
    if (tmp3) {
      tmp3 = basicChannel.type !== set.ChannelTypes.GUILD_STAGE_VOICE;
    }
    if (tmp3) {
      tmp3 = afkChannelId !== basicChannel.id;
    }
    if (tmp3) {
      let canBasicChannelResult = closure_12.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
      if (canBasicChannelResult) {
        let tmp9 = !skipMutedVcs;
        if (skipMutedVcs) {
          tmp9 = !closure_15.isGuildOrCategoryOrChannelMuted(closure_0, channelId);
        }
        canBasicChannelResult = tmp9;
      }
      tmp3 = canBasicChannelResult;
    }
    return tmp3;
  }
}
function computeGuildMediaState(closure_0) {
  const _require = closure_0;
  let tmp2 = (function getSharedState() {
    if (null != obj) {
      if (closure_24 === closure_22) {
        return obj;
      }
    }
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    let channel = null;
    if (null != voiceChannelId) {
      channel = store.getChannel(voiceChannelId);
    }
    blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
    map = new Map();
    allApplicationStreams = allApplicationStreams.getAllApplicationStreams();
    for (const item10029 of allApplicationStreams) {
      let tmp7 = item10029;
      if (null != item10029.guildId) {
        let tmp8 = item10029;
        if (!blockedOrIgnoredIDs.has(tmp7.ownerId)) {
          let tmp9 = item10029;
          let value = map.get(tmp7.guildId);
          let arr = value;
          if (null != value) {
            let tmp13 = value;
            let tmp14 = item10029;
            arr = arr.push(tmp7.channelId);
          } else {
            let tmp11 = item10029;
            let items = [tmp7.channelId];
            let result = map.set(tmp7.guildId, items);
          }
        }
      }
      continue;
    }
    obj = {
      skipMutedVcs: callback(13360).getIsDontBadgeMutedVcsEnabled("GuildMediaStateStore"),
      currentUserId: id.getId(),
      selectedVoiceChannelId: voiceChannelId,
      selectedVoiceGuildId: null,
      selectedVoiceChannelHasVideo: null,
      isSelectedVoiceChannelStage: null,
      blockedOrIgnoredUserIds: null,
      streamChannelIdsByGuild: null,
    };
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    obj[3] = guild_id;
    let hasVideoResult = null != voiceChannelId;
    if (hasVideoResult) {
      hasVideoResult = closure_16.hasVideo(voiceChannelId);
    }
    obj[4] = hasVideoResult;
    let flag;
    if (channel != null) {
      flag = channel.isGuildStageVoice();
    }
    if (flag == null) {
      flag = false;
    }
    obj[5] = flag;
    obj[6] = blockedOrIgnoredIDs;
    obj[7] = map;
    closure_24 = closure_22;
    return obj;
  })();
  importDefault = tmp2;
  if (tmp2.selectedVoiceGuildId !== closure_0) {
    if (closure_15.isMuted(closure_0)) {
      return closure_19;
    }
  }
  embeddedActivitiesForGuild = embeddedActivitiesForGuild.getEmbeddedActivitiesForGuild(closure_0);
  if (tmp2.selectedVoiceGuildId === closure_0) {
    let obj = {
      audio: true,
      video: null,
      screenshare: null,
      liveStage: null,
      activeEvent: null,
      activity: null,
      isCurrentUserConnected: true,
    };
    obj[1] = tmp2.selectedVoiceChannelHasVideo;
    obj[2] = null != activeStreamForUser.getActiveStreamForUser(tmp2.currentUserId, closure_0);
    obj[3] = tmp2.isSelectedVoiceChannelStage;
    const guildActiveEvent = require("../guild_scheduled_events/useGuildScheduledEvents.tsx").getGuildActiveEvent(
      closure_0,
    );
    let channel_id;
    if (guildActiveEvent != null) {
      channel_id = guildActiveEvent.channel_id;
    }
    obj[4] = channel_id === tmp2.selectedVoiceChannelId;
    obj[5] = embeddedActivitiesForGuild.length > 0;
    return obj;
  } else {
    let found = embeddedActivitiesForGuild;
    if (0 !== tmp2.blockedOrIgnoredUserIds.size) {
      found = embeddedActivitiesForGuild.filter((userIds) => {
        const items = [...userIds.userIds];
        return !callback(closure_1_2[18]).hasBlockedOrIgnoredUserIds(items, lib.blockedOrIgnoredUserIds);
      });
    }
    guild = guild.getGuild(closure_0);
    if (guild != null) {
      const afkChannelId = guild.afkChannelId;
    }
    const voiceStates = authStore.getVoiceStates(closure_0);
    let flag = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = false;
      while (keys[tmp] !== undefined) {
        let tmp46 = tmp12;
        let blockedOrIgnoredUserIds2 = tmp2.blockedOrIgnoredUserIds;
        if (blockedOrIgnoredUserIds2.has(tmp12)) {
          continue;
        } else {
          let tmp13 = isBadgeableVoiceChannel;
          let num = 0;
          let tmp14 = closure_0;
          let tmp15 = afkChannelId;
          flag2 = true;
          if (isBadgeableVoiceChannel(closure_0, voiceStates[tmp12].channelId, afkChannelId, tmp2.skipMutedVcs)) {
            break;
          }
        }
        continue;
      }
    }
    const usersWithVideo = authStore.getUsersWithVideo(closure_0);
    for (const item10049 of usersWithVideo) {
      let blockedOrIgnoredUserIds = tmp2.blockedOrIgnoredUserIds;
      let tmp20 = item10049;
      if (!blockedOrIgnoredUserIds.has(item10049)) {
        let tmp22 = item10049;
        let tmp23 = voiceStates[tmp20];
        let channelId;
        let tmp21 = isBadgeableVoiceChannel;
        if (tmp23 != null) {
          channelId = tmp23.channelId;
        }
        let num2 = 0;
        let tmp25 = arg0;
        let tmp26 = channelId;
        let tmp27 = afkChannelId;
        if (tmp21(arg0, channelId, afkChannelId, tmp2.skipMutedVcs)) {
          flag = true;
          let tmp28 = obj;
          obj.return();
          break;
        }
        let streamChannelIdsByGuild = tmp2.streamChannelIdsByGuild;
        let value = streamChannelIdsByGuild.get(arg0);
        let someResult = null != value;
        if (someResult) {
          someResult = value.some((id) => {
            const skipMutedVcs = lib.skipMutedVcs;
            let tmp = !skipMutedVcs;
            if (skipMutedVcs) {
              tmp = !closure_1_15.isGuildOrCategoryOrChannelMuted(closure_0, id);
            }
            return tmp;
          });
        }
        let tmp30 = importDefault;
        let tmp31 = dependencyMap;
        let obj3 = DISCORD_EPOCHDefault;
        let tmp32 = stageInstancesByGuild;
        let keys1 = obj3.keys(stageInstancesByGuild.getStageInstancesByGuild(arg0));
        let tmp34 = _require;
        let someResult1 = keys1.some((arg0) => {
          const basicChannel = store.getBasicChannel(arg0);
          let tmp2 = null != basicChannel;
          if (tmp2) {
            tmp2 = lib(5360)(basicChannel, closure_12);
          }
          return tmp2;
        });
        let obj5 = getEmbeddedActivityLocationChannelId;
        let first = found[0];
        let _location;
        if (first != null) {
          _location = first.location;
        }
        let embeddedActivityLocationChannelId = obj5.getEmbeddedActivityLocationChannelId(_location);
        let tmp34Result = tmp34(8144);
        let tmp38 = store;
        if (tmp34Result.isActivitiesInTextEnabled(store.getChannel(embeddedActivityLocationChannelId))) {
          let someResult2 = found.length > 0;
        } else {
          someResult2 = found.some((location) => {
            const channel = store.getChannel(callback(4111).getEmbeddedActivityLocationChannelId(location.location));
            let tmp2 = null != channel;
            if (tmp2) {
              tmp2 = callback2(channel.type);
            }
            return tmp2;
          });
        }
        obj = {
          audio: null,
          video: null,
          screenshare: null,
          liveStage: null,
          activeEvent: null,
          activity: null,
          isCurrentUserConnected: false,
        };
        obj[0] = flag2;
        obj[1] = flag;
        obj[2] = someResult;
        obj[3] = someResult1;
        tmp34Result = tmp34(9631);
        obj[4] = null != tmp34Result.getGuildActiveEvent(arg0);
        obj[5] = someResult2;
        return obj;
      }
      continue;
    }
  }
}
function handleGuildCreateOrDelete(guild) {
  let flag = 0 !== map.size;
  if (flag) {
    closure_21 = closure_21 + 1;
    closure_22 = closure_22 + 1;
    flag = true;
  }
  map.delete(guild.guild.id);
  return flag;
}
({ BasicPermissions: closure_17, ME: closure_18 } = ME);
let closure_19 = Object.freeze({
  audio: false,
  video: false,
  screenshare: false,
  liveStage: false,
  activeEvent: false,
  activity: false,
  isCurrentUserConnected: false,
});
let map = new Map();
let c21 = 0;
let c22 = 0;
let c23 = null;
let c24 = -1;
const Store = initializeDefault.Store;
class GuildMediaStateStore extends Store {}
const prototype = GuildMediaStateStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(
    closure_4,
    closure_8,
    closure_9,
    closure_10,
    closure_3,
    closure_5,
    closure_11,
    closure_12,
    closure_13,
    closure_14,
    closure_6,
    closure_15,
    closure_16,
  );
  const items = [
    closure_4,
    closure_8,
    closure_10,
    closure_3,
    closure_5,
    closure_11,
    closure_12,
    closure_13,
    closure_14,
    closure_6,
    closure_15,
  ];
  this.syncWith(items, markAllStale);
};
prototype["getGuildMediaState"] = function getGuildMediaState(closure_0) {
  let obj = map;
  const iter = map.get(closure_0);
  if (null != iter) {
    if (iter.version === c21) {
      return iter.value;
    }
  }
  const tmp2 = computeGuildMediaState(closure_0);
  let value = tmp2;
  if (null != iter) {
    value = tmp2;
    if (shallowEqualDefault(iter.value, tmp2)) {
      value = iter.value;
    }
  }
  obj = { value, version: c21 };
  const result = obj.set(closure_0, obj);
  return value;
};
GuildMediaStateStore.displayName = "GuildMediaStateStore";
const guildMediaStateStore = new GuildMediaStateStore(dispatcherDefault, {
  CONNECTION_OPEN: reset,
  CONNECTION_OPEN_SUPPLEMENTAL: reset,
  CONNECTION_CLOSED: reset,
  OVERLAY_INITIALIZE: reset,
  LOGOUT: reset,
  GUILD_CREATE: handleGuildCreateOrDelete,
  GUILD_DELETE: handleGuildCreateOrDelete,
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(arg0) {
    let flag = false;
    while (tmp !== undefined) {
      let tmp3 = markGuildStale;
      let tmp4 = markGuildStale(tmp2.guildId) || flag;
      flag = tmp4;
      continue;
    }
    return flag;
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(guildId) {
    guildId = guildId.guildId;
    let flag = false;
    if (null != guildId) {
      flag = false;
      if (guildId !== closure_18) {
        closure_22 = closure_22 + 1;
        const value = map.get(guildId);
        let flag2 = null != value;
        if (flag2) {
          value.version = -1;
          flag2 = true;
        }
        flag = flag2;
      }
    }
    return flag;
  },
});
let result = require("set").fileFinishedImporting("modules/guilds_bar/GuildMediaStateStore.tsx");

export default guildMediaStateStore;

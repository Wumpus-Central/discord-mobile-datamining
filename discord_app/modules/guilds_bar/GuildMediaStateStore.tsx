// discord_app/modules/guilds_bar/GuildMediaStateStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import discord_common_shallowEqualDefault from "../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ChannelTypes from "../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import BlockedUserUtils from "../blocking/BlockedUserUtils.tsx";
import EmbeddedActivitiesStore from "../activities/EmbeddedActivitiesStore.tsx";
import ApexExperimentStore from "../experiments/apex/ApexExperimentStore.tsx";
import GuildScheduledEventStore from "../guild_scheduled_events/GuildScheduledEventStore.tsx";
import StageInstanceStore from "../stage_channels/StageInstanceStore.tsx";
import ApplicationStreamingStore from "../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";

require = fn;
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
    if (guildId !== collapsedCategories) {
      closure_22 = closure_22 + 1;
      value = map.get(guildId);
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
function isBadgeableVoiceChannel(guildId, channelId, afkChannelId, skipMutedVcs) {
  if (null == channelId) {
    return false;
  } else {
    const basicChannel = ChannelStore.getBasicChannel(channelId);
    let tmp3 = null != basicChannel;
    if (tmp3) {
      tmp3 = basicChannel.type !== ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE;
    }
    if (tmp3) {
      tmp3 = afkChannelId !== basicChannel.id;
    }
    if (tmp3) {
      let canBasicChannelResult = PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
      if (canBasicChannelResult) {
        let tmp9 = !skipMutedVcs;
        if (skipMutedVcs) {
          tmp9 = !UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(guildId, channelId);
        }
        canBasicChannelResult = tmp9;
      }
      tmp3 = canBasicChannelResult;
    }
    return tmp3;
  }
}
function computeGuildMediaState(guildId) {
  _require = guildId;
  let tmp2 = (function getSharedState() {
    if (null != obj) {
      if (closure_24 === closure_1_22) {
        return obj;
      }
    }
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    let channel = null;
    if (null != voiceChannelId) {
      channel = ChannelStore.getChannel(voiceChannelId);
    }
    blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
    map = new Map();
    allApplicationStreams = allApplicationStreams.getAllApplicationStreams();
    for (const item10029 of allApplicationStreams) {
      let tmp7 = item10029;
      if (null != item10029.guildId) {
        if (!blockedOrIgnoredIDs.has(tmp7.ownerId)) {
          value = map.get(tmp7.guildId);
          let arr = value;
          if (null != value) {
            arr = arr.push(tmp7.channelId);
          } else {
            let items = [tmp7.channelId];
            let result = map.set(tmp7.guildId, items);
          }
        }
      }
      continue;
    }
    obj = {
      skipMutedVcs: guildId(13708).getIsDontBadgeMutedVcsEnabled("GuildMediaStateStore"),
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
    obj.selectedVoiceGuildId = guild_id;
    let hasVideoResult = null != voiceChannelId;
    if (hasVideoResult) {
      hasVideoResult = VoiceStateStore.hasVideo(voiceChannelId);
    }
    obj.selectedVoiceChannelHasVideo = hasVideoResult;
    let flag;
    if (channel != null) {
      flag = channel.isGuildStageVoice();
    }
    if (flag == null) {
      flag = false;
    }
    obj.isSelectedVoiceChannelStage = flag;
    obj.blockedOrIgnoredUserIds = blockedOrIgnoredIDs;
    obj.streamChannelIdsByGuild = map;
    closure_24 = closure_1_22;
    return obj;
  })();
  importDefault = tmp2;
  if (tmp2.selectedVoiceGuildId !== guildId) {
    if (UserGuildSettingsStore.isMuted(guildId)) {
      return closure_19;
    }
  }
  const embeddedActivitiesForGuild = EmbeddedActivitiesStore.getEmbeddedActivitiesForGuild(guildId);
  if (tmp2.selectedVoiceGuildId === guildId) {
    let obj = {
      audio: true,
      video: tmp2.selectedVoiceChannelHasVideo,
      screenshare: null != ApplicationStreamingStore.getActiveStreamForUser(tmp2.currentUserId, guildId),
      liveStage: tmp2.isSelectedVoiceChannelStage,
      activeEvent: null,
      activity: null,
      isCurrentUserConnected: true,
    };
    const guildActiveEvent = require("useGuildScheduledEvents").getGuildActiveEvent(guildId);
    let channel_id;
    if (guildActiveEvent != null) {
      channel_id = guildActiveEvent.channel_id;
    }
    obj.activeEvent = channel_id === tmp2.selectedVoiceChannelId;
    obj.activity = embeddedActivitiesForGuild.length > 0;
    return obj;
  } else {
    let found = embeddedActivitiesForGuild;
    if (0 !== tmp2.blockedOrIgnoredUserIds.size) {
      found = embeddedActivitiesForGuild.filter((userIds) => {
        const items = [...userIds.userIds];
        return !BlockedUserUtils.hasBlockedOrIgnoredUserIds(items, closure_1.blockedOrIgnoredUserIds);
      });
    }
    const guild = GuildStore.getGuild(guildId);
    if (guild != null) {
      const afkChannelId = guild.afkChannelId;
    }
    const voiceStates = VoiceStateStore.getVoiceStates(guildId);
    let flag = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = false;
      while (keys[tmp] !== undefined) {
        let blockedOrIgnoredUserIds2 = tmp2.blockedOrIgnoredUserIds;
        if (blockedOrIgnoredUserIds2.has(tmp12)) {
          continue;
        } else {
          flag2 = true;
          if (isBadgeableVoiceChannel(guildId, voiceStates[tmp12].channelId, afkChannelId, tmp2.skipMutedVcs)) {
            break;
          }
        }
        continue;
      }
    }
    const usersWithVideo = VoiceStateStore.getUsersWithVideo(guildId);
    for (const item10049 of usersWithVideo) {
      let blockedOrIgnoredUserIds = tmp2.blockedOrIgnoredUserIds;
      let tmp20 = item10049;
      if (!blockedOrIgnoredUserIds.has(item10049)) {
        let tmp23 = voiceStates[tmp20];
        let channelId;
        let tmp21 = isBadgeableVoiceChannel;
        if (tmp23 != null) {
          channelId = tmp23.channelId;
        }
        if (tmp21(arg0, channelId, afkChannelId, tmp2.skipMutedVcs)) {
          flag = true;
          obj.return();
          break;
        }
        let streamChannelIdsByGuild = tmp2.streamChannelIdsByGuild;
        value = streamChannelIdsByGuild.get(arg0);
        let someResult = null != value;
        if (someResult) {
          someResult = value.some((item) => {
            const skipMutedVcs = closure_1.skipMutedVcs;
            let tmp = !skipMutedVcs;
            if (skipMutedVcs) {
              tmp = !UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(closure_0, item);
            }
            return tmp;
          });
        }
        let obj3 = SnowflakeUtilsDefault;
        let keys1 = obj3.keys(StageInstanceStore.getStageInstancesByGuild(arg0));
        let tmp34 = _require;
        let someResult1 = keys1.some((item) => {
          const basicChannel = ChannelStore.getBasicChannel(item);
          let tmp2 = null != basicChannel;
          if (tmp2) {
            tmp2 = closure_1(5416)(basicChannel, PermissionStore);
          }
          return tmp2;
        });
        let obj5 = require("embeddedActivityLocationUtils");
        let first = found[0];
        let _location;
        if (first != null) {
          _location = first.location;
        }
        let embeddedActivityLocationChannelId = obj5.getEmbeddedActivityLocationChannelId(_location);
        let tmp34Result = tmp34(9546);
        if (tmp34Result.isActivitiesInTextEnabled(ChannelStore.getChannel(embeddedActivityLocationChannelId))) {
          let someResult2 = found.length > 0;
        } else {
          someResult2 = found.some((location) => {
            const channel = ChannelStore.getChannel(
              guildId(4189).getEmbeddedActivityLocationChannelId(location.location),
            );
            let tmp2 = null != channel;
            if (tmp2) {
              tmp2 = isVoiceChannel(channel.type);
            }
            return tmp2;
          });
        }
        obj = {
          audio: flag2,
          video: flag,
          screenshare: someResult,
          liveStage: someResult1,
          activeEvent: null,
          activity: null,
          isCurrentUserConnected: false,
        };
        tmp34Result = tmp34(9662);
        obj.activeEvent = null != tmp34Result.getGuildActiveEvent(arg0);
        obj.activity = someResult2;
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
const isVoiceChannel = fn(1961).isVoiceChannel;
const Constants = fn(1074);
({ BasicPermissions: closure_17, ME: closure_18 } = Constants);
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
const version = 0;
let closure_22 = 0;
let c23 = null;
let c24 = -1;
const Store = initializeDefault.Store;
class GuildMediaStateStore extends Store {}
const prototype = GuildMediaStateStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(
    ApexExperimentStore,
    ApplicationStreamingStore,
    AuthenticationStore,
    ChannelStore,
    EmbeddedActivitiesStore,
    GuildScheduledEventStore,
    GuildStore,
    PermissionStore,
    RelationshipStore,
    SelectedChannelStore,
    StageInstanceStore,
    UserGuildSettingsStore,
    VoiceStateStore,
  );
  const items = [
    ApexExperimentStore,
    ApplicationStreamingStore,
    ChannelStore,
    EmbeddedActivitiesStore,
    GuildScheduledEventStore,
    GuildStore,
    PermissionStore,
    RelationshipStore,
    SelectedChannelStore,
    StageInstanceStore,
    UserGuildSettingsStore,
  ];
  this.syncWith(items, markAllStale);
};
prototype["getGuildMediaState"] = function getGuildMediaState(guildId) {
  let obj = map;
  const iter = map.get(guildId);
  if (null != iter) {
    if (iter.version === version) {
      return iter.value;
    }
  }
  const tmp2 = computeGuildMediaState(guildId);
  value = tmp2;
  if (null != iter) {
    value = tmp2;
    if (discord_common_shallowEqualDefault(iter.value, tmp2)) {
      value = iter.value;
    }
  }
  obj = { value, version };
  const result = obj.set(guildId, obj);
  return value;
};
GuildMediaStateStore.displayName = "GuildMediaStateStore";
const guildMediaStateStore = new GuildMediaStateStore(DispatcherDefault, {
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
      if (guildId !== collapsedCategories) {
        closure_22 = closure_22 + 1;
        value = map.get(guildId);
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/GuildMediaStateStore.tsx");

export default guildMediaStateStore;

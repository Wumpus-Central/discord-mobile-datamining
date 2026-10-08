// discord_app/modules/guilds_bar/GuildMediaStateStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import discord_common_shallowEqualDefault from "../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ChannelTypes from "../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import embeddedActivityLocationUtils from "../activities/utils/embeddedActivityLocationUtils.tsx";
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
    closure_23 = closure_23 + 1;
    closure_24 = closure_24 + 1;
    flag = true;
  }
  return flag;
}
function markGuildStale(guildId) {
  if (null != guildId) {
    if (guildId !== constants2) {
      let selectedVoiceGuildId;
      if (_null != null) {
        selectedVoiceGuildId = _null.selectedVoiceGuildId;
      }
      if (selectedVoiceGuildId === guildId) {
        closure_24 = closure_24 + 1;
      }
      const iter = map.get(guildId);
      let tmp4 = null != iter;
      if (tmp4) {
        let flag = iter.version !== closure_23;
        if (!flag) {
          flag = iter.value !== closure_21;
        }
        if (!flag) {
          flag = !UserGuildSettingsStore.isMuted(guildId);
        }
        if (flag) {
          iter.version = -1;
          flag = true;
        }
        tmp4 = flag;
      }
      return tmp4;
    }
  }
  return false;
}
function reset() {
  let flag = 0 !== map.size;
  if (flag) {
    map.clear();
    closure_23 = closure_23 + 1;
    closure_24 = closure_24 + 1;
    flag = true;
  }
  return flag;
}
function getStreamChannelIdsByGuild(has) {
  if (null != map) {
    if (closure_28 === closure_23) {
      return map;
    }
  }
  map = new Map();
  const allApplicationStreams = ApplicationStreamingStore.getAllApplicationStreams();
  for (const item10020 of allApplicationStreams) {
    if (null != item10020.guildId) {
      if (!arg0.has(item10020.ownerId)) {
        value = map.get(item10020.guildId);
        let arr = value;
        if (null != value) {
          let arr2 = arr.push(item10020.channelId);
        } else {
          let items = [item10020.channelId];
          let result = map.set(item10020.guildId, items);
        }
      }
    }
    continue;
  }
  closure_28 = closure_23;
  return map;
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
      if (closure_26 === closure_1_24) {
        return obj;
      }
    }
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    let channel = null;
    if (null != voiceChannelId) {
      channel = ChannelStore.getChannel(voiceChannelId);
    }
    blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
    obj = {
      skipMutedVcs: guildId(13834).getIsDontBadgeMutedVcsEnabled("GuildMediaStateStore"),
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
    obj.streamChannelIdsByGuild = getStreamChannelIdsByGuild(blockedOrIgnoredIDs);
    closure_26 = closure_1_24;
    return obj;
  })();
  importDefault = tmp2;
  if (tmp2.selectedVoiceGuildId !== guildId) {
    if (UserGuildSettingsStore.isMuted(guildId)) {
      return closure_21;
    }
  }
  const embeddedActivitiesForGuild = EmbeddedActivitiesStore.getEmbeddedActivitiesForGuild(guildId);
  const found = embeddedActivitiesForGuild.filter((location) => {
    const basicChannel = ChannelStore.getBasicChannel(
      embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(location.location),
    );
    let type;
    if (basicChannel != null) {
      type = basicChannel.type;
    }
    let tmp5 = type !== ChannelTypes.ChannelTypes.GUILD_SPACE;
    if (tmp5) {
      let tmp7 = 0 === closure_1.blockedOrIgnoredUserIds.size;
      if (!tmp7) {
        const items = [];
        HermesBuiltin.arraySpread(location.userIds, 0);
        tmp7 = !BlockedUserUtils.hasBlockedOrIgnoredUserIds(items, tmp6.blockedOrIgnoredUserIds);
        const tmpResult = BlockedUserUtils;
      }
      tmp5 = tmp7;
    }
    return tmp5;
  });
  if (tmp2.selectedVoiceGuildId === guildId) {
    const obj2 = {
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
    obj2.activeEvent = channel_id === tmp2.selectedVoiceChannelId;
    obj2.activity = found.length > 0;
    return obj2;
  } else {
    guild = GuildStore.getGuild(guildId);
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
    for (const item10047 of usersWithVideo) {
      let blockedOrIgnoredUserIds = tmp2.blockedOrIgnoredUserIds;
      if (!blockedOrIgnoredUserIds.has(item10047)) {
        let tmp23 = voiceStates[item10047];
        let channelId;
        if (tmp23 != null) {
          channelId = tmp23.channelId;
        }
        if (isBadgeableVoiceChannel(arg0, channelId, afkChannelId, tmp2.skipMutedVcs)) {
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
            tmp2 = closure_1(5890)(basicChannel, PermissionStore);
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
        let tmp34Result = tmp34(8488);
        if (tmp34Result.isActivitiesInTextEnabled(ChannelStore.getChannel(embeddedActivityLocationChannelId))) {
          let someResult2 = found.length > 0;
        } else {
          someResult2 = found.some((location) => {
            const channel = ChannelStore.getChannel(
              guildId(4696).getEmbeddedActivityLocationChannelId(location.location),
            );
            let tmp2 = null != channel;
            if (tmp2) {
              tmp2 = isVoiceChannel(channel.type);
            }
            return tmp2;
          });
        }
        let obj4 = {
          audio: flag2,
          video: flag,
          screenshare: someResult,
          liveStage: someResult1,
          activeEvent: null,
          activity: null,
          isCurrentUserConnected: false,
        };
        let tmp34Result2 = tmp34(8630);
        obj4.activeEvent = null != tmp34Result2.getGuildActiveEvent(arg0);
        obj4.activity = someResult2;
        return obj4;
      }
      continue;
    }
  }
}
function handleRelationshipChange() {
  const blockedOrIgnoredIDs = RelationshipStore.getBlockedOrIgnoredIDs();
  let tmp2 = blockedOrIgnoredIDs !== closure_4;
  if (tmp2) {
    closure_4 = blockedOrIgnoredIDs;
    let flag = 0 !== map.size;
    if (flag) {
      closure_23 = closure_23 + 1;
      closure_24 = closure_24 + 1;
      flag = true;
    }
    tmp2 = flag;
  }
  return tmp2;
}
function handleSelectedChannelChange() {
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  let tmp2 = voiceChannelId !== closure_3;
  if (tmp2) {
    closure_3 = voiceChannelId;
    let flag = 0 !== map.size;
    if (flag) {
      closure_23 = closure_23 + 1;
      closure_24 = closure_24 + 1;
      flag = true;
    }
    tmp2 = flag;
  }
  return tmp2;
}
const isVoiceChannel = fn(2067).isVoiceChannel;
const Constants = fn(1085);
({ BasicPermissions: closure_19, ME: closure_20 } = Constants);
let closure_21 = Object.freeze({
  audio: false,
  video: false,
  screenshare: false,
  liveStage: false,
  activeEvent: false,
  activity: false,
  isCurrentUserConnected: false,
});
new Map();
const version = 0;
let closure_24 = 0;
let c25 = null;
let c26 = -1;
let map = null;
let closure_28 = -1;
const Store = initializeDefault.Store;
class GuildMediaStateStore extends Store {}
const prototype = GuildMediaStateStore.prototype;
prototype["initialize"] = function initialize() {
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  const blockedOrIgnoredIDs = RelationshipStore.getBlockedOrIgnoredIDs();
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
    StageInstanceStore,
    UserGuildSettingsStore,
  ];
  this.syncWith(items, markAllStale);
  const items1 = [RelationshipStore];
  this.syncWith(items1, handleRelationshipChange);
  const items2 = [SelectedChannelStore];
  this.syncWith(items2, handleSelectedChannelChange);
};
prototype["getGuildMediaState"] = function getGuildMediaState(guildId) {
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
  const result = map.set(guildId, { value, version });
  return value;
};
GuildMediaStateStore.displayName = "GuildMediaStateStore";
const guildMediaStateStore = new GuildMediaStateStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const keys = map.keys();
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      if (null == GuildStore.getGuild(nextResult)) {
        let deleteResult = map.delete(tmp4);
      }
      continue;
    }
    return markAllStale();
  },
  CONNECTION_OPEN_SUPPLEMENTAL: markAllStale,
  CONNECTION_CLOSED: markAllStale,
  OVERLAY_INITIALIZE: reset,
  LOGOUT: reset,
  GUILD_CREATE: markAllStale,
  GUILD_DELETE: function handleGuildDelete(guild) {
    let flag = 0 !== map.size;
    if (flag) {
      closure_23 = closure_23 + 1;
      closure_24 = closure_24 + 1;
      flag = true;
    }
    map.delete(guild.guild.id);
    return flag;
  },
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
    let tmp = 0 !== guildId.voiceStates.length || 0 !== guildId.removedVoiceStateUsers.length;
    if (tmp) {
      let flag = false;
      if (null != guildId) {
        flag = false;
        if (guildId !== constants2) {
          let selectedVoiceGuildId;
          if (_null != null) {
            selectedVoiceGuildId = _null.selectedVoiceGuildId;
          }
          if (selectedVoiceGuildId === guildId) {
            closure_24 = closure_24 + 1;
          }
          const iter = map.get(guildId);
          let tmp7 = null != iter;
          if (tmp7) {
            let flag2 = iter.version !== closure_23;
            if (!flag2) {
              flag2 = iter.value !== closure_21;
            }
            if (!flag2) {
              flag2 = !UserGuildSettingsStore.isMuted(guildId);
            }
            if (flag2) {
              iter.version = -1;
              flag2 = true;
            }
            tmp7 = flag2;
          }
          flag = tmp7;
        }
      }
      tmp = flag;
    }
    return tmp;
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/GuildMediaStateStore.tsx");

export default guildMediaStateStore;

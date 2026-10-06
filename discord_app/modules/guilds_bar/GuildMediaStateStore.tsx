// === Module 13536: GuildMediaStateStore ===

// Module 13536 (GuildMediaStateStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import shallowEqualDefault from "shallowEqual" /* 568 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelTypes from "ChannelTypes" /* 1106 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4504 */;
import BlockedUserUtils from "BlockedUserUtils" /* 13538 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7050 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4918 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import VoiceStateStore from "VoiceStateStore" /* 4915 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_23, closure_26, closure_3, closure_4, importDefault;

let closure_19;
let closure_20;
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
    if (guildId !== closure_20) {
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
        let flag = iter.version !== version || iter.value !== closure_21 || !UserGuildSettingsStore.isMuted(guildId);
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
    if (closure_28 === version) {
      return map;
    }
  }
  map = new Map();
  const allApplicationStreams = ApplicationStreamingStore.getAllApplicationStreams();
  for (const item10020 of allApplicationStreams) {
    if (null != item10020.guildId) {
      if (!has.has(item10020.ownerId)) {
        let value = map.get(item10020.guildId);
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
  closure_28 = version;
  return map;
}
function isBadgeableVoiceChannel(guildId, channelId, afkChannelId, skipMutedVcs) {
  if (null == channelId) {
    return false;
  } else {
    const basicChannel = ChannelStore.getBasicChannel(channelId);
    let tmp3 = null != basicChannel && basicChannel.type !== ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE && afkChannelId !== basicChannel.id;
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
  let channel_id;
  let closure_1;
  let id;
  let isSelectedVoiceChannelStage;
  let tmp;
  function getSharedState() {
    let flag;
    let guild_id;
    let hasVideoResult;
    let obj2;
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
    obj = { skipMutedVcs: obj2.getIsDontBadgeMutedVcsEnabled("GuildMediaStateStore"), currentUserId: id.getId(), selectedVoiceChannelId: voiceChannelId, selectedVoiceGuildId: guild_id, selectedVoiceChannelHasVideo: hasVideoResult, isSelectedVoiceChannelStage: flag, blockedOrIgnoredUserIds: blockedOrIgnoredIDs, streamChannelIdsByGuild: getStreamChannelIdsByGuild(blockedOrIgnoredIDs) };
    guild_id = undefined;
    obj2 = guildId(dependencyMap[15]);
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    flag = undefined;
    hasVideoResult = null != voiceChannelId && VoiceStateStore.hasVideo(voiceChannelId);
    if (channel != null) {
      flag = channel.isGuildStageVoice();
    }
    if (flag == null) {
      flag = false;
    }
    closure_26 = closure_1_24;
    return obj;
  }
  _require = guildId;
  let tmp2 = getSharedState();
  importDefault = tmp2;
  if (tmp2.selectedVoiceGuildId !== guildId) {
    if (UserGuildSettingsStore.isMuted(guildId)) {
      return closure_21;
    }
  }
  const embeddedActivitiesForGuild = EmbeddedActivitiesStore.getEmbeddedActivitiesForGuild(guildId);
  const found = embeddedActivitiesForGuild.filter((location) => {
    const getBasicChannel = ChannelStore.getBasicChannel;
    obj = embeddedActivityLocationUtils;
    const basicChannel = getBasicChannel(obj.getEmbeddedActivityLocationChannelId(location.location));
    let type;
    if (basicChannel != null) {
      type = basicChannel.type;
    }
    let tmp6 = type !== ChannelTypes.ChannelTypes.GUILD_SPACE;
    if (tmp6) {
      let tmp8 = 0 === closure_1.blockedOrIgnoredUserIds.size;
      if (!tmp8) {
        const items = [];
        const hasBlockedOrIgnoredUserIds = BlockedUserUtils.hasBlockedOrIgnoredUserIds;
        BlockedUserUtils;
        HermesBuiltin.arraySpread(items, location.userIds, 0);
        tmp8 = !hasBlockedOrIgnoredUserIds(items, tmp7.blockedOrIgnoredUserIds);
      }
      tmp6 = tmp8;
    }
    return tmp6;
  });
  if (tmp2.selectedVoiceGuildId === guildId) {
    let obj2 = { audio: true, video: tmp2.selectedVoiceChannelHasVideo, screenshare: null != ApplicationStreamingStore.getActiveStreamForUser(tmp2.currentUserId, guildId), liveStage: isSelectedVoiceChannelStage, activeEvent: channel_id === tmp2.selectedVoiceChannelId, activity: found.length > 0, isCurrentUserConnected: true };
    isSelectedVoiceChannelStage = tmp2.isSelectedVoiceChannelStage;
    const obj9 = require("useGuildScheduledEvents");
    const guildActiveEvent = obj9.getGuildActiveEvent(guildId);
    channel_id = undefined;
    if (guildActiveEvent != null) {
      channel_id = guildActiveEvent.channel_id;
    }
    return obj2;
  } else {
    let afkChannelId;
    const guild = GuildStore.getGuild(guildId);
    const tmp7 = null;
    if (guild != null) {
      afkChannelId = guild.afkChannelId;
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
        let someResult2;
        let tmp23 = voiceStates[item10047];
        let channelId;
        if (tmp23 != null) {
          channelId = tmp23.channelId;
        }
        if (isBadgeableVoiceChannel(guildId, channelId, afkChannelId, tmp2.skipMutedVcs)) {
          flag = true;
          obj.return();
          break;
        }
        let streamChannelIdsByGuild = tmp2.streamChannelIdsByGuild;
        let value = streamChannelIdsByGuild.get(guildId);
        let someResult = null != value && value.some((item) => {
          const skipMutedVcs = closure_1.skipMutedVcs;
          let tmp = !skipMutedVcs;
          if (skipMutedVcs) {
            tmp = !UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(guildId, item);
          }
          return tmp;
        });
        let obj3 = SnowflakeUtilsDefault;
        let keys1 = obj3.keys(StageInstanceStore.getStageInstancesByGuild(guildId));
        let tmp34 = _require;
        let someResult1 = keys1.some((item) => {
          const basicChannel = ChannelStore.getBasicChannel(item);
          const tmp2 = null != basicChannel && closure_1(dependencyMap[21])(basicChannel, PermissionStore);
          return tmp2;
        });
        let tmp35 = require("embeddedActivityLocationUtils");
        let first = found[0];
        let _location;
        let getEmbeddedActivityLocationChannelId = tmp35.getEmbeddedActivityLocationChannelId;
        if (first != null) {
          _location = first.location;
        }
        let embeddedActivityLocationChannelId = getEmbeddedActivityLocationChannelId(_location);
        let tmp34Result = tmp34(9033);
        if (tmp34Result.isActivitiesInTextEnabled(ChannelStore.getChannel(embeddedActivityLocationChannelId))) {
          someResult2 = found.length > 0;
        } else {
          someResult2 = found.some((location) => {
            const getChannel = ChannelStore.getChannel;
            obj = guildId(dependencyMap[17]);
            const channel = getChannel(obj.getEmbeddedActivityLocationChannelId(location.location));
            const tmp2 = null != channel && isVoiceChannel(channel.type);
            return tmp2;
          });
        }
        let obj4 = { audio: flag2, video: flag, screenshare: someResult, liveStage: someResult1, activeEvent: null != tmp34Result2.getGuildActiveEvent(guildId), activity: someResult2, isCurrentUserConnected: false };
        let tmp34Result2 = tmp34(9195);
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
const isVoiceChannel = ChannelRecord.isVoiceChannel;
({ BasicPermissions: closure_19, ME: closure_20 } = Constants);
let closure_21 = Object.freeze({ audio: false, video: false, screenshare: false, liveStage: false, activeEvent: false, activity: false, isCurrentUserConnected: false });
new Map();
const version = 0;
let closure_24 = 0;
let c25 = null;
let c26 = -1;
let map = null;
let closure_28 = -1;
const Store = get_initializedDefault.Store;
class GuildMediaStateStore extends Store {
  initialize() {
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    const blockedOrIgnoredIDs = RelationshipStore.getBlockedOrIgnoredIDs();
    this.waitFor(ApexExperimentStore, ApplicationStreamingStore, AuthenticationStore, ChannelStore, EmbeddedActivitiesStore, GuildScheduledEventStore, GuildStore, PermissionStore, RelationshipStore, SelectedChannelStore, StageInstanceStore, UserGuildSettingsStore, VoiceStateStore);
    const items = [ApexExperimentStore, ApplicationStreamingStore, ChannelStore, EmbeddedActivitiesStore, GuildScheduledEventStore, GuildStore, PermissionStore, StageInstanceStore, UserGuildSettingsStore];
    this.syncWith(items, markAllStale);
    const items1 = [RelationshipStore];
    this.syncWith(items1, handleRelationshipChange);
    const items2 = [SelectedChannelStore];
    this.syncWith(items2, handleSelectedChannelChange);
  }
  getGuildMediaState(guildId) {
    const iter = map.get(guildId);
    if (null != iter) {
      if (iter.version === version) {
        return iter.value;
      }
    }
    const tmp2 = computeGuildMediaState(guildId);
    let value = tmp2;
    if (null != iter) {
      value = tmp2;
      if (shallowEqualDefault(iter.value, tmp2)) {
        value = iter.value;
      }
    }
    const obj2 = { value, version };
    const result = map.set(guildId, obj2);
    return value;
  }
}
const prototype = GuildMediaStateStore.prototype;
GuildMediaStateStore.displayName = "GuildMediaStateStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const tmp = markAllStale();
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
    return tmp;
  },
  CONNECTION_OPEN_SUPPLEMENTAL: markAllStale,
  CONNECTION_CLOSED: markAllStale,
  OVERLAY_INITIALIZE: reset,
  LOGOUT: reset,
  GUILD_CREATE: markAllStale,
  GUILD_DELETE: function handleGuildDelete(guild) {
    let flag = 0 !== map.size;
    guild = guild.guild;
    if (flag) {
      closure_23 = closure_23 + 1;
      closure_24 = closure_24 + 1;
      flag = true;
    }
    map.delete(guild.id);
    return flag;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(arg0) {
    let flag = false;
    const tmp = arg0.voiceStates[Symbol.iterator]();
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
        if (guildId !== closure_20) {
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
            let flag2 = iter.version !== version || iter.value !== closure_21 || !UserGuildSettingsStore.isMuted(guildId);
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
  }
};
const guildMediaStateStore = new GuildMediaStateStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/guilds_bar/GuildMediaStateStore.tsx");

export default guildMediaStateStore;
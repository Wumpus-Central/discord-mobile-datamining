// === Module 7532: NewChannelsStore ===

// Module 7532 (NewChannelsStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7110 */;
import SidebarActionTypes from "SidebarActionTypes" /* 7282 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;

require = fn;
function guildHasCommunity(nextResult) {
  const guild = GuildStore.getGuild(nextResult);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(constants3.COMMUNITY);
  }
  return true === hasItem;
}
function seedCommunityBaseline() {
  set1.clear();
  const guildIds = GuildStore.getGuildIds();
  const iter = guildIds[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    if (guildHasCommunity(nextResult)) {
      let addResult = set1.add(tmp4);
    }
    continue;
  }
  return false;
}
function maybeAckViewedChannel(guildId, channelId) {
  closure_0 = channelId;
  let tmp = null != obj && null != channelId && obj.has(channelId);
  if (tmp) {
    const guild = GuildStore.getGuild(guildId);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants3.COMMUNITY);
    }
    tmp = true === hasItem;
  }
  if (tmp) {
    const channel = ChannelStore.getChannel(channelId);
    let isThreadResult;
    if (channel != null) {
      isThreadResult = channel.isThread();
    }
    tmp = !isThreadResult;
  }
  if (tmp) {
    tmp = null == ReadStateStore.ackMessageId(channelId);
  }
  if (tmp) {
    tmp = 0 === ReadStateStore.getMentionCount(channelId);
  }
  if (tmp) {
    DispatcherDefault.wait(() => {
      const obj = { object: constants.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED, objectType: constants2.ACK_AUTOMATIC };
      return obj.ack(closure_0, obj, true, true, SnowflakeUtilsDefault.atPreviousMillisecond(closure_0));
    });
  }
}
function initializeNewChannels(guildId) {
  closure_0 = guildId;
  if (null == dependencyMap[guildId]) {
    let joinedAt;
    const mapped = GuildChannelStore.getChannels(guildId)[closure_7].map((channel) => channel.channel.id);
    const member = GuildMemberStore.getMember(guildId, AuthenticationStore.getId());
    if (member != null) {
      joinedAt = member.joinedAt;
    }
    if (null != joinedAt) {
      const _Set2 = Set;
      set = new Set();
      dependencyMap[guildId] = set;
      const _Date2 = Date;
      const date = new Date(joinedAt);
      const time = date.getTime();
      if (0 !== mapped.length) {
        const _Set = Set;
        set1 = new Set(mapped.filter((item) => {
          const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(item);
          let tmp4 = null == ReadStateStore.getTrackedAckMessageId(item);
          if (tmp4) {
            const _Date = Date;
            const timestamp = Date.now();
            tmp4 = extractTimestampResult > timestamp - DurationsDefault.Millis.WEEK;
          }
          if (tmp4) {
            tmp4 = extractTimestampResult > UserSettingsProtoStore.getGuildRecentsDismissedAt(closure_0);
          }
          if (tmp4) {
            tmp4 = extractTimestampResult > closure_1;
          }
          if (tmp4) {
            tmp4 = !UserGuildSettingsStore.isChannelOrParentOptedIn(closure_0, item);
          }
          return tmp4;
        }));
        dependencyMap[guildId] = set1;
        let _Date = Date;
        closure_17[guildId] = Date.now();
      }
    }
    const arr = GuildChannelStore.getChannels(guildId)[closure_7];
  }
}
function pruneNewChannels() {
  const keys = SnowflakeUtilsDefault.keys(closure_16);
  const item = keys.forEach((item) => {
    closure_0 = item;
    const items = [...closure_16[item]];
    closure_16[item] = new Set(items.filter((item) => !channelOrParentOptedIn.isChannelOrParentOptedIn(closure_0, item)));
  });
}
let closure_7 = fn(2012).GUILD_SELECTABLE_CHANNELS_KEY;
const Constants = fn(1074);
({ AnalyticsObjects: closure_12, AnalyticsObjectTypes: map1, GuildFeatures: closure_14 } = Constants);
let set = new Set();
const dependencyMap = {};
let closure_17 = {};
let set1 = new Set();
const Store = initializeDefault.Store;
class NewChannelsStore extends Store {
}
const prototype = NewChannelsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, ChannelStore, GuildChannelStore, GuildMemberStore, GuildStore, ReadStateStore, UserGuildSettingsStore, UserSettingsProtoStore);
  const items = [UserGuildSettingsStore];
  this.syncWith(items, pruneNewChannels);
};
prototype["getNewChannelIds"] = function getNewChannelIds(id) {
  let tmp = null != id;
  if (tmp) {
    tmp = null == dependencyMap[id];
  }
  if (tmp) {
    initializeNewChannels(id);
  }
  if (null != id) {
    let tmp7 = dependencyMap[id];
    if (tmp7 == null) {
      tmp7 = set;
    }
    let tmp5 = tmp7;
  } else {
    tmp5 = set;
  }
  return tmp5;
};
prototype["shouldIndicateNewChannel"] = function shouldIndicateNewChannel(guild_id, id) {
  if (null == guild_id) {
    return false;
  } else {
    const guild = GuildStore.getGuild(guild_id);
    let tmp2 = null == guild;
    if (!tmp2) {
      const features = guild.features;
      tmp2 = !features.has(constants3.COMMUNITY);
    }
    let tmp3 = !tmp2;
    if (!tmp2) {
      let tmp4 = null != guild_id;
      if (tmp4) {
        tmp4 = null == dependencyMap[guild_id];
      }
      if (tmp4) {
        initializeNewChannels(guild_id);
      }
      let hasItem;
      if (dependencyMap[guild_id] != null) {
        hasItem = obj.has(id);
      }
      if (hasItem) {
        hasItem = null == ReadStateStore.getTrackedAckMessageId(id);
      }
      tmp3 = hasItem;
    }
    return tmp3;
  }
};
NewChannelsStore.displayName = "NewChannelsStore";
const newChannelsStore = new NewChannelsStore(DispatcherDefault, {
  BULK_CLEAR_RECENTS: function handleBulkClearRecents(guildId) {
    guildId = guildId.guildId;
    const channelIds = guildId.channelIds;
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      const item = channelIds.forEach((item) => closure_16[guildId].delete(item));
      if (0 === tmp3[guildId].size) {
        delete tmp[tmp2];
      }
    }
  },
  CHANNEL_ACK() {
    return true;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    ({ guildId, channelId } = arg0);
    if (null == guildId) {
      return false;
    } else {
      let tmp2 = null == dependencyMap[guildId];
      if (!tmp2) {
        const _Date = Date;
        const timestamp = Date.now();
        tmp2 = closure_17[guildId] < timestamp - DurationsDefault.Millis.HOUR;
      }
      let flag = false;
      if (tmp2) {
        initializeNewChannels(guildId);
        flag = true;
      }
      if (null != channelId) {
        maybeAckViewedChannel(guildId, channelId);
      }
      return flag;
    }
  },
  SIDEBAR_VIEW_CHANNEL: function handleSidebarViewChannel(guildId) {
    guildId = guildId.guildId;
    let tmp2 = null == guildId;
    if (!tmp2) {
      tmp2 = tmp !== SidebarActionTypes.SidebarType.VIEW_CHANNEL;
    }
    if (!tmp2) {
      maybeAckViewedChannel(guildId, guildId.channelId);
    }
    return false;
  },
  SIDEBAR_VIEW_GUILD: function handleSidebarViewGuild(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      maybeAckViewedChannel(guildId, tmp);
    }
    return false;
  },
  CONNECTION_OPEN: seedCommunityBaseline,
  CACHE_LOADED: seedCommunityBaseline,
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    guild = GuildStore.getGuild(guild.id);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants3.COMMUNITY);
    }
    if (true === hasItem) {
      set1.add(guild.id);
    }
    return false;
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    guild = guild.guild;
    let hasItem;
    set = undefined;
    guild = GuildStore.getGuild(guild.id);
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants3.COMMUNITY);
    }
    if (true === hasItem) {
      if (!set1.has(guild.id)) {
        set1.add(guild.id);
        const guild1 = GuildStore.getGuild(guild.id);
        const _Set = Set;
        set = new Set();
        if (tmp14) {
          const items = [, ];
          ({ rulesChannelId: arr[0], publicUpdatesChannelId: arr[1] } = guild1);
          const item = items.forEach((item) => {
            let hasItem = null != item;
            if (hasItem) {
              hasItem = set.has(item);
            }
            if (hasItem) {
              set.add(item);
            }
          });
        }
        dependencyMap[guild.id] = set;
        const _Date = Date;
        closure_17[guild.id] = Date.now();
        return true;
      }
    }
    if (true !== hasItem) {
      set1.delete(guild.id);
    }
    return false;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    delete tmp2[tmp];
    set1.delete(guild.guild.id);
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    if (!channel.isVocal()) {
      set = dependencyMap[channel.guild_id];
      if (set == null) {
        const _Set = Set;
        set = new Set();
      }
      dependencyMap[channel.guild_id] = set;
      dependencyMap[channel.guild_id].add(channel.id);
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/recent_channels/NewChannelsStore.tsx");

export default newChannelsStore;
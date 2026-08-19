// === Module 5276: guildHasCommunity ===

// Module 5276 (guildHasCommunity)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import initializeDefault from "initialize" /* 589 */;
import obj132Default from "obj132" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import SidebarType from "SidebarType" /* 4972 */;
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed" /* 1340 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import comparator from "comparator" /* 1980 */;
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_7 } from "comparator" /* 1980 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import generateOldThreadCutoff from "generateOldThreadCutoff" /* 4772 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import ME from "ME" /* 676 */;

require = fn;
function guildHasCommunity(nextResult) {
  const guild = store.getGuild(nextResult);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(constants.COMMUNITY);
  }
  return true === hasItem;
}
function seedCommunityBaseline() {
  set1.clear();
  const guildIds = store.getGuildIds();
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
    const guild = store.getGuild(guildId);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants.COMMUNITY);
    }
    tmp = true === hasItem;
  }
  if (tmp) {
    channel = channel.getChannel(channelId);
    let isThreadResult;
    if (channel != null) {
      isThreadResult = channel.isThread();
    }
    tmp = !isThreadResult;
  }
  if (tmp) {
    tmp = null == store2.ackMessageId(channelId);
  }
  if (tmp) {
    tmp = 0 === store2.getMentionCount(channelId);
  }
  if (tmp) {
    dispatcherDefault.wait(() => {
      channelId(dependencyMap[12]);
      const obj = { object: closure_1_12.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED, objectType: closure_1_13.ACK_AUTOMATIC };
      return obj.ack(channelId, obj, true, true, DISCORD_EPOCHDefault.atPreviousMillisecond(channelId));
    });
  }
}
function initializeNewChannels(guildId) {
  closure_0 = guildId;
  if (null == dependencyMap[guildId]) {
    let joinedAt;
    const mapped = channels.getChannels(guildId)[closure_7].map((item, index) => item.channel.id);
    member = member.getMember(guildId, id.getId());
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
        set1 = new Set(mapped.filter((item, index) => {
          const extractTimestampResult = callback(dependencyMap[13]).extractTimestamp(item);
          let tmp4 = null == closure_1_10.getTrackedAckMessageId(item);
          if (tmp4) {
            const _Date = Date;
            const timestamp = Date.now();
            tmp4 = extractTimestampResult > timestamp - callback(dependencyMap[9]).Millis.WEEK;
          }
          if (tmp4) {
            tmp4 = extractTimestampResult > closure_1_3.getGuildRecentsDismissedAt(closure_0);
          }
          if (tmp4) {
            tmp4 = extractTimestampResult > callback;
          }
          if (tmp4) {
            tmp4 = !closure_1_11.isChannelOrParentOptedIn(closure_0, item);
          }
          return tmp4;
        }));
        dependencyMap[guildId] = set1;
        let _Date = Date;
        closure_17[guildId] = Date.now();
      }
    }
    const arr = channels.getChannels(guildId)[closure_7];
  }
}
function pruneNewChannels() {
  const keys = DISCORD_EPOCHDefault.keys(closure_16);
  const item = keys.forEach((item, index) => {
    closure_0 = item;
    const items = [...closure_16[item]];
    table[item] = new Set(items.filter((item, index) => !closure_1_11.isChannelOrParentOptedIn(closure_0, item)));
  });
}
({ AnalyticsObjects: closure_12, AnalyticsObjectTypes: map1, GuildFeatures: closure_14 } = ME);
let set = new Set();
let closure_16 = {};
let closure_17 = {};
let set1 = new Set();
const Store = initializeDefault.Store;
class NewChannelsStore extends Store {
}
const prototype = NewChannelsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_4, closure_5, closure_6, closure_8, closure_9, closure_10, closure_11, closure_3);
  const items = [closure_11];
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
    const guild = store.getGuild(guild_id);
    let tmp2 = null == guild;
    if (!tmp2) {
      const features = guild.features;
      tmp2 = !features.has(constants.COMMUNITY);
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
        hasItem = null == store2.getTrackedAckMessageId(id);
      }
      tmp3 = hasItem;
    }
    return tmp3;
  }
};
NewChannelsStore.displayName = "NewChannelsStore";
const newChannelsStore = new NewChannelsStore(dispatcherDefault, {
  BULK_CLEAR_RECENTS: function handleBulkClearRecents(guildId) {
    guildId = guildId.guildId;
    const channelIds = guildId.channelIds;
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      const item = channelIds.forEach((item, index) => closure_1_16[guildId].delete(item));
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
        tmp2 = table[guildId] < timestamp - obj132Default.Millis.HOUR;
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
      tmp2 = tmp !== SidebarType.SidebarType.VIEW_CHANNEL;
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
    guild = store.getGuild(guild.id);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants.COMMUNITY);
    }
    if (true === hasItem) {
      set1.add(guild.id);
    }
    return false;
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    guild = guild.guild;
    let hasItem;
    closure_0 = undefined;
    set = undefined;
    guild = store.getGuild(guild.id);
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants.COMMUNITY);
    }
    if (true === hasItem) {
      if (!set1.has(guild.id)) {
        set1.add(guild.id);
        closure_0 = tmp7;
        const guild1 = store.getGuild(guild.id);
        const _Set = Set;
        set = new Set();
        if (tmp14) {
          const items = [, ];
          ({ rulesChannelId: arr[0], publicUpdatesChannelId: arr[1] } = guild1);
          const item = items.forEach((item, index) => {
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
const result = require("obj132").fileFinishedImporting("modules/recent_channels/NewChannelsStore.tsx");

export default newChannelsStore;
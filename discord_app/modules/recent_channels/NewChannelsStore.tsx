// discord_app/modules/recent_channels/NewChannelsStore.tsx
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import comparator from "comparator";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_7 } from "comparator";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import ME from "ME";
import { Store } from "initialize";
import set from "ensureGuildLoaded";

let closure_12;
let closure_14;
let map1;
const require = arg1;
function guildHasCommunity(nextResult) {
  const guild = store2.getGuild(nextResult);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(constants.COMMUNITY);
  }
  return true === hasItem;
}
function seedCommunityBaseline() {
  set1.clear();
  const guildIds = store2.getGuildIds();
  const iter = guildIds[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = guildHasCommunity;
    let tmp4 = nextResult;
    if (guildHasCommunity(nextResult)) {
      let tmp6 = set1;
      let tmp7 = nextResult;
      let addResult = set1.add(tmp4);
    }
    continue;
  }
  return false;
}
function initializeNewChannels(guildId) {
  let closure_0 = guildId;
  if (null == dependencyMap[guildId]) {
    let joinedAt;
    const mapped = channels.getChannels(guildId)[closure_7].map((channel) => channel.channel.id);
    member = member.getMember(guildId, id.getId());
    if (member != null) {
      joinedAt = member.joinedAt;
    }
    if (null != joinedAt) {
      const _Set2 = Set;
      const set = new Set();
      tmp[guildId] = set;
      const _Date2 = Date;
      const date = new Date(joinedAt);
      const time = date.getTime();
      if (0 !== mapped.length) {
        const _Set = Set;
        const set1 = new Set(mapped.filter((channelId) => {
          const extractTimestampResult = callback(outer1_2[13]).extractTimestamp(channelId);
          let tmp4 = null == outer1_10.getTrackedAckMessageId(channelId);
          if (tmp4) {
            const _Date = Date;
            const timestamp = Date.now();
            tmp4 = extractTimestampResult > timestamp - callback(outer1_2[9]).Millis.WEEK;
          }
          if (tmp4) {
            tmp4 = extractTimestampResult > outer1_3.getGuildRecentsDismissedAt(closure_0);
          }
          if (tmp4) {
            tmp4 = extractTimestampResult > callback;
          }
          if (tmp4) {
            tmp4 = !outer1_11.isChannelOrParentOptedIn(closure_0, channelId);
          }
          return tmp4;
        }));
        tmp[guildId] = set1;
        let _Date = Date;
        closure_17[guildId] = Date.now();
      }
    }
    const arr = channels.getChannels(guildId)[closure_7];
  }
}
function pruneNewChannels() {
  const keys = importDefault(11).keys(closure_16);
  const item = keys.forEach((arg0) => {
    let closure_0 = arg0;
    const items = [...closure_16[arg0]];
    table[arg0] = new Set(items.filter((channelId) => !outer1_11.isChannelOrParentOptedIn(closure_0, channelId)));
  });
}
({ AnalyticsObjects: closure_12, AnalyticsObjectTypes: map1, GuildFeatures: closure_14 } = ME);
let set = new Set();
let closure_16 = {};
let closure_17 = {};
let set1 = new Set();
class NewChannelsStore extends Store {
}
const prototype = NewChannelsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint, ensureGuildLoaded, comparator, trackCommunicationDisabled, createGuildRecordFromRust, generateOldThreadCutoff, updateUserGuildSettingsInternal, handleConnectionClosedOrResumed);
  const items = [updateUserGuildSettingsInternal];
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
    const guild = store2.getGuild(guild_id);
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
        hasItem = null == generateOldThreadCutoff.getTrackedAckMessageId(id);
      }
      tmp3 = hasItem;
    }
    return tmp3;
  }
};
NewChannelsStore.displayName = "NewChannelsStore";
const newChannelsStore = new NewChannelsStore(require("dispatcher"), {
  BULK_CLEAR_RECENTS: function handleBulkClearRecents(guildId) {
    guildId = guildId.guildId;
    const channelIds = guildId.channelIds;
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      const item = channelIds.forEach((arg0) => outer1_16[guildId].delete(arg0));
      if (0 === tmp3[guildId].size) {
        delete tmp[tmp2];
      }
    }
  },
  CHANNEL_ACK() {
    return true;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    let channelId;
    let guildId;
    ({ guildId, channelId } = arg0);
    if (null == guildId) {
      return tmp;
    } else {
      if (null != dependencyMap[guildId]) {
        const _Date = Date;
        const timestamp = Date.now();
        if (table[guildId] >= timestamp - importDefault(687).Millis.HOUR) {
          let flag = false;
          if (null != channelId) {
            let isOptInEnabledResult = null != obj && null != channelId && obj.has(channelId);
            if (isOptInEnabledResult) {
              isOptInEnabledResult = updateUserGuildSettingsInternal.isOptInEnabled(guildId);
            }
            if (isOptInEnabledResult) {
              const channel = store.getChannel(channelId);
              let isThreadResult;
              if (channel != null) {
                isThreadResult = channel.isThread();
              }
              isOptInEnabledResult = !isThreadResult;
            }
            if (isOptInEnabledResult) {
              isOptInEnabledResult = null == generateOldThreadCutoff.ackMessageId(channelId);
            }
            flag = false;
            if (isOptInEnabledResult) {
              tmp15(709).wait(() => {
                let obj = baseChannelId(outer1_2[12]);
                obj = { object: outer1_12.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED, objectType: outer1_13.ACK_AUTOMATIC };
                return obj.ack(baseChannelId, obj, true, true, outer1_1(outer1_2[13]).atPreviousMillisecond(baseChannelId));
              });
              flag = false;
              const tmp15Result = tmp15(709);
            }
          }
        }
        tmp15 = importDefault;
      }
      initializeNewChannels(guildId);
      flag = true;
    }
  },
  SIDEBAR_VIEW_CHANNEL: function handleSidebarViewChannel(arg0) {
    let channelId;
    let guildId;
    ({ guildId, channelId } = arg0);
    let tmp2 = null == guildId;
    if (!tmp2) {
      tmp2 = tmp !== channelId(5791).SidebarType.VIEW_CHANNEL;
    }
    if (!tmp2) {
      let isOptInEnabledResult = null != obj && null != channelId && obj.has(channelId);
      if (isOptInEnabledResult) {
        isOptInEnabledResult = updateUserGuildSettingsInternal.isOptInEnabled(guildId);
      }
      if (isOptInEnabledResult) {
        const channel = store.getChannel(channelId);
        let isThreadResult;
        if (channel != null) {
          isThreadResult = channel.isThread();
        }
        isOptInEnabledResult = !isThreadResult;
      }
      if (isOptInEnabledResult) {
        isOptInEnabledResult = null == generateOldThreadCutoff.ackMessageId(channelId);
      }
      if (isOptInEnabledResult) {
        importDefault(709).wait(() => {
          let obj = baseChannelId(outer1_2[12]);
          obj = { object: outer1_12.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED, objectType: outer1_13.ACK_AUTOMATIC };
          return obj.ack(baseChannelId, obj, true, true, outer1_1(outer1_2[13]).atPreviousMillisecond(baseChannelId));
        });
        const obj3 = importDefault(709);
      }
    }
    return false;
  },
  SIDEBAR_VIEW_GUILD: function handleSidebarViewGuild(arg0) {
    let baseChannelId;
    let guildId;
    ({ guildId, baseChannelId } = arg0);
    if (null != guildId) {
      let isOptInEnabledResult = null != obj3 && null != baseChannelId && obj3.has(baseChannelId);
      if (isOptInEnabledResult) {
        isOptInEnabledResult = updateUserGuildSettingsInternal.isOptInEnabled(guildId);
      }
      if (isOptInEnabledResult) {
        const channel = store.getChannel(baseChannelId);
        let isThreadResult;
        if (channel != null) {
          isThreadResult = channel.isThread();
        }
        isOptInEnabledResult = !isThreadResult;
      }
      if (isOptInEnabledResult) {
        isOptInEnabledResult = null == generateOldThreadCutoff.ackMessageId(baseChannelId);
      }
      if (isOptInEnabledResult) {
        importDefault(709).wait(() => {
          let obj = baseChannelId(outer1_2[12]);
          obj = { object: outer1_12.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED, objectType: outer1_13.ACK_AUTOMATIC };
          return obj.ack(baseChannelId, obj, true, true, outer1_1(outer1_2[13]).atPreviousMillisecond(baseChannelId));
        });
        const obj2 = importDefault(709);
      }
    }
    return false;
  },
  CONNECTION_OPEN: seedCommunityBaseline,
  CACHE_LOADED: seedCommunityBaseline,
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    guild = store2.getGuild(guild.id);
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
    let c0;
    let set;
    guild = store2.getGuild(guild.id);
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants.COMMUNITY);
    }
    if (true === hasItem) {
      if (!set1.has(guild.id)) {
        obj2.add(guild.id);
        c0 = tmp7;
        const guild1 = store2.getGuild(guild.id);
        const _Set = Set;
        set = new Set();
        if (tmp14) {
          const items = [, ];
          ({ rulesChannelId: arr[0], publicUpdatesChannelId: arr[1] } = guild1);
          const item = items.forEach((arg0) => {
            let hasItem = null != arg0;
            if (hasItem) {
              hasItem = _undefined.has(arg0);
            }
            if (hasItem) {
              set.add(arg0);
            }
          });
        }
        dependencyMap[guild.id] = set;
        const _Date = Date;
        closure_17[guild.id] = Date.now();
        return true;
      }
      obj2 = set1;
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
      let set = dependencyMap[channel.guild_id];
      if (set == null) {
        const _Set = Set;
        set = new Set();
      }
      dependencyMap[channel.guild_id] = set;
      dependencyMap[channel.guild_id].add(channel.id);
      const obj = dependencyMap[channel.guild_id];
    }
  }
});
const result = set.fileFinishedImporting("modules/recent_channels/NewChannelsStore.tsx");

export default newChannelsStore;
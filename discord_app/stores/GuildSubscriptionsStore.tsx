// === Module 6781: GuildSubscriptionsStore ===

// Module 6781 (GuildSubscriptionsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import FavoritesUtils from "FavoritesUtils" /* 2077 */;
import ChannelMemberStore from "ChannelMemberStore" /* 6782 */;
import GuildSubscriptionsDefault from "GuildSubscriptions" /* 6787 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 4776 */;
import LurkingStore from "LurkingStore" /* 4510 */;
import SpotifyStore from "SpotifyStore" /* 5439 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6783 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 5618 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault, set;

let ChannelSections;
let closure_19;
function handleConnectionOpenOrResumed(type) {
  let closure_2;
  let obj4;
  set = undefined;
  dependencyMap = undefined;
  if ("CONNECTION_OPEN" === type.type) {
    let c0 = true;
    let c1 = false;
    subscriptions = {};
    const item = closure_20.forEach((item) => {
      let tmp = item === SelectedGuildStore.getGuildId() || item === RTCConnectionStore.getGuildId();
      if (!tmp) {
        const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp = item === guildId;
      }
      if (!tmp) {
        tmp = null != obj && obj.guildId === item;
        const tmp9 = null != obj && obj.guildId === item;
      }
      if (!tmp) {
        closure_20.clearWithoutFlushing(item, c0);
        if (c1) {
          obj[item] = closure_20.get(item);
        }
      }
    });
    const obj2 = set(12);
    const tmp3 = set;
    if (!obj2.isEmpty(subscriptions)) {
      const obj3 = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions };
      const tmp3Result = tmp3(584);
      tmp3Result.dispatch(obj3);
    }
  }
  const guildId = SelectedGuildStore.getGuildId();
  if (null != guildId) {
    const channelId = SelectedChannelStore.getChannelId(guildId);
    let tmp11 = guildId;
    const obj5 = obj4(2077);
    if (obj5.isFavoritesGuildId(guildId)) {
      tmp11 = guildId;
      if (null != channelId) {
        const channel = ChannelStore.getChannel(channelId);
        let guildId1;
        if (channel != null) {
          guildId1 = channel.getGuildId();
        }
        if (guildId1 == null) {
          guildId1 = guildId;
        }
        tmp11 = guildId1;
      }
    }
    closure_20.subscribeToGuild(tmp11);
  }
  obj4 = {};
  set = new Set(LurkingStore.lurkingGuildIds());
  dependencyMap = LurkingStore.mostRecentLurkedGuildId();
  const item1 = closure_20.forEach((item) => {
    if (null == GuildStore.getGuild(item)) {
      closure_20.clearWithoutFlushing(item, true);
    } else {
      const hasItem = set.has(item) && item !== closure_2;
      if (!hasItem) {
        obj4[item] = closure_20.get(item);
      }
    }
  });
  const obj8 = set(12);
  const tmp18 = set;
  if (!obj8.isEmpty(obj4)) {
    const obj6 = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: obj4 };
    const tmp18Result = tmp18(584);
    tmp18Result.dispatch(obj6);
  }
}
function handleChannelSelect(arg0) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = arg0);
  let flag = !GuildAvailabilityStore.isUnavailable(guildId);
  GuildAvailabilityStore.isUnavailable(guildId);
  if (flag) {
    let tmp4 = guildId;
    const obj = FavoritesUtils;
    if (obj.isFavoritesGuildId(guildId)) {
      tmp4 = guildId;
      if (null != channelId) {
        const channel = ChannelStore.getChannel(channelId);
        let guildId1;
        if (channel != null) {
          guildId1 = channel.getGuildId();
        }
        if (guildId1 == null) {
          guildId1 = guildId;
        }
        tmp4 = guildId1;
      }
    }
    closure_20.subscribeToGuild(tmp4);
    flag = false;
  }
  return flag;
}
function resubscribe() {
  const guildId = SelectedGuildStore.getGuildId();
  const channelId = SelectedChannelStore.getChannelId();
  let tmp3 = guildId;
  const obj = FavoritesUtils;
  if (obj.isFavoritesGuildId(guildId)) {
    tmp3 = guildId;
    if (null != channelId) {
      const channel = ChannelStore.getChannel(channelId);
      let guildId1;
      if (channel != null) {
        guildId1 = channel.getGuildId();
      }
      if (guildId1 == null) {
        guildId1 = guildId;
      }
      tmp3 = guildId1;
    }
  }
  closure_20.subscribeToGuild(tmp3);
  return false;
}
function handleSpotifyUpdate() {
  let obj;
  const syncingWith = SpotifyStore.getSyncingWith();
  if (null == syncingWith) {
    if (null != obj) {
      closure_20.unsubscribeUser(obj.guildId, obj.userId);
      obj = null;
    }
  } else {
    const userId = syncingWith.userId;
    if (null != obj) {
      if (obj.userId === userId) {
        return false;
      }
    }
    if (RelationshipStore.isFriend(userId)) {
      return false;
    } else {
      const memberOfResult = GuildMemberStore.memberOf(userId);
      if (0 === memberOfResult.length) {
        return false;
      } else {
        const first = _slicedToArray(memberOfResult, 1)[0];
        obj = { guildId: first, userId };
        closure_20.subscribeUser(first, userId);
      }
    }
  }
  return false;
}
const EVERYONE_CHANNEL_ID = ChannelMemberStore.EVERYONE_CHANNEL_ID;
({ ChannelSections, ChannelTypes: closure_19 } = Constants);
let tmp3 = new GuildSubscriptionsDefault((subscriptions) => {
  for (const key10004 in subscriptions) {
    let isUnavailableResult = null != GuildStore.getGuild(key10004) || GuildAvailabilityStore.isUnavailable(key10004);
    if (isUnavailableResult) {
      continue;
    } else {
      delete tmp[key10004];
      continue;
    }
    continue;
  }
  const obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions };
  obj.dispatch(obj2);
});
let closure_20 = tmp3;
const Store = get_initializedDefault.Store;
class GuildSubscriptionsStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, ChannelSectionStore, ChannelStore, ExperimentStore, GuildAvailabilityStore, GuildMemberStore, GuildStore, LurkingStore, RTCConnectionStore, RelationshipStore, SelectedChannelStore, SelectedGuildStore, SpotifyStore);
    const items = [SpotifyStore];
    this.syncWith(items, handleSpotifyUpdate);
    const items1 = [ChannelSectionStore];
    this.syncWith(items1, resubscribe);
  }
  getSubscribedThreadIds() {
    return closure_20.getSubscribedThreadIds();
  }
  isSubscribedToThreads(arg0) {
    return closure_20.isSubscribedToThreads(arg0);
  }
  isSubscribedToAnyMember(arg0) {
    return closure_20.isSubscribedToAnyMember(arg0);
  }
  isSubscribedToMemberUpdates(arg0) {
    return closure_20.isSubscribedToMemberUpdates(arg0);
  }
  isSubscribedToAnyGuildChannel(id) {
    const channels = closure_20.get(id).channels;
    let tmp = null != channels;
    if (tmp) {
      const _Object = Object;
      tmp = Object.keys(channels).length > 0;
    }
    return tmp;
  }
}
const prototype = GuildSubscriptionsStore.prototype;
GuildSubscriptionsStore.displayName = "GuildSubscriptionsStore";
let subscriptions = {
  CONNECTION_OPEN: handleConnectionOpenOrResumed,
  CONNECTION_RESUMED: handleConnectionOpenOrResumed,
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let c1;
    let c0 = false;
    importDefault = false;
    subscriptions = {};
    const item = closure_20.forEach((item) => {
      let tmp = item === SelectedGuildStore.getGuildId() || item === RTCConnectionStore.getGuildId();
      if (!tmp) {
        const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp = item === guildId;
      }
      if (!tmp) {
        tmp = null != obj && obj.guildId === item;
        const tmp9 = null != obj && obj.guildId === item;
      }
      if (!tmp) {
        closure_20.clearWithoutFlushing(item, c0);
        if (c1) {
          obj[item] = closure_20.get(item);
        }
      }
    });
    const obj2 = require("module_12");
    const tmp2 = importDefault;
    const tmp3 = subscriptions;
    if (!obj2.isEmpty(subscriptions)) {
      const obj3 = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions };
      const tmp2Result = tmp2(tmp3[17]);
      tmp2Result.dispatch(obj3);
    }
  },
  IDLE: function handleIdle(idle) {
    let c1;
    if (idle.idle) {
      let c0 = false;
      importDefault = true;
      subscriptions = {};
      const item = closure_20.forEach((item) => {
        let tmp = item === SelectedGuildStore.getGuildId() || item === RTCConnectionStore.getGuildId();
        if (!tmp) {
          const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          tmp = item === guildId;
        }
        if (!tmp) {
          tmp = null != obj && obj.guildId === item;
          const tmp9 = null != obj && obj.guildId === item;
        }
        if (!tmp) {
          closure_20.clearWithoutFlushing(item, c0);
          if (c1) {
            obj[item] = closure_20.get(item);
          }
        }
      });
      const obj2 = require("module_12");
      const tmp3 = importDefault;
      const tmp4 = subscriptions;
      if (!obj2.isEmpty(subscriptions)) {
        const obj3 = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions };
        const tmp3Result = tmp3(tmp4[17]);
        tmp3Result.dispatch(obj3);
      }
    } else {
      return false;
    }
  },
  LOGOUT: function handleLogout() {
    closure_20.reset();
  },
  VOICE_CHANNEL_SELECT: handleChannelSelect,
  CHANNEL_SELECT: handleChannelSelect,
  GUILD_CREATE: function handleGuildCreate(guild) {
    if (guild.guild.id === SelectedGuildStore.getGuildId()) {
      const guildId = SelectedGuildStore.getGuildId();
      const channelId = SelectedChannelStore.getChannelId();
      let tmp2 = guildId;
      const obj3 = FavoritesUtils;
      if (obj3.isFavoritesGuildId(guildId)) {
        tmp2 = guildId;
        if (null != channelId) {
          const channel = ChannelStore.getChannel(channelId);
          let guildId1;
          if (channel != null) {
            guildId1 = channel.getGuildId();
          }
          if (guildId1 == null) {
            guildId1 = guildId;
          }
          tmp2 = guildId1;
        }
      }
      closure_20.subscribeToGuild(tmp2);
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    closure_20.clearWithoutFlushing(guild.guild.id, true);
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function handleMembersAdd(arg0) {
    let userIds;
    ({ guildId: require, userIds } = arg0);
    const item = userIds.forEach((item) => {
      if (item !== AuthenticationStore.getId()) {
        closure_20.subscribeUser(require, item);
      }
    });
    return false;
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function handleMembersRemove(arg0) {
    let userIds;
    ({ guildId: require, userIds } = arg0);
    const item = userIds.forEach((item) => {
      closure_20.unsubscribeUser(require, item);
    });
    return false;
  },
  GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function handleAddMemberUpdatesGuildSubscription(guildId) {
    const result = closure_20.subscribeToMemberUpdates(guildId.guildId);
  },
  GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function handleRemoveMemberUpdatesGuildSubscription(guildId) {
    const result = closure_20.unsubscribeFromMemberUpdates(guildId.guildId);
  },
  GUILD_SUBSCRIPTIONS_CHANNEL: function handleChannel(arg0) {
    let channelId;
    let flag;
    let guildId;
    let ranges;
    ({ guildId, channelId, ranges } = arg0);
    if (channelId === EVERYONE_CHANNEL_ID) {
      flag = closure_20.subscribeChannel(guildId, channelId, ranges);
    } else {
      const channel = ChannelStore.getChannel(channelId);
      flag = false;
      if (null != channel) {
        let subscribeChannelResult1;
        const guildId1 = channel.getGuildId();
        let isFavoritesGuildIdResult = guildId1 !== guildId;
        if (isFavoritesGuildIdResult) {
          const obj = FavoritesUtils;
          isFavoritesGuildIdResult = obj.isFavoritesGuildId(guildId);
        }
        if (isFavoritesGuildIdResult) {
          closure_20.subscribeToGuild(guildId1);
        }
        let isThreadResult;
        if (channel != null) {
          isThreadResult = channel.isThread();
        }
        if (isThreadResult) {
          let subscribeChannelResult;
          if (channel.type === constants.ANNOUNCEMENT_THREAD) {
            subscribeChannelResult = closure_20.subscribeChannel(guildId1, channel.parent_id, ranges);
          } else {
            subscribeChannelResult = channel.isActiveThread() && closure_20.subscribeThreadMemberList(guildId1, channelId, SelectedChannelStore.getChannelId());
          }
          subscribeChannelResult1 = subscribeChannelResult;
        } else {
          subscribeChannelResult1 = closure_20.subscribeChannel(guildId1, channelId, ranges);
        }
        flag = subscribeChannelResult1;
      }
    }
    return flag;
  },
  GUILD_SUBSCRIPTIONS: function handleGuild(guildId) {
    return closure_20.subscribeToGuild(guildId.guildId);
  },
  CHANNEL_PRELOAD: function handleChannelPreload(arg0) {
    let channelId;
    let guildId;
    ({ guildId, channelId } = arg0);
    let tmp = guildId;
    const obj = FavoritesUtils;
    if (obj.isFavoritesGuildId(guildId)) {
      tmp = guildId;
      if (null != channelId) {
        const channel = ChannelStore.getChannel(channelId);
        let guildId1;
        if (channel != null) {
          guildId1 = channel.getGuildId();
        }
        if (guildId1 == null) {
          guildId1 = guildId;
        }
        tmp = guildId1;
      }
    }
    closure_20.subscribeToGuild(tmp);
    return false;
  },
  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: function handleOverlayTextChatSelectChannel(arg0) {
    let channelId;
    let guildId;
    ({ guildId, channelId } = arg0);
    let tmp = guildId;
    const obj = FavoritesUtils;
    if (obj.isFavoritesGuildId(guildId)) {
      tmp = guildId;
      if (null != channelId) {
        const channel = ChannelStore.getChannel(channelId);
        let guildId1;
        if (channel != null) {
          guildId1 = channel.getGuildId();
        }
        if (guildId1 == null) {
          guildId1 = guildId;
        }
        tmp = guildId1;
      }
    }
    closure_20.subscribeToGuild(tmp);
    return false;
  },
  INBOX_OPEN: function handleInboxOpen(arg0) {
    const iter = arg0.guildIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult) {
        let subscribeToGuildResult = closure_20.subscribeToGuild(tmp2);
      }
      continue;
    }
    return false;
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    let guild_id;
    let id;
    let result;
    channel = channel.channel;
    if (channel.isArchivedThread()) {
      result = closure_20.unsubscribeThreadMemberList(channel.guild_id, channel.id);
    } else {
      const isActiveThreadResult = channel.isActiveThread();
      let tmp2 = !isActiveThreadResult;
      if (isActiveThreadResult) {
        tmp2 = SelectedChannelStore.getChannelId() !== channel.id;
      }
      result = !tmp2;
      if (result) {
        ({ guild_id, id } = channel);
        const result1 = closure_20.subscribeThreadMemberList(guild_id, id, SelectedChannelStore.getChannelId());
      }
    }
    return result;
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    return closure_20.unsubscribeThreadMemberList(channel.guild_id, channel.id);
  },
  THREAD_LIST_SYNC: resubscribe
};
const guildSubscriptionsStore = new GuildSubscriptionsStore(DispatcherDefault, subscriptions);
let result = size.fileFinishedImporting("stores/GuildSubscriptionsStore.tsx");

export default guildSubscriptionsStore;
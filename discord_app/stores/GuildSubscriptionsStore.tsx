// === Module 7278: GuildSubscriptionsStore ===

// Module 7278 (GuildSubscriptionsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import FavoritesUtils from "FavoritesUtils" /* 1982 */;
import GuildSubscriptionsDefault from "GuildSubscriptions" /* 7284 */;
import _slicedToArray from "module_32" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 4476 */;
import LurkingStore from "LurkingStore" /* 4200 */;
import SpotifyStore from "SpotifyStore" /* 5280 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelSectionStore from "ChannelSectionStore" /* 7280 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 4902 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

require = fn;
function handleConnectionOpenOrResumed(type) {
  let subscriptions;
  let set;
  dependencyMap = undefined;
  if ("CONNECTION_OPEN" === type.type) {
    closure_129_0 = true;
    closure_129_1 = false;
    subscriptions = {};
    closure_129_2 = subscriptions;
    const item = closure_20.forEach((item) => {
      let tmp = item === SelectedGuildStore.getGuildId();
      if (!tmp) {
        tmp = item === RTCConnectionStore.getGuildId();
      }
      if (!tmp) {
        const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp = item === guildId;
      }
      if (!tmp) {
        let tmp9 = null != obj;
        if (tmp9) {
          tmp9 = obj.guildId === item;
        }
        tmp = tmp9;
      }
      if (!tmp) {
        closure_20.clearWithoutFlushing(item, c0);
        if (c1) {
          obj[item] = closure_20.get(item);
        }
      }
    });
    let obj1 = set(12);
    if (!obj1.isEmpty(subscriptions)) {
      subscriptions = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: null };
      subscriptions.subscriptions = subscriptions;
      tmp3(573).dispatch(subscriptions);
      const tmp3Result = tmp3(573);
    }
    tmp3 = set;
  }
  const guildId = SelectedGuildStore.getGuildId();
  if (null != guildId) {
    const channelId = SelectedChannelStore.getChannelId(guildId);
    let tmp11 = guildId;
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
    obj5 = subscriptions(1982);
  }
  subscriptions = {};
  set = new Set(LurkingStore.lurkingGuildIds());
  dependencyMap = LurkingStore.mostRecentLurkedGuildId();
  const item1 = closure_20.forEach((item) => {
    if (null == GuildStore.getGuild(item)) {
      closure_20.clearWithoutFlushing(item, true);
    } else {
      let hasItem = set.has(item);
      if (hasItem) {
        hasItem = item !== closure_2;
      }
      if (!hasItem) {
        obj[item] = closure_20.get(item);
      }
    }
  });
  if (!obj8.isEmpty(subscriptions)) {
    obj1 = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions };
    tmp18(573).dispatch(obj1);
    const tmp18Result = tmp18(573);
  }
  obj8 = set(12);
  tmp18 = set;
}
function handleChannelSelect(arg0) {
  ({ guildId, channelId } = arg0);
  const isUnavailableResult = GuildAvailabilityStore.isUnavailable(guildId);
  let flag = !isUnavailableResult;
  if (!isUnavailableResult) {
    let tmp4 = guildId;
    if (obj.isFavoritesGuildId(guildId)) {
      tmp4 = guildId;
      if (null != channelId) {
        const channel = ChannelStore.getChannel(channelId);
        guildId = undefined;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp4 = guildId;
      }
    }
    closure_20.subscribeToGuild(tmp4);
    flag = false;
    obj = FavoritesUtils;
  }
  return flag;
}
function resubscribe() {
  const guildId = SelectedGuildStore.getGuildId();
  const channelId = SelectedChannelStore.getChannelId();
  let tmp3 = guildId;
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
const EVERYONE_CHANNEL_ID = fn(7279).EVERYONE_CHANNEL_ID;
const Constants = fn(1074);
({ ChannelSections, ChannelTypes: closure_19 } = Constants);
let closure_20 = new GuildSubscriptionsDefault((subscriptions) => {
  for (const key10004 in arg0) {
    let isUnavailableResult = null != GuildStore.getGuild(key10004);
    if (!isUnavailableResult) {
      isUnavailableResult = GuildAvailabilityStore.isUnavailable(key10004);
    }
    if (isUnavailableResult) {
      continue;
    } else {
      delete tmp[tmp2];
      continue;
    }
    continue;
  }
  obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions };
  obj.dispatch(obj);
});
const Store = initializeDefault.Store;
class GuildSubscriptionsStore extends Store {
}
const prototype = GuildSubscriptionsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, ChannelSectionStore, ChannelStore, ExperimentStore, GuildAvailabilityStore, GuildMemberStore, GuildStore, LurkingStore, RTCConnectionStore, RelationshipStore, SelectedChannelStore, SelectedGuildStore, SpotifyStore);
  const items = [SpotifyStore];
  this.syncWith(items, handleSpotifyUpdate);
  const items1 = [ChannelSectionStore];
  this.syncWith(items1, resubscribe);
};
prototype["getSubscribedThreadIds"] = function getSubscribedThreadIds() {
  return closure_20.getSubscribedThreadIds();
};
prototype["isSubscribedToThreads"] = function isSubscribedToThreads(arg0) {
  return closure_20.isSubscribedToThreads(arg0);
};
prototype["isSubscribedToAnyMember"] = function isSubscribedToAnyMember(arg0) {
  return closure_20.isSubscribedToAnyMember(arg0);
};
prototype["isSubscribedToMemberUpdates"] = function isSubscribedToMemberUpdates(arg0) {
  return closure_20.isSubscribedToMemberUpdates(arg0);
};
prototype["isSubscribedToAnyGuildChannel"] = function isSubscribedToAnyGuildChannel(id) {
  const channels = closure_20.get(id).channels;
  let tmp = null != channels;
  if (tmp) {
    const _Object = Object;
    tmp = Object.keys(channels).length > 0;
  }
  return tmp;
};
GuildSubscriptionsStore.displayName = "GuildSubscriptionsStore";
const guildSubscriptionsStore = new GuildSubscriptionsStore(DispatcherDefault, {
  CONNECTION_OPEN: handleConnectionOpenOrResumed,
  CONNECTION_RESUMED: handleConnectionOpenOrResumed,
  CONNECTION_CLOSED: function handleConnectionClosed() {
    c0 = false;
    importDefault = false;
    let subscriptions = {};
    const item = closure_20.forEach((item) => {
      let tmp = item === SelectedGuildStore.getGuildId();
      if (!tmp) {
        tmp = item === RTCConnectionStore.getGuildId();
      }
      if (!tmp) {
        const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp = item === guildId;
      }
      if (!tmp) {
        let tmp9 = null != obj;
        if (tmp9) {
          tmp9 = obj.guildId === item;
        }
        tmp = tmp9;
      }
      if (!tmp) {
        closure_20.clearWithoutFlushing(item, c0);
        if (c1) {
          obj[item] = closure_20.get(item);
        }
      }
    });
    if (!obj2.isEmpty(subscriptions)) {
      subscriptions = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: null };
      subscriptions.subscriptions = subscriptions;
      require("Dispatcher").dispatch(subscriptions);
      const tmp2Result = require("Dispatcher");
    }
  },
  IDLE: function handleIdle(idle) {
    if (idle.idle) {
      c0 = false;
      importDefault = true;
      let subscriptions = {};
      const item = closure_20.forEach((item) => {
        let tmp = item === SelectedGuildStore.getGuildId();
        if (!tmp) {
          tmp = item === RTCConnectionStore.getGuildId();
        }
        if (!tmp) {
          const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          tmp = item === guildId;
        }
        if (!tmp) {
          let tmp9 = null != obj;
          if (tmp9) {
            tmp9 = obj.guildId === item;
          }
          tmp = tmp9;
        }
        if (!tmp) {
          closure_20.clearWithoutFlushing(item, c0);
          if (c1) {
            obj[item] = closure_20.get(item);
          }
        }
      });
      if (!obj2.isEmpty(subscriptions)) {
        subscriptions = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: null };
        subscriptions.subscriptions = subscriptions;
        tmp3(tmp4[17]).dispatch(subscriptions);
        const tmp3Result = tmp3(tmp4[17]);
      }
      obj2 = require("module_12");
      tmp3 = importDefault;
      tmp4 = subscriptions;
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
      obj3 = FavoritesUtils;
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    closure_20.clearWithoutFlushing(guild.guild.id, true);
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function handleMembersAdd(arg0) {
    ({ guildId: require, userIds } = arg0);
    const item = userIds.forEach((item) => {
      if (item !== AuthenticationStore.getId()) {
        closure_20.subscribeUser(require, item);
      }
    });
    return false;
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function handleMembersRemove(arg0) {
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
    ({ guildId, channelId, ranges } = arg0);
    if (channelId === EVERYONE_CHANNEL_ID) {
      let flag = closure_20.subscribeChannel(guildId, channelId, ranges);
    } else {
      let parent_id = ChannelStore.getChannel(channelId);
      flag = false;
      if (null != parent_id) {
        guildId = parent_id.getGuildId();
        let isFavoritesGuildIdResult = guildId !== guildId;
        if (isFavoritesGuildIdResult) {
          isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(guildId);
        }
        if (isFavoritesGuildIdResult) {
          closure_20.subscribeToGuild(guildId);
        }
        let isThreadResult;
        if (parent_id != null) {
          isThreadResult = parent_id.isThread();
        }
        if (isThreadResult) {
          if (parent_id.type === constants.ANNOUNCEMENT_THREAD) {
            parent_id = parent_id.parent_id;
            let subscribeChannelResult = closure_20.subscribeChannel(guildId, parent_id, ranges);
          } else {
            subscribeChannelResult = parent_id.isActiveThread();
            if (subscribeChannelResult) {
              subscribeChannelResult = closure_20.subscribeThreadMemberList(guildId, channelId, SelectedChannelStore.getChannelId());
            }
          }
        } else {
          flag = closure_20.subscribeChannel(guildId, channelId, ranges);
        }
      }
    }
    return flag;
  },
  GUILD_SUBSCRIPTIONS: function handleGuild(guildId) {
    return closure_20.subscribeToGuild(guildId.guildId);
  },
  CHANNEL_PRELOAD: function handleChannelPreload(arg0) {
    ({ guildId, channelId } = arg0);
    let tmp = guildId;
    if (obj.isFavoritesGuildId(guildId)) {
      tmp = guildId;
      if (null != channelId) {
        const channel = ChannelStore.getChannel(channelId);
        guildId = undefined;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp = guildId;
      }
    }
    closure_20.subscribeToGuild(tmp);
    return false;
  },
  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: function handleOverlayTextChatSelectChannel(arg0) {
    ({ guildId, channelId } = arg0);
    let tmp = guildId;
    if (obj.isFavoritesGuildId(guildId)) {
      tmp = guildId;
      if (null != channelId) {
        const channel = ChannelStore.getChannel(channelId);
        guildId = undefined;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp = guildId;
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
    channel = channel.channel;
    if (channel.isArchivedThread()) {
      let result = closure_20.unsubscribeThreadMemberList(channel.guild_id, channel.id);
    } else {
      const isActiveThreadResult = channel.isActiveThread();
      let tmp2 = !isActiveThreadResult;
      if (isActiveThreadResult) {
        tmp2 = SelectedChannelStore.getChannelId() !== channel.id;
      }
      result = !tmp2;
      if (!tmp2) {
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
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/GuildSubscriptionsStore.tsx");

export default guildSubscriptionsStore;
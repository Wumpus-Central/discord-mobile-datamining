// === Module 6093: handleConnectionOpenOrResumed ===

// Module 6093 (handleConnectionOpenOrResumed)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getFavoritesAwareGuildName from "getFavoritesAwareGuildName" /* 1912 */;
import _enqueueDefault from "_enqueue" /* 6098 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "getHash" /* 4361 */;
import closure_6 from "initialize" /* 4092 */;
import closure_7 from "upsertAccount" /* 5192 */;
import closure_8 from "fetchFingerprint" /* 1218 */;
import { EVERYONE_CHANNEL_ID } from "getMemberListId" /* 6094 */;
import closure_10 from "handlePermissionsChange" /* 6095 */;
import closure_11 from "ensureGuildLoaded" /* 1387 */;
import closure_12 from "handleConnectionOpen" /* 4823 */;
import closure_13 from "trackCommunicationDisabled" /* 1992 */;
import closure_14 from "createGuildRecordFromRust" /* 1909 */;
import closure_15 from "createRTCConnection" /* 4522 */;
import closure_16 from "markAllUserIdListsStale" /* 4100 */;
import closure_17 from "handleConnectionOpen" /* 1981 */;
import closure_18 from "handleConnectionOpen" /* 4269 */;
import ME from "ME" /* 676 */;

require = arg1;
function handleConnectionOpenOrResumed(type) {
  let obj;
  let set;
  dependencyMap = undefined;
  if ("CONNECTION_OPEN" === type.type) {
    obj = true;
    set = false;
    obj = {};
    dependencyMap = obj;
    const item = store4.forEach((id) => {
      let tmp = id === closure_1_18.getGuildId();
      if (!tmp) {
        tmp = id === closure_1_15.getGuildId();
      }
      if (!tmp) {
        const channel = closure_1_11.getChannel(closure_1_17.getChannelId());
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp = id === guildId;
      }
      if (!tmp) {
        let tmp9 = null != closure_1_3;
        if (tmp9) {
          tmp9 = closure_1_3.guildId === id;
        }
        tmp = tmp9;
      }
      if (!tmp) {
        closure_1_20.clearWithoutFlushing(id, c0);
        if (c1) {
          obj[id] = obj2.get(id);
        }
        obj2 = closure_1_20;
      }
    });
    obj1 = set(12);
    if (!obj1.isEmpty(obj)) {
      obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: null };
      obj[1] = obj;
      tmp3(709).dispatch(obj);
      const tmp3Result = tmp3(709);
    }
    tmp3 = set;
  }
  const guildId = store3.getGuildId();
  if (null != guildId) {
    const channelId = store2.getChannelId(guildId);
    let tmp11 = guildId;
    if (obj5.isFavoritesGuildId(guildId)) {
      tmp11 = guildId;
      if (null != channelId) {
        const channel = store.getChannel(channelId);
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
    store4.subscribeToGuild(tmp11);
    obj5 = obj(1912);
  }
  obj = {};
  set = new Set(closure_6.lurkingGuildIds());
  dependencyMap = closure_6.mostRecentLurkedGuildId();
  const item1 = store4.forEach((id) => {
    if (null == closure_1_14.getGuild(id)) {
      closure_1_20.clearWithoutFlushing(id, true);
    } else {
      let hasItem = set.has(id);
      if (hasItem) {
        hasItem = id !== closure_2;
      }
      if (!hasItem) {
        obj[id] = closure_1_20.get(id);
      }
    }
  });
  if (!obj8.isEmpty(obj)) {
    obj1 = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: null };
    obj1[1] = obj;
    set(709).dispatch(obj1);
    const tmp18Result = set(709);
  }
}
function handleChannelSelect(arg0) {
  ({ guildId, channelId } = arg0);
  const isUnavailableResult = closure_12.isUnavailable(guildId);
  let flag = !isUnavailableResult;
  if (!isUnavailableResult) {
    let tmp4 = guildId;
    if (obj.isFavoritesGuildId(guildId)) {
      tmp4 = guildId;
      if (null != channelId) {
        const channel = store.getChannel(channelId);
        guildId = undefined;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp4 = guildId;
      }
    }
    store4.subscribeToGuild(tmp4);
    flag = false;
    obj = getFavoritesAwareGuildName;
  }
  return flag;
}
function resubscribe() {
  const guildId = store3.getGuildId();
  const channelId = store2.getChannelId();
  let tmp3 = guildId;
  if (obj.isFavoritesGuildId(guildId)) {
    tmp3 = guildId;
    if (null != channelId) {
      const channel = store.getChannel(channelId);
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
  store4.subscribeToGuild(tmp3);
  return false;
}
function handleSpotifyUpdate() {
  syncingWith = syncingWith.getSyncingWith();
  if (null == syncingWith) {
    if (null != obj) {
      store4.unsubscribeUser(obj.guildId, obj.userId);
      obj = null;
    }
  } else {
    const userId = syncingWith.userId;
    if (null != obj) {
      if (obj.userId === userId) {
        return false;
      }
    }
    if (friend.isFriend(userId)) {
      return false;
    } else {
      const memberOfResult = closure_13.memberOf(userId);
      if (0 === memberOfResult.length) {
        return false;
      } else {
        const first = callback(memberOfResult, 1)[0];
        obj = { guildId: null, userId: null };
        obj[0] = first;
        obj[1] = userId;
        store4.subscribeUser(first, userId);
      }
    }
  }
  return false;
}
({ ChannelSections, ChannelTypes: closure_19 } = ME);
let closure_20 = new _enqueueDefault((subscriptions) => {
  for (const key10004 in arg0) {
    let tmp6 = key10004;
    let tmp7 = guild;
    let isUnavailableResult = null != guild.getGuild(key10004);
    if (!isUnavailableResult) {
      let tmp3 = closure_12;
      isUnavailableResult = closure_12.isUnavailable(key10004);
    }
    if (isUnavailableResult) {
      continue;
    } else {
      delete tmp[tmp2];
      continue;
    }
    continue;
  }
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions };
  obj.dispatch(obj);
});
const Store = initializeDefault.Store;
class GuildSubscriptionsStore extends Store {
}
const prototype = GuildSubscriptionsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_8, closure_10, closure_11, closure_5, closure_12, closure_13, closure_14, closure_6, closure_15, closure_16, closure_17, closure_18, closure_7);
  const items = [closure_7];
  this.syncWith(items, handleSpotifyUpdate);
  const items1 = [closure_10];
  this.syncWith(items1, resubscribe);
};
prototype["getSubscribedThreadIds"] = function getSubscribedThreadIds() {
  return store4.getSubscribedThreadIds();
};
prototype["isSubscribedToThreads"] = function isSubscribedToThreads(arg0) {
  return store4.isSubscribedToThreads(arg0);
};
prototype["isSubscribedToAnyMember"] = function isSubscribedToAnyMember(arg0) {
  return store4.isSubscribedToAnyMember(arg0);
};
prototype["isSubscribedToMemberUpdates"] = function isSubscribedToMemberUpdates(arg0) {
  return store4.isSubscribedToMemberUpdates(arg0);
};
prototype["isSubscribedToAnyGuildChannel"] = function isSubscribedToAnyGuildChannel(id) {
  const channels = store4.get(id).channels;
  let tmp = null != channels;
  if (tmp) {
    const _Object = Object;
    tmp = Object.keys(channels).length > 0;
  }
  return tmp;
};
GuildSubscriptionsStore.displayName = "GuildSubscriptionsStore";
const guildSubscriptionsStore = new GuildSubscriptionsStore(dispatcherDefault, {
  CONNECTION_OPEN: handleConnectionOpenOrResumed,
  CONNECTION_RESUMED: handleConnectionOpenOrResumed,
  CONNECTION_CLOSED: function handleConnectionClosed() {
    c0 = false;
    importDefault = false;
    let obj = {};
    const item = store4.forEach((id) => {
      let tmp = id === closure_1_18.getGuildId();
      if (!tmp) {
        tmp = id === closure_1_15.getGuildId();
      }
      if (!tmp) {
        const channel = closure_1_11.getChannel(closure_1_17.getChannelId());
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp = id === guildId;
      }
      if (!tmp) {
        let tmp9 = null != closure_1_3;
        if (tmp9) {
          tmp9 = closure_1_3.guildId === id;
        }
        tmp = tmp9;
      }
      if (!tmp) {
        closure_1_20.clearWithoutFlushing(id, c0);
        if (c1) {
          obj[id] = obj2.get(id);
        }
        obj2 = closure_1_20;
      }
    });
    if (!obj2.isEmpty(obj)) {
      obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: null };
      obj[1] = obj;
      importDefault(obj[17]).dispatch(obj);
      const tmp2Result = importDefault(obj[17]);
    }
  },
  IDLE: function handleIdle(idle) {
    if (idle.idle) {
      c0 = false;
      importDefault = true;
      let obj = {};
      const item = store4.forEach((id) => {
        let tmp = id === closure_1_18.getGuildId();
        if (!tmp) {
          tmp = id === closure_1_15.getGuildId();
        }
        if (!tmp) {
          const channel = closure_1_11.getChannel(closure_1_17.getChannelId());
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          tmp = id === guildId;
        }
        if (!tmp) {
          let tmp9 = null != closure_1_3;
          if (tmp9) {
            tmp9 = closure_1_3.guildId === id;
          }
          tmp = tmp9;
        }
        if (!tmp) {
          closure_1_20.clearWithoutFlushing(id, c0);
          if (c1) {
            obj[id] = obj2.get(id);
          }
          obj2 = closure_1_20;
        }
      });
      if (!obj2.isEmpty(obj)) {
        obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: null };
        obj[1] = obj;
        importDefault(obj[17]).dispatch(obj);
        const tmp3Result = importDefault(obj[17]);
      }
    } else {
      return false;
    }
  },
  LOGOUT: function handleLogout() {
    store4.reset();
  },
  VOICE_CHANNEL_SELECT: handleChannelSelect,
  CHANNEL_SELECT: handleChannelSelect,
  GUILD_CREATE: function handleGuildCreate(guild) {
    if (guild.guild.id === store3.getGuildId()) {
      const guildId = store3.getGuildId();
      const channelId = store2.getChannelId();
      let tmp2 = guildId;
      if (obj3.isFavoritesGuildId(guildId)) {
        tmp2 = guildId;
        if (null != channelId) {
          const channel = store.getChannel(channelId);
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
      store4.subscribeToGuild(tmp2);
      obj3 = getFavoritesAwareGuildName;
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    store4.clearWithoutFlushing(guild.guild.id, true);
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function handleMembersAdd(arg0) {
    ({ guildId: require, userIds } = arg0);
    const item = userIds.forEach((userId) => {
      if (userId !== closure_1_8.getId()) {
        closure_1_20.subscribeUser(closure_0, userId);
      }
    });
    return false;
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function handleMembersRemove(arg0) {
    ({ guildId: require, userIds } = arg0);
    const item = userIds.forEach((userId) => {
      closure_1_20.unsubscribeUser(closure_0, userId);
    });
    return false;
  },
  GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function handleAddMemberUpdatesGuildSubscription(guildId) {
    const result = store4.subscribeToMemberUpdates(guildId.guildId);
  },
  GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function handleRemoveMemberUpdatesGuildSubscription(guildId) {
    const result = store4.unsubscribeFromMemberUpdates(guildId.guildId);
  },
  GUILD_SUBSCRIPTIONS_CHANNEL: function handleChannel(arg0) {
    ({ guildId, channelId, ranges } = arg0);
    if (channelId === EVERYONE_CHANNEL_ID) {
      let flag = store4.subscribeChannel(guildId, channelId, ranges);
    } else {
      let parent_id = store.getChannel(channelId);
      flag = false;
      if (null != parent_id) {
        guildId = parent_id.getGuildId();
        let isFavoritesGuildIdResult = guildId !== guildId;
        if (isFavoritesGuildIdResult) {
          isFavoritesGuildIdResult = getFavoritesAwareGuildName.isFavoritesGuildId(guildId);
          const obj = getFavoritesAwareGuildName;
        }
        if (isFavoritesGuildIdResult) {
          store4.subscribeToGuild(guildId);
        }
        let isThreadResult;
        if (parent_id != null) {
          isThreadResult = parent_id.isThread();
        }
        if (isThreadResult) {
          if (parent_id.type === constants.ANNOUNCEMENT_THREAD) {
            parent_id = parent_id.parent_id;
            let subscribeChannelResult = store4.subscribeChannel(guildId, parent_id, ranges);
          } else {
            subscribeChannelResult = parent_id.isActiveThread();
            if (subscribeChannelResult) {
              subscribeChannelResult = store4.subscribeThreadMemberList(guildId, channelId, store2.getChannelId());
            }
          }
        } else {
          flag = store4.subscribeChannel(guildId, channelId, ranges);
        }
      }
    }
    return flag;
  },
  GUILD_SUBSCRIPTIONS: function handleGuild(guildId) {
    return store4.subscribeToGuild(guildId.guildId);
  },
  CHANNEL_PRELOAD: function handleChannelPreload(arg0) {
    ({ guildId, channelId } = arg0);
    let tmp = guildId;
    if (obj.isFavoritesGuildId(guildId)) {
      tmp = guildId;
      if (null != channelId) {
        const channel = store.getChannel(channelId);
        guildId = undefined;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp = guildId;
      }
    }
    store4.subscribeToGuild(tmp);
    return false;
  },
  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: function handleOverlayTextChatSelectChannel(arg0) {
    ({ guildId, channelId } = arg0);
    let tmp = guildId;
    if (obj.isFavoritesGuildId(guildId)) {
      tmp = guildId;
      if (null != channelId) {
        const channel = store.getChannel(channelId);
        guildId = undefined;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp = guildId;
      }
    }
    store4.subscribeToGuild(tmp);
    return false;
  },
  INBOX_OPEN: function handleInboxOpen(arg0) {
    const iter = arg0.guildIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult) {
        let tmp3 = store4;
        let tmp4 = nextResult;
        let subscribeToGuildResult = store4.subscribeToGuild(tmp2);
      }
      continue;
    }
    return false;
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    channel = channel.channel;
    if (channel.isArchivedThread()) {
      let result = store4.unsubscribeThreadMemberList(channel.guild_id, channel.id);
    } else {
      const isActiveThreadResult = channel.isActiveThread();
      let tmp2 = !isActiveThreadResult;
      if (isActiveThreadResult) {
        tmp2 = store2.getChannelId() !== channel.id;
      }
      result = !tmp2;
      if (!tmp2) {
        ({ guild_id, id } = channel);
        const result1 = store4.subscribeThreadMemberList(guild_id, id, store2.getChannelId());
      }
    }
    return result;
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    return store4.unsubscribeThreadMemberList(channel.guild_id, channel.id);
  },
  THREAD_LIST_SYNC: resubscribe
});
let obj = {
  CONNECTION_OPEN: handleConnectionOpenOrResumed,
  CONNECTION_RESUMED: handleConnectionOpenOrResumed,
  CONNECTION_CLOSED: function handleConnectionClosed() {
    c0 = false;
    importDefault = false;
    let obj = {};
    const item = store4.forEach((id) => {
      let tmp = id === closure_1_18.getGuildId();
      if (!tmp) {
        tmp = id === closure_1_15.getGuildId();
      }
      if (!tmp) {
        const channel = closure_1_11.getChannel(closure_1_17.getChannelId());
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp = id === guildId;
      }
      if (!tmp) {
        let tmp9 = null != closure_1_3;
        if (tmp9) {
          tmp9 = closure_1_3.guildId === id;
        }
        tmp = tmp9;
      }
      if (!tmp) {
        closure_1_20.clearWithoutFlushing(id, c0);
        if (c1) {
          obj[id] = obj2.get(id);
        }
        obj2 = closure_1_20;
      }
    });
    if (!obj2.isEmpty(obj)) {
      obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: null };
      obj[1] = obj;
      importDefault(obj[17]).dispatch(obj);
      const tmp2Result = importDefault(obj[17]);
    }
  },
  IDLE: function handleIdle(idle) {
    if (idle.idle) {
      c0 = false;
      importDefault = true;
      let obj = {};
      const item = store4.forEach((id) => {
        let tmp = id === closure_1_18.getGuildId();
        if (!tmp) {
          tmp = id === closure_1_15.getGuildId();
        }
        if (!tmp) {
          const channel = closure_1_11.getChannel(closure_1_17.getChannelId());
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          tmp = id === guildId;
        }
        if (!tmp) {
          let tmp9 = null != closure_1_3;
          if (tmp9) {
            tmp9 = closure_1_3.guildId === id;
          }
          tmp = tmp9;
        }
        if (!tmp) {
          closure_1_20.clearWithoutFlushing(id, c0);
          if (c1) {
            obj[id] = obj2.get(id);
          }
          obj2 = closure_1_20;
        }
      });
      if (!obj2.isEmpty(obj)) {
        obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: null };
        obj[1] = obj;
        importDefault(obj[17]).dispatch(obj);
        const tmp3Result = importDefault(obj[17]);
      }
    } else {
      return false;
    }
  },
  LOGOUT: function handleLogout() {
    store4.reset();
  },
  VOICE_CHANNEL_SELECT: handleChannelSelect,
  CHANNEL_SELECT: handleChannelSelect,
  GUILD_CREATE: function handleGuildCreate(guild) {
    if (guild.guild.id === store3.getGuildId()) {
      const guildId = store3.getGuildId();
      const channelId = store2.getChannelId();
      let tmp2 = guildId;
      if (obj3.isFavoritesGuildId(guildId)) {
        tmp2 = guildId;
        if (null != channelId) {
          const channel = store.getChannel(channelId);
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
      store4.subscribeToGuild(tmp2);
      obj3 = getFavoritesAwareGuildName;
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    store4.clearWithoutFlushing(guild.guild.id, true);
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function handleMembersAdd(arg0) {
    ({ guildId: require, userIds } = arg0);
    const item = userIds.forEach((userId) => {
      if (userId !== closure_1_8.getId()) {
        closure_1_20.subscribeUser(closure_0, userId);
      }
    });
    return false;
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function handleMembersRemove(arg0) {
    ({ guildId: require, userIds } = arg0);
    const item = userIds.forEach((userId) => {
      closure_1_20.unsubscribeUser(closure_0, userId);
    });
    return false;
  },
  GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function handleAddMemberUpdatesGuildSubscription(guildId) {
    const result = store4.subscribeToMemberUpdates(guildId.guildId);
  },
  GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function handleRemoveMemberUpdatesGuildSubscription(guildId) {
    const result = store4.unsubscribeFromMemberUpdates(guildId.guildId);
  },
  GUILD_SUBSCRIPTIONS_CHANNEL: function handleChannel(arg0) {
    ({ guildId, channelId, ranges } = arg0);
    if (channelId === EVERYONE_CHANNEL_ID) {
      let flag = store4.subscribeChannel(guildId, channelId, ranges);
    } else {
      let parent_id = store.getChannel(channelId);
      flag = false;
      if (null != parent_id) {
        guildId = parent_id.getGuildId();
        let isFavoritesGuildIdResult = guildId !== guildId;
        if (isFavoritesGuildIdResult) {
          isFavoritesGuildIdResult = getFavoritesAwareGuildName.isFavoritesGuildId(guildId);
          const obj = getFavoritesAwareGuildName;
        }
        if (isFavoritesGuildIdResult) {
          store4.subscribeToGuild(guildId);
        }
        let isThreadResult;
        if (parent_id != null) {
          isThreadResult = parent_id.isThread();
        }
        if (isThreadResult) {
          if (parent_id.type === constants.ANNOUNCEMENT_THREAD) {
            parent_id = parent_id.parent_id;
            let subscribeChannelResult = store4.subscribeChannel(guildId, parent_id, ranges);
          } else {
            subscribeChannelResult = parent_id.isActiveThread();
            if (subscribeChannelResult) {
              subscribeChannelResult = store4.subscribeThreadMemberList(guildId, channelId, store2.getChannelId());
            }
          }
        } else {
          flag = store4.subscribeChannel(guildId, channelId, ranges);
        }
      }
    }
    return flag;
  },
  GUILD_SUBSCRIPTIONS: function handleGuild(guildId) {
    return store4.subscribeToGuild(guildId.guildId);
  },
  CHANNEL_PRELOAD: function handleChannelPreload(arg0) {
    ({ guildId, channelId } = arg0);
    let tmp = guildId;
    if (obj.isFavoritesGuildId(guildId)) {
      tmp = guildId;
      if (null != channelId) {
        const channel = store.getChannel(channelId);
        guildId = undefined;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp = guildId;
      }
    }
    store4.subscribeToGuild(tmp);
    return false;
  },
  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: function handleOverlayTextChatSelectChannel(arg0) {
    ({ guildId, channelId } = arg0);
    let tmp = guildId;
    if (obj.isFavoritesGuildId(guildId)) {
      tmp = guildId;
      if (null != channelId) {
        const channel = store.getChannel(channelId);
        guildId = undefined;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp = guildId;
      }
    }
    store4.subscribeToGuild(tmp);
    return false;
  },
  INBOX_OPEN: function handleInboxOpen(arg0) {
    const iter = arg0.guildIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult) {
        let tmp3 = store4;
        let tmp4 = nextResult;
        let subscribeToGuildResult = store4.subscribeToGuild(tmp2);
      }
      continue;
    }
    return false;
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    channel = channel.channel;
    if (channel.isArchivedThread()) {
      let result = store4.unsubscribeThreadMemberList(channel.guild_id, channel.id);
    } else {
      const isActiveThreadResult = channel.isActiveThread();
      let tmp2 = !isActiveThreadResult;
      if (isActiveThreadResult) {
        tmp2 = store2.getChannelId() !== channel.id;
      }
      result = !tmp2;
      if (!tmp2) {
        ({ guild_id, id } = channel);
        const result1 = store4.subscribeThreadMemberList(guild_id, id, store2.getChannelId());
      }
    }
    return result;
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    return store4.unsubscribeThreadMemberList(channel.guild_id, channel.id);
  },
  THREAD_LIST_SYNC: resubscribe
};
let tmp3 = new _enqueueDefault((subscriptions) => {
  for (const key10004 in arg0) {
    let tmp6 = key10004;
    let tmp7 = guild;
    let isUnavailableResult = null != guild.getGuild(key10004);
    if (!isUnavailableResult) {
      let tmp3 = closure_12;
      isUnavailableResult = closure_12.isUnavailable(key10004);
    }
    if (isUnavailableResult) {
      continue;
    } else {
      delete tmp[tmp2];
      continue;
    }
    continue;
  }
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions };
  obj.dispatch(obj);
});
let result = require("set").fileFinishedImporting("stores/GuildSubscriptionsStore.tsx");

export default guildSubscriptionsStore;
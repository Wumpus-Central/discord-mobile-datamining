import _slicedToArray from "_slicedToArray";
import getHash from "getHash";
import initialize from "initialize";
import upsertAccount from "upsertAccount";
import fetchFingerprint from "fetchFingerprint";
import { EVERYONE_CHANNEL_ID } from "getMemberListId";
import handlePermissionsChange from "handlePermissionsChange";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import createRTCConnection from "createRTCConnection";
import upsertRelationship from "upsertRelationship";
import closure_17 from "handleConnectionOpen";
import closure_18 from "handleConnectionOpen";
import ME from "ME";
import { Store } from "initialize";

let ChannelSections;
let closure_19;
const require = arg1;
function handleConnectionOpenOrResumed(type) {
  let obj;
  let set;
  let dependencyMap;
  if ("CONNECTION_OPEN" === type.type) {
    obj = true;
    set = false;
    obj = {};
    dependencyMap = obj;
    const item = tmp3.forEach((id) => {
      let tmp = id === outer1_18.getGuildId();
      if (!tmp) {
        tmp = id === outer1_15.getGuildId();
      }
      if (!tmp) {
        const channel = outer1_11.getChannel(outer1_17.getChannelId());
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp = id === guildId;
      }
      if (!tmp) {
        let tmp9 = null != outer1_3;
        if (tmp9) {
          tmp9 = outer1_3.guildId === id;
        }
        tmp = tmp9;
      }
      if (!tmp) {
        outer1_20.clearWithoutFlushing(id, c0);
        if (c1) {
          obj[id] = obj2.get(id);
        }
        obj2 = outer1_20;
      }
    });
    let obj1 = set(12);
    if (!obj1.isEmpty(obj)) {
      obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: null };
      obj[1] = obj;
      tmp3(709).dispatch(obj);
      const tmp3Result = tmp3(709);
    }
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
    tmp3.subscribeToGuild(tmp11);
    obj5 = obj(1865);
  }
  obj = {};
  set = new Set(initialize.lurkingGuildIds());
  dependencyMap = initialize.mostRecentLurkedGuildId();
  const item1 = tmp3.forEach((id) => {
    if (null == outer1_14.getGuild(id)) {
      outer1_20.clearWithoutFlushing(id, true);
    } else {
      let hasItem = set.has(id);
      if (hasItem) {
        hasItem = id !== closure_2;
      }
      if (!hasItem) {
        obj[id] = outer1_20.get(id);
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
  let channelId;
  let guildId;
  ({ guildId, channelId } = arg0);
  const isUnavailableResult = handleConnectionOpen.isUnavailable(guildId);
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
    dependencyMap.subscribeToGuild(tmp4);
    flag = false;
    obj = require(1865) /* getFavoritesAwareGuildName */;
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
  tmp3.subscribeToGuild(tmp3);
  return false;
}
function handleSpotifyUpdate() {
  syncingWith = syncingWith.getSyncingWith();
  if (null == syncingWith) {
    if (null != obj) {
      tmp3.unsubscribeUser(obj.guildId, obj.userId);
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
      const memberOfResult = trackCommunicationDisabled.memberOf(userId);
      if (0 === memberOfResult.length) {
        return false;
      } else {
        const first = callback(memberOfResult, 1)[0];
        obj = { guildId: null, userId: null };
        obj[0] = first;
        obj[1] = userId;
        tmp3.subscribeUser(first, userId);
      }
    }
  }
  return false;
}
({ ChannelSections, ChannelTypes: closure_19 } = ME);
let closure_20 = new require("_enqueue")((subscriptions) => {
  for (const key10004 in arg0) {
    let tmp6 = key10004;
    let tmp7 = guild;
    let isUnavailableResult = null != guild.getGuild(key10004);
    if (!isUnavailableResult) {
      let tmp3 = handleConnectionOpen;
      isUnavailableResult = handleConnectionOpen.isUnavailable(key10004);
    }
    if (isUnavailableResult) {
      continue;
    } else {
      delete tmp[tmp2];
      continue;
    }
    continue;
  }
  let obj = importDefault(709);
  obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions };
  obj.dispatch(obj);
});
class GuildSubscriptionsStore extends Store {
}
const prototype = GuildSubscriptionsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint, handlePermissionsChange, ensureGuildLoaded, getHash, handleConnectionOpen, trackCommunicationDisabled, createGuildRecordFromRust, initialize, createRTCConnection, upsertRelationship, closure_17, closure_18, upsertAccount);
  const items = [upsertAccount];
  this.syncWith(items, handleSpotifyUpdate);
  const items1 = [handlePermissionsChange];
  this.syncWith(items1, resubscribe);
};
prototype["getSubscribedThreadIds"] = function getSubscribedThreadIds() {
  return tmp3.getSubscribedThreadIds();
};
prototype["isSubscribedToThreads"] = function isSubscribedToThreads(arg0) {
  return tmp3.isSubscribedToThreads(arg0);
};
prototype["isSubscribedToAnyMember"] = function isSubscribedToAnyMember(arg0) {
  return tmp3.isSubscribedToAnyMember(arg0);
};
prototype["isSubscribedToMemberUpdates"] = function isSubscribedToMemberUpdates(arg0) {
  return tmp3.isSubscribedToMemberUpdates(arg0);
};
prototype["isSubscribedToAnyGuildChannel"] = function isSubscribedToAnyGuildChannel(id) {
  const channels = tmp3.get(id).channels;
  let tmp = null != channels;
  if (tmp) {
    const _Object = Object;
    tmp = Object.keys(channels).length > 0;
  }
  return tmp;
};
GuildSubscriptionsStore.displayName = "GuildSubscriptionsStore";
const guildSubscriptionsStore = new GuildSubscriptionsStore(require("dispatcher"), {
  CONNECTION_OPEN: handleConnectionOpenOrResumed,
  CONNECTION_RESUMED: handleConnectionOpenOrResumed,
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let c0 = false;
    const importDefault = false;
    let obj = {};
    const item = tmp3.forEach((id) => {
      let tmp = id === outer1_18.getGuildId();
      if (!tmp) {
        tmp = id === outer1_15.getGuildId();
      }
      if (!tmp) {
        const channel = outer1_11.getChannel(outer1_17.getChannelId());
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp = id === guildId;
      }
      if (!tmp) {
        let tmp9 = null != outer1_3;
        if (tmp9) {
          tmp9 = outer1_3.guildId === id;
        }
        tmp = tmp9;
      }
      if (!tmp) {
        outer1_20.clearWithoutFlushing(id, c0);
        if (c1) {
          obj[id] = obj2.get(id);
        }
        obj2 = outer1_20;
      }
    });
    if (!obj2.isEmpty(obj)) {
      obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: null };
      obj[1] = obj;
      importDefault(tmp3[17]).dispatch(obj);
      const tmp2Result = importDefault(tmp3[17]);
    }
  },
  IDLE: function handleIdle(idle) {
    if (idle.idle) {
      let c0 = false;
      const importDefault = true;
      let obj = {};
      const item = tmp3.forEach((id) => {
        let tmp = id === outer1_18.getGuildId();
        if (!tmp) {
          tmp = id === outer1_15.getGuildId();
        }
        if (!tmp) {
          const channel = outer1_11.getChannel(outer1_17.getChannelId());
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          tmp = id === guildId;
        }
        if (!tmp) {
          let tmp9 = null != outer1_3;
          if (tmp9) {
            tmp9 = outer1_3.guildId === id;
          }
          tmp = tmp9;
        }
        if (!tmp) {
          outer1_20.clearWithoutFlushing(id, c0);
          if (c1) {
            obj[id] = obj2.get(id);
          }
          obj2 = outer1_20;
        }
      });
      if (!obj2.isEmpty(obj)) {
        obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: null };
        obj[1] = obj;
        tmp3(obj[17]).dispatch(obj);
        const tmp3Result = tmp3(obj[17]);
      }
    } else {
      return false;
    }
  },
  LOGOUT: function handleLogout() {
    tmp3.reset();
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
      tmp3.subscribeToGuild(tmp2);
      obj3 = require(1865) /* getFavoritesAwareGuildName */;
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    tmp3.clearWithoutFlushing(guild.guild.id, true);
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function handleMembersAdd(arg0) {
    let require;
    let userIds;
    ({ guildId: require, userIds } = arg0);
    const item = userIds.forEach((userId) => {
      if (userId !== outer1_8.getId()) {
        outer1_20.subscribeUser(closure_0, userId);
      }
    });
    return false;
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function handleMembersRemove(arg0) {
    let require;
    let userIds;
    ({ guildId: require, userIds } = arg0);
    const item = userIds.forEach((userId) => {
      outer1_20.unsubscribeUser(closure_0, userId);
    });
    return false;
  },
  GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function handleAddMemberUpdatesGuildSubscription(guildId) {
    const result = tmp3.subscribeToMemberUpdates(guildId.guildId);
  },
  GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function handleRemoveMemberUpdatesGuildSubscription(guildId) {
    const result = tmp3.unsubscribeFromMemberUpdates(guildId.guildId);
  },
  GUILD_SUBSCRIPTIONS_CHANNEL: function handleChannel(arg0) {
    let channelId;
    let guildId;
    let ranges;
    ({ guildId, channelId, ranges } = arg0);
    if (channelId === EVERYONE_CHANNEL_ID) {
      let flag = tmp3.subscribeChannel(guildId, channelId, ranges);
    } else {
      let parent_id = store.getChannel(channelId);
      flag = false;
      if (null != parent_id) {
        guildId = parent_id.getGuildId();
        let isFavoritesGuildIdResult = guildId !== guildId;
        if (isFavoritesGuildIdResult) {
          isFavoritesGuildIdResult = require(1865) /* getFavoritesAwareGuildName */.isFavoritesGuildId(guildId);
          const obj = require(1865) /* getFavoritesAwareGuildName */;
        }
        if (isFavoritesGuildIdResult) {
          tmp3.subscribeToGuild(guildId);
        }
        let isThreadResult;
        if (parent_id != null) {
          isThreadResult = parent_id.isThread();
        }
        if (isThreadResult) {
          if (parent_id.type === constants.ANNOUNCEMENT_THREAD) {
            parent_id = parent_id.parent_id;
            let subscribeChannelResult = tmp3.subscribeChannel(guildId, parent_id, ranges);
          } else {
            subscribeChannelResult = parent_id.isActiveThread();
            if (subscribeChannelResult) {
              subscribeChannelResult = tmp3.subscribeThreadMemberList(guildId, channelId, store2.getChannelId());
            }
          }
        } else {
          flag = tmp3.subscribeChannel(guildId, channelId, ranges);
        }
      }
    }
    return flag;
  },
  GUILD_SUBSCRIPTIONS: function handleGuild(guildId) {
    return tmp3.subscribeToGuild(guildId.guildId);
  },
  CHANNEL_PRELOAD: function handleChannelPreload(arg0) {
    let channelId;
    let guildId;
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
        const tmp3 = store;
      }
    }
    tmp3.subscribeToGuild(tmp);
    return false;
  },
  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: function handleOverlayTextChatSelectChannel(arg0) {
    let channelId;
    let guildId;
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
        const tmp3 = store;
      }
    }
    tmp3.subscribeToGuild(tmp);
    return false;
  },
  INBOX_OPEN: function handleInboxOpen(arg0) {
    const iter = arg0.guildIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult) {
        let tmp4 = nextResult;
        let subscribeToGuildResult = tmp3.subscribeToGuild(tmp2);
      }
      continue;
    }
    return false;
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    let guild_id;
    let id;
    channel = channel.channel;
    if (channel.isArchivedThread()) {
      let result = tmp3.unsubscribeThreadMemberList(channel.guild_id, channel.id);
    } else {
      const isActiveThreadResult = channel.isActiveThread();
      let tmp2 = !isActiveThreadResult;
      if (isActiveThreadResult) {
        tmp2 = store2.getChannelId() !== channel.id;
      }
      result = !tmp2;
      if (!tmp2) {
        ({ guild_id, id } = channel);
        const result1 = tmp3.subscribeThreadMemberList(guild_id, id, store2.getChannelId());
      }
    }
    return result;
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    return tmp3.unsubscribeThreadMemberList(channel.guild_id, channel.id);
  },
  THREAD_LIST_SYNC: resubscribe
});
let obj = {
  CONNECTION_OPEN: handleConnectionOpenOrResumed,
  CONNECTION_RESUMED: handleConnectionOpenOrResumed,
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let c0 = false;
    const importDefault = false;
    let obj = {};
    const item = tmp3.forEach((id) => {
      let tmp = id === outer1_18.getGuildId();
      if (!tmp) {
        tmp = id === outer1_15.getGuildId();
      }
      if (!tmp) {
        const channel = outer1_11.getChannel(outer1_17.getChannelId());
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp = id === guildId;
      }
      if (!tmp) {
        let tmp9 = null != outer1_3;
        if (tmp9) {
          tmp9 = outer1_3.guildId === id;
        }
        tmp = tmp9;
      }
      if (!tmp) {
        outer1_20.clearWithoutFlushing(id, c0);
        if (c1) {
          obj[id] = obj2.get(id);
        }
        obj2 = outer1_20;
      }
    });
    if (!obj2.isEmpty(obj)) {
      obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: null };
      obj[1] = obj;
      importDefault(tmp3[17]).dispatch(obj);
      const tmp2Result = importDefault(tmp3[17]);
    }
  },
  IDLE: function handleIdle(idle) {
    if (idle.idle) {
      let c0 = false;
      const importDefault = true;
      let obj = {};
      const item = tmp3.forEach((id) => {
        let tmp = id === outer1_18.getGuildId();
        if (!tmp) {
          tmp = id === outer1_15.getGuildId();
        }
        if (!tmp) {
          const channel = outer1_11.getChannel(outer1_17.getChannelId());
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          tmp = id === guildId;
        }
        if (!tmp) {
          let tmp9 = null != outer1_3;
          if (tmp9) {
            tmp9 = outer1_3.guildId === id;
          }
          tmp = tmp9;
        }
        if (!tmp) {
          outer1_20.clearWithoutFlushing(id, c0);
          if (c1) {
            obj[id] = obj2.get(id);
          }
          obj2 = outer1_20;
        }
      });
      if (!obj2.isEmpty(obj)) {
        obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: null };
        obj[1] = obj;
        tmp3(obj[17]).dispatch(obj);
        const tmp3Result = tmp3(obj[17]);
      }
    } else {
      return false;
    }
  },
  LOGOUT: function handleLogout() {
    tmp3.reset();
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
      tmp3.subscribeToGuild(tmp2);
      obj3 = require(1865) /* getFavoritesAwareGuildName */;
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    tmp3.clearWithoutFlushing(guild.guild.id, true);
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function handleMembersAdd(arg0) {
    let require;
    let userIds;
    ({ guildId: require, userIds } = arg0);
    const item = userIds.forEach((userId) => {
      if (userId !== outer1_8.getId()) {
        outer1_20.subscribeUser(closure_0, userId);
      }
    });
    return false;
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function handleMembersRemove(arg0) {
    let require;
    let userIds;
    ({ guildId: require, userIds } = arg0);
    const item = userIds.forEach((userId) => {
      outer1_20.unsubscribeUser(closure_0, userId);
    });
    return false;
  },
  GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function handleAddMemberUpdatesGuildSubscription(guildId) {
    const result = tmp3.subscribeToMemberUpdates(guildId.guildId);
  },
  GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function handleRemoveMemberUpdatesGuildSubscription(guildId) {
    const result = tmp3.unsubscribeFromMemberUpdates(guildId.guildId);
  },
  GUILD_SUBSCRIPTIONS_CHANNEL: function handleChannel(arg0) {
    let channelId;
    let guildId;
    let ranges;
    ({ guildId, channelId, ranges } = arg0);
    if (channelId === EVERYONE_CHANNEL_ID) {
      let flag = tmp3.subscribeChannel(guildId, channelId, ranges);
    } else {
      let parent_id = store.getChannel(channelId);
      flag = false;
      if (null != parent_id) {
        guildId = parent_id.getGuildId();
        let isFavoritesGuildIdResult = guildId !== guildId;
        if (isFavoritesGuildIdResult) {
          isFavoritesGuildIdResult = require(1865) /* getFavoritesAwareGuildName */.isFavoritesGuildId(guildId);
          const obj = require(1865) /* getFavoritesAwareGuildName */;
        }
        if (isFavoritesGuildIdResult) {
          tmp3.subscribeToGuild(guildId);
        }
        let isThreadResult;
        if (parent_id != null) {
          isThreadResult = parent_id.isThread();
        }
        if (isThreadResult) {
          if (parent_id.type === constants.ANNOUNCEMENT_THREAD) {
            parent_id = parent_id.parent_id;
            let subscribeChannelResult = tmp3.subscribeChannel(guildId, parent_id, ranges);
          } else {
            subscribeChannelResult = parent_id.isActiveThread();
            if (subscribeChannelResult) {
              subscribeChannelResult = tmp3.subscribeThreadMemberList(guildId, channelId, store2.getChannelId());
            }
          }
        } else {
          flag = tmp3.subscribeChannel(guildId, channelId, ranges);
        }
      }
    }
    return flag;
  },
  GUILD_SUBSCRIPTIONS: function handleGuild(guildId) {
    return tmp3.subscribeToGuild(guildId.guildId);
  },
  CHANNEL_PRELOAD: function handleChannelPreload(arg0) {
    let channelId;
    let guildId;
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
        const tmp3 = store;
      }
    }
    tmp3.subscribeToGuild(tmp);
    return false;
  },
  OVERLAY_TEXT_CHAT_SELECT_CHANNEL: function handleOverlayTextChatSelectChannel(arg0) {
    let channelId;
    let guildId;
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
        const tmp3 = store;
      }
    }
    tmp3.subscribeToGuild(tmp);
    return false;
  },
  INBOX_OPEN: function handleInboxOpen(arg0) {
    const iter = arg0.guildIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult) {
        let tmp4 = nextResult;
        let subscribeToGuildResult = tmp3.subscribeToGuild(tmp2);
      }
      continue;
    }
    return false;
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    let guild_id;
    let id;
    channel = channel.channel;
    if (channel.isArchivedThread()) {
      let result = tmp3.unsubscribeThreadMemberList(channel.guild_id, channel.id);
    } else {
      const isActiveThreadResult = channel.isActiveThread();
      let tmp2 = !isActiveThreadResult;
      if (isActiveThreadResult) {
        tmp2 = store2.getChannelId() !== channel.id;
      }
      result = !tmp2;
      if (!tmp2) {
        ({ guild_id, id } = channel);
        const result1 = tmp3.subscribeThreadMemberList(guild_id, id, store2.getChannelId());
      }
    }
    return result;
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    return tmp3.unsubscribeThreadMemberList(channel.guild_id, channel.id);
  },
  THREAD_LIST_SYNC: resubscribe
};
let tmp3 = new require("_enqueue")((subscriptions) => {
  for (const key10004 in arg0) {
    let tmp6 = key10004;
    let tmp7 = guild;
    let isUnavailableResult = null != guild.getGuild(key10004);
    if (!isUnavailableResult) {
      let tmp3 = handleConnectionOpen;
      isUnavailableResult = handleConnectionOpen.isUnavailable(key10004);
    }
    if (isUnavailableResult) {
      continue;
    } else {
      delete tmp[tmp2];
      continue;
    }
    continue;
  }
  let obj = importDefault(709);
  obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions };
  obj.dispatch(obj);
});
let result = require("initialize").fileFinishedImporting("stores/GuildSubscriptionsStore.tsx");

export default guildSubscriptionsStore;
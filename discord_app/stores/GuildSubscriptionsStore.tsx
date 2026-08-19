// discord_app/stores/GuildSubscriptionsStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import getFavoritesAwareGuildName from "../modules/favorites/FavoritesUtils.tsx";
import _enqueueDefault from "../lib/guild/GuildSubscriptions.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import getHash from "../modules/experiments/ExperimentStore.tsx";
import initialize from "../modules/lurker_mode/LurkingStore.tsx";
import upsertAccount from "../modules/spotify/SpotifyStore.tsx";
import fetchFingerprint from "AuthenticationStore.tsx";
import { EVERYONE_CHANNEL_ID } from "ChannelMemberStore.tsx";
import handlePermissionsChange from "ChannelSectionStore.tsx";
import ensureGuildLoaded from "ChannelStore.tsx";
import handleConnectionOpen from "GuildAvailabilityStore.tsx";
import trackCommunicationDisabled from "GuildMemberStore.tsx";
import createGuildRecordFromRust from "GuildStore.tsx";
import createRTCConnection from "RTCConnectionStore.tsx";
import markAllUserIdListsStale from "RelationshipStore.tsx";
import handleConnectionOpen2 from "SelectedChannelStore.tsx";
import handleConnectionOpen3 from "SelectedGuildStore.tsx";
import ME from "../Constants.tsx";

require = fn;
function handleConnectionOpenOrResumed(type) {
  let obj;
  let set;
  dependencyMap = undefined;
  if ("CONNECTION_OPEN" === type.type) {
    set = false;
    obj = {};
    dependencyMap = obj;
    const item = store4.forEach((item, index) => {
      let tmp = item === closure_1_18.getGuildId();
      if (!tmp) {
        tmp = item === closure_1_15.getGuildId();
      }
      if (!tmp) {
        const channel = closure_1_11.getChannel(closure_1_17.getChannelId());
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp = item === guildId;
      }
      if (!tmp) {
        let tmp9 = null != closure_1_3;
        if (tmp9) {
          tmp9 = closure_1_3.guildId === item;
        }
        tmp = tmp9;
      }
      if (!tmp) {
        closure_1_20.clearWithoutFlushing(item, c0);
        if (c1) {
          obj[item] = closure_1_20.get(item);
        }
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
    obj5 = obj(1913);
  }
  obj = {};
  set = new Set(closure_6.lurkingGuildIds());
  dependencyMap = closure_6.mostRecentLurkedGuildId();
  const item1 = store4.forEach((item, index) => {
    if (null == closure_1_14.getGuild(item)) {
      closure_1_20.clearWithoutFlushing(item, true);
    } else {
      let hasItem = set.has(item);
      if (hasItem) {
        hasItem = item !== closure_2;
      }
      if (!hasItem) {
        obj[item] = closure_1_20.get(item);
      }
    }
  });
  if (!obj8.isEmpty(obj)) {
    obj1 = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: null };
    obj1[1] = obj;
    tmp18(709).dispatch(obj1);
    const tmp18Result = tmp18(709);
  }
  obj8 = set(12);
  tmp18 = set;
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
    let isUnavailableResult = null != guild.getGuild(key10004);
    if (!isUnavailableResult) {
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
  const obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions };
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
    const item = store4.forEach((item, index) => {
      let tmp = item === closure_1_18.getGuildId();
      if (!tmp) {
        tmp = item === closure_1_15.getGuildId();
      }
      if (!tmp) {
        const channel = closure_1_11.getChannel(closure_1_17.getChannelId());
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp = item === guildId;
      }
      if (!tmp) {
        let tmp9 = null != closure_1_3;
        if (tmp9) {
          tmp9 = closure_1_3.guildId === item;
        }
        tmp = tmp9;
      }
      if (!tmp) {
        closure_1_20.clearWithoutFlushing(item, c0);
        if (c1) {
          obj[item] = closure_1_20.get(item);
        }
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
      const item = store4.forEach((item, index) => {
        let tmp = item === closure_1_18.getGuildId();
        if (!tmp) {
          tmp = item === closure_1_15.getGuildId();
        }
        if (!tmp) {
          const channel = closure_1_11.getChannel(closure_1_17.getChannelId());
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          tmp = item === guildId;
        }
        if (!tmp) {
          let tmp9 = null != closure_1_3;
          if (tmp9) {
            tmp9 = closure_1_3.guildId === item;
          }
          tmp = tmp9;
        }
        if (!tmp) {
          closure_1_20.clearWithoutFlushing(item, c0);
          if (c1) {
            obj[item] = closure_1_20.get(item);
          }
        }
      });
      if (!obj2.isEmpty(obj)) {
        obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: null };
        obj[1] = obj;
        tmp3(tmp4[17]).dispatch(obj);
        const tmp3Result = tmp3(tmp4[17]);
      }
      obj2 = importDefault(obj[18]);
      tmp3 = importDefault;
      tmp4 = obj;
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
    const item = userIds.forEach((item, index) => {
      if (item !== closure_1_8.getId()) {
        closure_1_20.subscribeUser(closure_0, item);
      }
    });
    return false;
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function handleMembersRemove(arg0) {
    ({ guildId: require, userIds } = arg0);
    const item = userIds.forEach((item, index) => {
      closure_1_20.unsubscribeUser(closure_0, item);
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
let tmp3 = new _enqueueDefault((subscriptions) => {
  for (const key10004 in arg0) {
    let isUnavailableResult = null != guild.getGuild(key10004);
    if (!isUnavailableResult) {
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
  const obj = { type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions };
  obj.dispatch(obj);
});
let result = require("obj132").fileFinishedImporting("stores/GuildSubscriptionsStore.tsx");

export default guildSubscriptionsStore;
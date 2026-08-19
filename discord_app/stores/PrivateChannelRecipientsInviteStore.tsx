// === Module 13303: performQuery ===

// Module 13303 (performQuery)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import isNullOrEmpty from "isNullOrEmpty" /* 1903 */;
import nameFromUserDefault from "nameFromUser" /* 4219 */;
import getTransformedUserDefault from "getTransformedUser" /* 7597 */;
import getHash from "getHash" /* 4288 */;
import recomputeAffinities from "recomputeAffinities" /* 5407 */;
import { PrivateChannelRecord } from "createChannelRecord" /* 1395 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import hasConsented from "hasConsented" /* 5258 */;
import handleChannelSelect from "handleChannelSelect" /* 6772 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

require = fn;
function performQuery() {
  if (c15) {
    channel = channel.getChannel(c22);
    if (0 === _var.trim().length) {
      if (null != closure_3) {
        closure_3.clearQuery();
      }
      closure_0 = channel;
      let arr = authStore;
      const currentUser = authStore.getCurrentUser();
      obj1 = currentUser;
      const items = [];
      HermesBuiltin.arraySpread(store.getFriendIDs(), 0);
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      arr = items;
      if (isStaffResult) {
        const found = arr.filter((item, index) => {
          let isStaffResult = item.isStaff();
          if (isStaffResult) {
            isStaffResult = item.id !== obj1.id;
          }
          return isStaffResult;
        }, false);
        const mapped = found.map((item, index) => item.id);
        const _Array = Array;
        const _Set = Set;
        const items1 = [];
        HermesBuiltin.arraySpread(mapped, HermesBuiltin.arraySpread(items, 0));
        set = new Set(items1);
        arr = Array.from(set);
      }
      let isGroupDMResult;
      if (channel != null) {
        isGroupDMResult = channel.isGroupDM();
      }
      let found1 = arr;
      if (isGroupDMResult) {
        found1 = arr.filter((item, index) => {
          recipients = recipients.recipients;
          return !recipients.includes(item);
        });
      }
      const reduced = found1.reduce((acc, item, index) => {
        const user = closure_1_13.getUser(item);
        if (null != user) {
          if (!user.isProvisional) {
            if (user.bot) {
              if (user.isStaff()) {
                if (obj1 != null) {
                  obj1.isStaff();
                }
              }
            }
            const obj = { user: null, comparator: null };
            obj[0] = user;
            obj[1] = obj1(dependencyMap[12]).getName(user);
            acc.push(obj);
            return acc;
          }
        }
        return acc;
      }, []);
      closure_18 = reduced.sort(sortUserList);
      if (c20 !== false) {
        c20 = false;
      }
      return true;
    } else {
      const currentUser1 = authStore.getCurrentUser();
      let flag2;
      if (currentUser1 != null) {
        flag2 = currentUser1.isStaff();
      }
      if (flag2 == null) {
        flag2 = false;
      }
      if (null != closure_3) {
        let obj = { query: null, filters: null, blacklist: null, boosters: null };
        obj[0] = _var;
        obj = { friends: true, staff: null, provisional: false };
        obj[1] = flag2;
        obj[1] = obj;
        obj[2] = tmp4;
        frequentlyWithoutFetchingLatest = frequentlyWithoutFetchingLatest.getFrequentlyWithoutFetchingLatest();
        const found2 = frequentlyWithoutFetchingLatest.filter((item, index) => item instanceof closure_6 && item.isDM());
        const _Math = Math;
        const items2 = [];
        HermesBuiltin.arraySpread(found2.map((item, index) => scoreWithoutFetchingLatest.getScoreWithoutFetchingLatest(item.id)), 0);
        const _Math2 = Math;
        closure_0 = HermesBuiltin.apply(items2, Math);
        obj1 = {};
        const item = found2.forEach((item, index) => {
          const scoreWithoutFetchingLatest = closure_1_9.getScoreWithoutFetchingLatest(item.id);
          const recipientId = item.getRecipientId();
          let num = 0;
          if (closure_1_12.isFriend(recipientId)) {
            num = 0.2;
          }
          let num2 = 0;
          if (null != closure_1_7.getDMFromUserId(recipientId)) {
            num2 = 0.1;
          }
          obj1[recipientId] = 1 + scoreWithoutFetchingLatest / closure_0 + num + num2;
        });
        obj[3] = obj1;
        closure_3.setQuery(obj);
      }
      return false;
    }
  } else {
    return false;
  }
}
function updateHasFriends() {
  if (c15) {
    const tmp3 = store.getFriendCount() > 0;
    closure_19 = tmp3;
    return tmp3 !== closure_19;
  } else {
    return false;
  }
}
function sortUserList(user, user2) {
  const obj = isNullOrEmpty;
  const name = nameFromUserDefault.getName(user.user);
  const stripDiacriticsResult = obj.stripDiacritics(name.toLocaleLowerCase());
  const obj5 = isNullOrEmpty;
  const name1 = nameFromUserDefault.getName(user2.user);
  return stripDiacriticsResult.localeCompare(obj5.stripDiacritics(name1.toLocaleLowerCase()));
}
function parseUserResults(results) {
  results = results.results;
  if (c15) {
    if ("" !== c16) {
      const currentUser = authStore.getCurrentUser();
      const items = [];
      const iter = results[Symbol.iterator]();
      while (iter !== undefined) {
        ({ id, comparator } = nextResult);
        if (null == currentUser) {
          let user = authStore.getUser(id);
          let obj = user;
          if (null != user) {
            if (!obj.isProvisional) {
              if (!obj.bot) {
                obj = { user: null, comparator: null };
                obj[0] = obj;
                obj[1] = comparator;
                let arr = items.push(obj);
              } else if (obj.isStaff()) {
                let isStaffResult;
                if (currentUser != null) {
                  isStaffResult = currentUser.isStaff();
                }
              }
            }
          }
        }
        continue;
      }
      privateChannelRecipientsInviteStoreClass.emitChange();
      nextResult = iter.next();
    }
  }
}
function handleModalActionSheetOpen(key) {
  if (key.key !== closure_14) {
    return false;
  } else {
    c15 = true;
    closure_19 = store.getFriendCount() > 0;
    if (null != userSearchContext) {
      userSearchContext.destroy();
      userSearchContext = null;
    }
    userSearchContext = getTransformedUserDefault.getUserSearchContext(parseUserResults, 1000);
    c22 = null;
    c16 = "";
    c17 = 0;
    performQuery();
  }
}
function handleActionSheetDismiss(key) {
  if (key.key !== closure_14) {
    return false;
  } else {
    if (null != c3) {
      c3.destroy();
      c3 = null;
    }
    c16 = "";
    c17 = 0;
    closure_18 = [];
    const _Set = Set;
    set = new Set();
    c15 = false;
    c22 = null;
    c20 = false;
  }
}
function performQueryOnAffinityChange() {
  return false;
}
({ NEW_GROUP_DM_POPOUT_ID: closure_14, Consents } = ME);
let c15 = false;
let c16 = "";
let c17 = 0;
let closure_18 = [];
let c19 = false;
let c20 = false;
let set = new Set();
let c22 = null;
const Store = initializeDefault.Store;
class PrivateChannelRecipientsInviteStoreClass extends Store {
}
const prototype = PrivateChannelRecipientsInviteStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_7, closure_8, closure_4, closure_9, closure_10, closure_11, closure_12, closure_5, closure_13);
  const items = [closure_13, closure_7];
  this.syncWith(items, performQuery);
  const items1 = [closure_5];
  this.syncWith(items1, performQueryOnAffinityChange);
  const items2 = [closure_12];
  this.syncWith(items2, updateHasFriends);
};
prototype["getResults"] = function getResults() {
  return closure_18;
};
prototype["hasFriends"] = function hasFriends() {
  return c19;
};
prototype["getSelectedUsers"] = function getSelectedUsers() {
  return set;
};
prototype["getQuery"] = function getQuery() {
  return c16;
};
prototype["getState"] = function getState() {
  return { query: c16, selectedRow: c17, selectedUsers: set, results: closure_18, hasFriends: c19, isLoading: c20 };
};
PrivateChannelRecipientsInviteStoreClass.displayName = "PrivateChannelRecipientsInviteStore";
const privateChannelRecipientsInviteStoreClass = new PrivateChannelRecipientsInviteStoreClass(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    c16 = "";
    c17 = 0;
    closure_18 = [];
    set = new Set();
    c15 = false;
    c22 = null;
    c20 = false;
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch() {
    return false;
  },
  GUILD_MEMBERS_REQUEST: function handleGuildMembersRequest(arg0) {
    return false;
  },
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    if (null != guildId.guildId) {
      return false;
    } else {
      c16 = "";
      c17 = 0;
      closure_18 = [];
      const _Set = Set;
      c20 = false;
      c22 = tmp;
      return performQuery();
    }
  },
  MODAL_PUSH: handleModalActionSheetOpen,
  SHOW_ACTION_SHEET: handleModalActionSheetOpen,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function handleInviteOpen(channelId) {
    c15 = true;
    closure_19 = store.getFriendCount() > 0;
    if (null != userSearchContext) {
      userSearchContext.destroy();
      userSearchContext = null;
    }
    userSearchContext = getTransformedUserDefault.getUserSearchContext(parseUserResults, 1000);
    channelId = channelId.channelId;
    c16 = "";
    c17 = 0;
    performQuery();
  },
  MODAL_POP: handleActionSheetDismiss,
  HIDE_ACTION_SHEET: handleActionSheetDismiss,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: function handleClose() {
    if (null != c3) {
      c3.destroy();
      c3 = null;
    }
    c16 = "";
    c17 = 0;
    closure_18 = [];
    set = new Set();
    c15 = false;
    c22 = null;
    c20 = false;
  },
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function handleQuery(arg0) {
    ({ channelId: c22, query: c16 } = arg0);
    c17 = 0;
    performQuery();
  },
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function handleSelect(row) {
    row = row.row;
  },
  PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function handleAddUser(userId) {
    set.add(userId.userId);
    set = new Set(set);
  },
  PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function handleRemoveUser(userId) {
    set.delete(userId.userId);
    set = new Set(set);
  }
});
const result = require("obj132").fileFinishedImporting("stores/PrivateChannelRecipientsInviteStore.tsx");

export default privateChannelRecipientsInviteStoreClass;
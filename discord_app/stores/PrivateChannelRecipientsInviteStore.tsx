// discord_app/stores/PrivateChannelRecipientsInviteStore.tsx
import getHash from "getHash";
import recomputeAffinities from "recomputeAffinities";
import { PrivateChannelRecord } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import hasConsented from "hasConsented";
import handleChannelSelect from "handleChannelSelect";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { Store } from "initialize";
import set from "createChannelRecord";
import { getTransformedUser } from "../modules/autocompleter/UserSearchManager.tsx";
import { isNullOrEmpty } from "../utils/StringUtils.tsx";
import { nameFromUser } from "../utils/UserUtils.tsx";

let Consents;
let closure_14;
const require = arg1;
function performQuery() {
  if (c15) {
    channel = channel.getChannel(c22);
    if (0 === _var.trim().length) {
      if (null != closure_3) {
        closure_3.clearQuery();
      }
      let closure_0 = channel;
      let arr = authStore;
      const currentUser = authStore.getCurrentUser();
      let obj1 = currentUser;
      const items = [];
      HermesBuiltin.arraySpread(store.getFriendIDs(), 0);
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      arr = items;
      if (isStaffResult) {
        const found = arr.filter((isStaff) => {
          let isStaffResult = isStaff.isStaff();
          if (isStaffResult) {
            isStaffResult = isStaff.id !== obj1.id;
          }
          return isStaffResult;
        }, false);
        const mapped = found.map((id) => id.id);
        const _Array = Array;
        const _Set = Set;
        const items1 = [];
        HermesBuiltin.arraySpread(mapped, HermesBuiltin.arraySpread(items, 0));
        const set = new Set(items1);
        arr = Array.from(set);
      }
      let isGroupDMResult;
      if (channel != null) {
        isGroupDMResult = channel.isGroupDM();
      }
      let found1 = arr;
      if (isGroupDMResult) {
        found1 = arr.filter((arg0) => {
          recipients = recipients.recipients;
          return !recipients.includes(arg0);
        });
      }
      const reduced = found1.reduce((arr) => {
        const user = outer1_13.getUser(arg1);
        if (null != user) {
          if (!user.isProvisional) {
            if (user.bot) {
              if (user.isStaff()) {
                let isStaffResult;
                if (obj1 != null) {
                  isStaffResult = obj2.isStaff();
                }
                obj2 = obj1;
              }
            }
            const obj = { user: null, comparator: null };
            obj[0] = user;
            obj[1] = obj1(outer1_2[12]).getName(user);
            arr.push(obj);
            return arr;
          }
        }
        return arr;
      }, []);
      let closure_18 = reduced.sort(sortUserList);
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
        closure_0 = undefined;
        obj1 = undefined;
        frequentlyWithoutFetchingLatest = frequentlyWithoutFetchingLatest.getFrequentlyWithoutFetchingLatest();
        const found2 = frequentlyWithoutFetchingLatest.filter((isDM) => isDM instanceof closure_6 && isDM.isDM());
        const _Math = Math;
        const items2 = [];
        HermesBuiltin.arraySpread(found2.map((id) => scoreWithoutFetchingLatest.getScoreWithoutFetchingLatest(id.id)), 0);
        const _Math2 = Math;
        closure_0 = HermesBuiltin.apply(items2, Math);
        obj1 = {};
        const item = found2.forEach((id) => {
          const scoreWithoutFetchingLatest = outer1_9.getScoreWithoutFetchingLatest(id.id);
          const recipientId = id.getRecipientId();
          let num = 0;
          if (outer1_12.isFriend(recipientId)) {
            num = 0.2;
          }
          let num2 = 0;
          if (null != outer1_7.getDMFromUserId(recipientId)) {
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
    let c19 = tmp3;
    return tmp3 !== c19;
  } else {
    return false;
  }
}
function sortUserList(user, user2) {
  const obj = isNullOrEmpty;
  const name = nameFromUser.getName(user.user);
  const obj2 = nameFromUser;
  const stripDiacriticsResult = obj.stripDiacritics(name.toLocaleLowerCase());
  const obj5 = isNullOrEmpty;
  const name1 = nameFromUser.getName(user2.user);
  return stripDiacriticsResult.localeCompare(obj5.stripDiacritics(name1.toLocaleLowerCase()));
}
function parseUserResults(results) {
  let comparator;
  let id;
  results = results.results;
  if (c15) {
    if ("" !== c16) {
      const currentUser = authStore.getCurrentUser();
      const items = [];
      const iter = results[Symbol.iterator]();
      while (iter !== undefined) {
        ({ id, comparator } = nextResult);
        if (null == currentUser) {
          let tmp6 = authStore;
          let tmp7 = id;
          let user = authStore.getUser(id);
          let obj = user;
          if (null != user) {
            let tmp9 = user;
            if (!obj.isProvisional) {
              let tmp10 = user;
              if (!obj.bot) {
                obj = { user: null, comparator: null };
                let tmp13 = user;
                obj[0] = obj;
                let tmp14 = comparator;
                obj[1] = comparator;
                let arr = items.push(obj);
              } else {
                let tmp11 = user;
                if (obj.isStaff()) {
                  let isStaffResult;
                  if (currentUser != null) {
                    isStaffResult = currentUser.isStaff();
                  }
                }
              }
            }
          }
        } else {
          let tmp5 = id;
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
    let c15 = true;
    let closure_19 = store.getFriendCount() > 0;
    if (null != userSearchContext) {
      userSearchContext.destroy();
      userSearchContext = null;
    }
    userSearchContext = getTransformedUser.getUserSearchContext(parseUserResults, 1000);
    let c22 = null;
    let c16 = "";
    let c17 = 0;
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
    let c16 = "";
    let c17 = 0;
    let closure_18 = [];
    const _Set = Set;
    const set = new Set();
    let c15 = false;
    let c22 = null;
    let c20 = false;
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
class PrivateChannelRecipientsInviteStoreClass extends Store {
}
const prototype = PrivateChannelRecipientsInviteStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ensureGuildLoaded, hasConsented, getHash, handleChannelSelect, trackCommunicationDisabled, createGuildRecordFromRust, markAllUserIdListsStale, recomputeAffinities, mergeGuildAvatar);
  const items = [mergeGuildAvatar, ensureGuildLoaded];
  this.syncWith(items, performQuery);
  const items1 = [recomputeAffinities];
  this.syncWith(items1, performQueryOnAffinityChange);
  const items2 = [markAllUserIdListsStale];
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
const privateChannelRecipientsInviteStoreClass = new PrivateChannelRecipientsInviteStoreClass(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let c16 = "";
    let c17 = 0;
    let closure_18 = [];
    const set = new Set();
    let c15 = false;
    let c22 = null;
    let c20 = false;
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
      let c16 = "";
      let c17 = 0;
      let closure_18 = [];
      const _Set = Set;
      const set = new Set();
      let c20 = false;
      let c22 = tmp;
      return performQuery();
    }
  },
  MODAL_PUSH: handleModalActionSheetOpen,
  SHOW_ACTION_SHEET: handleModalActionSheetOpen,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function handleInviteOpen(channelId) {
    let c15 = true;
    let closure_19 = store.getFriendCount() > 0;
    if (null != userSearchContext) {
      userSearchContext.destroy();
      userSearchContext = null;
    }
    userSearchContext = getTransformedUser.getUserSearchContext(parseUserResults, 1000);
    channelId = channelId.channelId;
    let c16 = "";
    let c17 = 0;
    performQuery();
  },
  MODAL_POP: handleActionSheetDismiss,
  HIDE_ACTION_SHEET: handleActionSheetDismiss,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: function handleClose() {
    if (null != c3) {
      c3.destroy();
      c3 = null;
    }
    let c16 = "";
    let c17 = 0;
    let closure_18 = [];
    const set = new Set();
    let c15 = false;
    let c22 = null;
    let c20 = false;
  },
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function handleQuery(arg0) {
    let c16;
    let c22;
    ({ channelId: c22, query: c16 } = arg0);
    let c17 = 0;
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
const result = set.fileFinishedImporting("stores/PrivateChannelRecipientsInviteStore.tsx");

export default privateChannelRecipientsInviteStoreClass;
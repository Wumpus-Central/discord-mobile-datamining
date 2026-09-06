// === Module 13754: PrivateChannelRecipientsInviteStore ===

// Module 13754 (PrivateChannelRecipientsInviteStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import StringUtils from "StringUtils" /* 1925 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import UserSearchManagerDefault from "UserSearchManager" /* 9839 */;
import ExperimentStore from "ExperimentStore" /* 4476 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7659 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import ConsentStore from "ConsentStore" /* 6595 */;
import FrecencyStore from "FrecencyStore" /* 5509 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function performQuery() {
  if (c15) {
    const channel = ChannelStore.getChannel(channelId);
    if (0 === query.trim().length) {
      if (null != closure_3) {
        closure_3.clearQuery();
      }
      closure_129_0 = channel;
      let arr = UserStore;
      const currentUser = UserStore.getCurrentUser();
      closure_129_1 = currentUser;
      const items = [];
      HermesBuiltin.arraySpread(RelationshipStore.getFriendIDs(), 0);
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
        set = new Set(items1);
        arr = Array.from(set);
      }
      let isGroupDMResult;
      if (channel != null) {
        isGroupDMResult = channel.isGroupDM();
      }
      let found1 = arr;
      if (isGroupDMResult) {
        found1 = arr.filter((item) => {
          recipients = recipients.recipients;
          return !recipients.includes(item);
        });
      }
      const reduced = found1.reduce((arr, item) => {
        const user = UserStore.getUser(item);
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
            const obj = { user, comparator: UserUtilsDefault.getName(user) };
            arr.push(obj);
            return arr;
          }
        }
        return arr;
      }, []);
      closure_18 = reduced.sort(sortUserList);
      if (c20 !== false) {
        c20 = false;
      }
      return true;
    } else {
      const currentUser1 = UserStore.getCurrentUser();
      let flag2;
      if (currentUser1 != null) {
        flag2 = currentUser1.isStaff();
      }
      if (flag2 == null) {
        flag2 = false;
      }
      if (null != closure_3) {
        let obj = { query, filters: null, blacklist: null, boosters: null };
        obj = { friends: true, staff: flag2, provisional: false };
        obj.filters = obj;
        obj.blacklist = tmp4;
        const frequentlyWithoutFetchingLatest = FrecencyStore.getFrequentlyWithoutFetchingLatest();
        const found2 = frequentlyWithoutFetchingLatest.filter((isDM) => isDM instanceof PrivateChannelRecord && isDM.isDM());
        const _Math = Math;
        const items2 = [];
        HermesBuiltin.arraySpread(found2.map((id) => scoreWithoutFetchingLatest.getScoreWithoutFetchingLatest(id.id)), 0);
        const _Math2 = Math;
        let recipients = HermesBuiltin.apply(items2, Math);
        const obj1 = {};
        const item = found2.forEach((id) => {
          scoreWithoutFetchingLatest = FrecencyStore.getScoreWithoutFetchingLatest(id.id);
          const recipientId = id.getRecipientId();
          let num = 0;
          if (RelationshipStore.isFriend(recipientId)) {
            num = 0.2;
          }
          let num2 = 0;
          if (null != ChannelStore.getDMFromUserId(recipientId)) {
            num2 = 0.1;
          }
          obj1[recipientId] = 1 + scoreWithoutFetchingLatest / closure_0 + num + num2;
        });
        obj.boosters = obj1;
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
    const tmp3 = RelationshipStore.getFriendCount() > 0;
    closure_19 = tmp3;
    return tmp3 !== closure_19;
  } else {
    return false;
  }
}
function sortUserList(user, user2) {
  const obj = StringUtils;
  const name = UserUtilsDefault.getName(user.user);
  const stripDiacriticsResult = obj.stripDiacritics(name.toLocaleLowerCase());
  const obj5 = StringUtils;
  const name1 = UserUtilsDefault.getName(user2.user);
  return stripDiacriticsResult.localeCompare(obj5.stripDiacritics(name1.toLocaleLowerCase()));
}
function parseUserResults(results) {
  results = results.results;
  if (c15) {
    if ("" !== c16) {
      const currentUser = UserStore.getCurrentUser();
      const items = [];
      const iter = results[Symbol.iterator]();
      while (iter !== undefined) {
        ({ id, comparator } = nextResult);
        if (null == currentUser) {
          let user = UserStore.getUser(id);
          let obj = user;
          if (null != user) {
            if (!obj.isProvisional) {
              if (!obj.bot) {
                obj = { user: null, comparator: null };
                obj.user = obj;
                obj.comparator = comparator;
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
      closure_18 = items;
      privateChannelRecipientsInviteStoreClass.emitChange();
      nextResult = iter.next();
    }
  }
}
function handleModalActionSheetOpen(key) {
  if (key.key !== closure_1_14) {
    return false;
  } else {
    c15 = true;
    closure_19 = RelationshipStore.getFriendCount() > 0;
    if (null != userSearchContext) {
      userSearchContext.destroy();
      userSearchContext = null;
    }
    userSearchContext = UserSearchManagerDefault.getUserSearchContext(parseUserResults, 1000);
    channelId = null;
    c16 = "";
    row = 0;
    performQuery();
  }
}
function handleActionSheetDismiss(key) {
  if (key.key !== closure_1_14) {
    return false;
  } else {
    if (null != closure_3) {
      closure_3.destroy();
      closure_3 = null;
    }
    c16 = "";
    row = 0;
    closure_18 = [];
    const _Set = Set;
    set = new Set();
    c15 = false;
    channelId = null;
    c20 = false;
  }
}
function performQueryOnAffinityChange() {
  return false;
}
const PrivateChannelRecord = fn(1961).PrivateChannelRecord;
const Constants = fn(1074);
({ NEW_GROUP_DM_POPOUT_ID: closure_14, Consents } = Constants);
let c15 = false;
let c16 = "";
let row = 0;
let results = [];
const hasFriends = false;
let c20 = false;
let set = new Set();
let channelId = null;
const Store = initializeDefault.Store;
class PrivateChannelRecipientsInviteStoreClass extends Store {
}
const prototype = PrivateChannelRecipientsInviteStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, ConsentStore, ExperimentStore, FrecencyStore, GuildMemberStore, GuildStore, RelationshipStore, UserAffinitiesV2Store, UserStore);
  const items = [UserStore, ChannelStore];
  this.syncWith(items, performQuery);
  const items1 = [UserAffinitiesV2Store];
  this.syncWith(items1, performQueryOnAffinityChange);
  const items2 = [RelationshipStore];
  this.syncWith(items2, updateHasFriends);
};
prototype["getResults"] = function getResults() {
  return closure_18;
};
prototype["hasFriends"] = function hasFriends() {
  return closure_19;
};
prototype["getSelectedUsers"] = function getSelectedUsers() {
  return set;
};
prototype["getQuery"] = function getQuery() {
  return c16;
};
prototype["getState"] = function getState() {
  return { query, selectedRow: row, selectedUsers: set, results, hasFriends, isLoading };
};
PrivateChannelRecipientsInviteStoreClass.displayName = "PrivateChannelRecipientsInviteStore";
const privateChannelRecipientsInviteStoreClass = new PrivateChannelRecipientsInviteStoreClass(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    c16 = "";
    row = 0;
    closure_18 = [];
    set = new Set();
    c15 = false;
    channelId = null;
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
      row = 0;
      closure_18 = [];
      const _Set = Set;
      set = new Set();
      c20 = false;
      channelId = tmp;
      return performQuery();
    }
  },
  MODAL_PUSH: handleModalActionSheetOpen,
  SHOW_ACTION_SHEET: handleModalActionSheetOpen,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function handleInviteOpen(channelId) {
    c15 = true;
    closure_19 = RelationshipStore.getFriendCount() > 0;
    if (null != userSearchContext) {
      userSearchContext.destroy();
      userSearchContext = null;
    }
    userSearchContext = UserSearchManagerDefault.getUserSearchContext(parseUserResults, 1000);
    channelId = channelId.channelId;
    c16 = "";
    row = 0;
    performQuery();
  },
  MODAL_POP: handleActionSheetDismiss,
  HIDE_ACTION_SHEET: handleActionSheetDismiss,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: function handleClose() {
    if (null != closure_3) {
      closure_3.destroy();
      closure_3 = null;
    }
    c16 = "";
    row = 0;
    closure_18 = [];
    set = new Set();
    c15 = false;
    channelId = null;
    c20 = false;
  },
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function handleQuery(arg0) {
    ({ channelId, query: c16 } = arg0);
    row = 0;
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
const size = fn(2);
const result = size.fileFinishedImporting("stores/PrivateChannelRecipientsInviteStore.tsx");

export default privateChannelRecipientsInviteStoreClass;
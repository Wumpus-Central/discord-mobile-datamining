// discord_app/stores/PrivateChannelRecipientsInviteStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import StringUtils from "../utils/StringUtils.tsx";
import ChannelRecord from "../records/ChannelRecord.tsx";
import UserUtilsDefault from "../utils/UserUtils.tsx";
import UserSearchManagerDefault from "../modules/autocompleter/UserSearchManager.tsx";
import ExperimentStore from "../modules/experiments/ExperimentStore.tsx";
import UserAffinitiesV2Store from "../modules/user_affinities/UserAffinitiesV2Store.tsx";
import ChannelStore from "ChannelStore.tsx";
import ConsentStore from "ConsentStore.tsx";
import FrecencyStore from "FrecencyStore.tsx";
import GuildMemberStore from "GuildMemberStore.tsx";
import GuildStore from "GuildStore.tsx";
import RelationshipStore from "RelationshipStore.tsx";
import UserStore from "UserStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let closure_3, scoreWithoutFetchingLatest;

let Consents;
let closure_14;
function performQuery() {
  let obj2;
  let obj3;
  if (c15) {
    const channel = ChannelStore.getChannel(channelId);
    let num = 0;
    if (0 === query.trim().length) {
      if (null != closure_3) {
        closure_3.clearQuery();
      }
      const currentUser = UserStore.getCurrentUser();
      const items = [];
      let num2 = 0;
      HermesBuiltin.arraySpread(items, RelationshipStore.getFriendIDs(), 0);
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      let fromResult = items;
      if (isStaffResult) {
        const found = UserStore.filter((isStaff) => {
          const isStaffResult = isStaff.isStaff() && isStaff.id !== currentUser.id;
          return isStaffResult;
        }, false);
        const mapped = found.map((id) => id.id);
        const _Array = Array;
        const _Set = Set;
        const items1 = [];
        HermesBuiltin.arraySpread(items1, mapped, HermesBuiltin.arraySpread(items1, items, 0));
        const self = this;
        const self2 = this;
        set = new Set(items1);
        fromResult = from(set);
      }
      let isGroupDMResult;
      if (channel != null) {
        isGroupDMResult = channel.isGroupDM();
      }
      let found1 = fromResult;
      if (isGroupDMResult) {
        found1 = fromResult.filter((item) => {
          const recipients = channel.recipients;
          return !recipients.includes(item);
        });
      }
      const reduced = found1.reduce((arr, item) => {
        let obj4;
        user = user.getUser(item);
        if (null != user) {
          if (!user.isProvisional) {
            if (user.bot) {
              if (user.isStaff()) {
                if (currentUser != null) {
                  currentUser.isStaff();
                }
              }
            }
            const obj = { user, comparator: obj4.getName(user) };
            obj4 = obj3(dependencyMap[12]);
            arr = arr.push(obj);
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
      const currentUser1 = UserStore.getCurrentUser();
      let flag2;
      if (currentUser1 != null) {
        flag2 = currentUser1.isStaff();
      }
      if (flag2 == null) {
        flag2 = false;
      }
      if (null != closure_3) {
        let obj = { query, filters: obj2, blacklist: tmp6, boosters: obj3 };
        const setQuery = closure_3.setQuery;
        obj2 = { friends: true, staff: flag2, provisional: false };
        const frequentlyWithoutFetchingLatest = FrecencyStore.getFrequentlyWithoutFetchingLatest();
        const found2 = frequentlyWithoutFetchingLatest.filter((isDM) => {
          const tmp = isDM instanceof PrivateChannelRecord && isDM.isDM();
          return tmp;
        });
        const _Math = Math;
        const items2 = [];
        HermesBuiltin.arraySpread(
          items2,
          found2.map((id) => scoreWithoutFetchingLatest.getScoreWithoutFetchingLatest(id.id)),
          0,
        );
        const _Math2 = Math;
        let closure_0 = HermesBuiltin.apply(max, items2, Math);
        obj3 = {};
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
          obj3[recipientId] = 1 + scoreWithoutFetchingLatest / closure_0 + num + num2;
        });
        setQuery(obj);
      }
      return false;
    }
  } else {
    return false;
  }
}
function updateHasFriends() {
  if (c15) {
    const tmp4 = RelationshipStore.getFriendCount() > 0;
    let closure_19 = tmp4;
    return tmp4 !== closure_19;
  } else {
    return false;
  }
}
function sortUserList(user, user2) {
  const stripDiacritics = StringUtils.stripDiacritics;
  StringUtils;
  const obj = UserUtilsDefault;
  const name = obj.getName(user.user);
  const localeCompare = stripDiacritics(name.toLocaleLowerCase()).localeCompare;
  stripDiacritics(name.toLocaleLowerCase());
  const stripDiacritics2 = StringUtils.stripDiacritics;
  StringUtils;
  const obj3 = UserUtilsDefault;
  const name1 = obj3.getName(user2.user);
  return localeCompare(stripDiacritics2(name1.toLocaleLowerCase()));
}
function parseUserResults(results) {
  let comparator;
  let id;
  results = results.results;
  if (c15) {
    if ("" !== c16) {
      const currentUser = UserStore.getCurrentUser();
      const items = [];
      const iter = results[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        ({ id, comparator } = nextResult);
        if (null == currentUser) {
          let user = UserStore.getUser(id);
          let obj = user;
          if (null != user) {
            if (!obj.isProvisional) {
              if (!obj.bot) {
                let obj2 = { user: obj, comparator };
                let arr = items.push(obj2);
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
      let closure_18 = items;
      privateChannelRecipientsInviteStoreClass.emitChange();
    }
  }
}
function handleModalActionSheetOpen(key) {
  let userSearchContext;
  if (key.key !== authStore2) {
    return false;
  } else {
    c15 = true;
    let closure_19 = RelationshipStore.getFriendCount() > 0;
    if (null != userSearchContext) {
      userSearchContext.destroy();
      userSearchContext = null;
    }
    const obj = UserSearchManagerDefault;
    userSearchContext = obj.getUserSearchContext(parseUserResults, 1000);
    channelId = null;
    let c16 = "";
    row = 0;
    performQuery();
  }
}
function handleActionSheetDismiss(key) {
  if (key.key !== authStore2) {
    return false;
  } else {
    if (null != closure_3) {
      closure_3.destroy();
      closure_3 = null;
    }
    let c16 = "";
    row = 0;
    let closure_18 = [];
    const _Set = Set;
    const self = this;
    const self2 = this;
    new Set();
    c15 = false;
    channelId = null;
    let c20 = false;
  }
}
function performQueryOnAffinityChange() {
  return false;
}
const PrivateChannelRecord = ChannelRecord.PrivateChannelRecord;
({ NEW_GROUP_DM_POPOUT_ID: closure_14, Consents } = Constants);
let c15 = false;
let c16 = "";
let row = 0;
const authStore4 = [];
const hasFriends = false;
let c20 = false;
let set = new Set();
let channelId = null;
const Store = get_initializedDefault.Store;
class PrivateChannelRecipientsInviteStoreClass extends Store {
  initialize() {
    this.waitFor(
      ChannelStore,
      ConsentStore,
      ExperimentStore,
      FrecencyStore,
      GuildMemberStore,
      GuildStore,
      RelationshipStore,
      UserAffinitiesV2Store,
      UserStore,
    );
    const items = [UserStore, ChannelStore];
    this.syncWith(items, performQuery);
    const items1 = [UserAffinitiesV2Store];
    this.syncWith(items1, performQueryOnAffinityChange);
    const items2 = [RelationshipStore];
    this.syncWith(items2, updateHasFriends);
  }
  getResults() {
    return results;
  }
  hasFriends() {
    return hasFriends;
  }
  getSelectedUsers() {
    return set;
  }
  getQuery() {
    return c16;
  }
  getState() {
    return { query, selectedRow: row, selectedUsers: set, results, hasFriends, isLoading };
  }
}
const prototype = PrivateChannelRecipientsInviteStoreClass.prototype;
PrivateChannelRecipientsInviteStoreClass.displayName = "PrivateChannelRecipientsInviteStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let c16 = "";
    row = 0;
    let closure_18 = [];
    set = new Set();
    c15 = false;
    channelId = null;
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
      row = 0;
      let closure_18 = [];
      const _Set = Set;
      const self = this;
      const self2 = this;
      let c20 = false;
      channelId = tmp;
      new Set();
      return performQuery();
    }
  },
  MODAL_PUSH: handleModalActionSheetOpen,
  SHOW_ACTION_SHEET: handleModalActionSheetOpen,
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function handleInviteOpen(channelId) {
    let userSearchContext;
    c15 = true;
    let closure_19 = RelationshipStore.getFriendCount() > 0;
    if (null != userSearchContext) {
      userSearchContext.destroy();
      userSearchContext = null;
    }
    const obj = UserSearchManagerDefault;
    userSearchContext = obj.getUserSearchContext(parseUserResults, 1000);
    channelId = channelId.channelId;
    let c16 = "";
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
    let c16 = "";
    row = 0;
    let closure_18 = [];
    new Set();
    c15 = false;
    channelId = null;
    let c20 = false;
  },
  PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function handleQuery(arg0) {
    let c16;
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
  },
};
const privateChannelRecipientsInviteStoreClass = new PrivateChannelRecipientsInviteStoreClass(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/PrivateChannelRecipientsInviteStore.tsx");

export default privateChannelRecipientsInviteStoreClass;

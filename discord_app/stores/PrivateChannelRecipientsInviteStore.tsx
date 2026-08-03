import getHash from "getHash";
import recomputeAffinities from "recomputeAffinities";
import { PrivateChannelRecord } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import hasConsented from "hasConsented";
import handleChannelSelect from "handleChannelSelect";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { Store } from "initialize";
import set from "createChannelRecord";

let Consents;
let closure_14;
const require = arg1;
function performQuery() {
  if (c15) {
    channel = channel.getChannel(c22);
    if (0 === _var.trim().length) {
      if (null != set1) {
        set1.clearQuery();
      }
      let _require = channel;
      const currentUser = authStore.getCurrentUser();
      let obj1 = currentUser;
      frictionlessGDMsEnabled = _require(frictionlessGDMsEnabled[11]).getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
      const items = [];
      HermesBuiltin.arraySpread(store2.getFriendIDs(), 0);
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      let arr = items;
      if (isStaffResult) {
        const found = authStore.filter((isStaff) => {
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
      set1 = null;
      if (frictionlessGDMsEnabled) {
        const _Set2 = Set;
        set1 = new Set(store.getGuildIds());
        userAffinities = userAffinities.getUserAffinities();
        const mapped1 = userAffinities.map((otherUserId) => otherUserId.otherUserId);
        const found1 = mapped1.filter((arg0) => {
          let id;
          if (obj1 != null) {
            id = obj1.id;
          }
          return arg0 !== id;
        });
        const found2 = found1.filter((id) => !upsertRelationship.isBlockedOrIgnored(id));
        const found3 = found2.filter((id) => !upsertRelationship.isFriend(id));
        const _Array2 = Array;
        const _Set3 = Set;
        const items2 = [];
        HermesBuiltin.arraySpread(found3, HermesBuiltin.arraySpread(arr, 0));
        const set2 = new Set(items2);
        arr = Array.from(set2);
      }
      let isGroupDMResult;
      if (channel != null) {
        isGroupDMResult = channel.isGroupDM();
      }
      let found4 = arr;
      if (isGroupDMResult) {
        found4 = arr.filter((arg0) => {
          recipients = recipients.recipients;
          return !recipients.includes(arg0);
        });
      }
      const reduced = found4.reduce((arr) => {
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
            obj[1] = obj1(frictionlessGDMsEnabled[14]).getName(user);
            if (frictionlessGDMsEnabled) {
              if (null != set1) {
                if (!outer1_12.isFriend(user.id)) {
                  arr = outer1_26(user.id, tmp5);
                  if (0 === arr.length) {
                    if (user.isStaff()) {
                      let isStaffResult1;
                      if (obj1 != null) {
                        isStaffResult1 = obj5.isStaff();
                      }
                      obj5 = obj1;
                    }
                    return arr;
                  }
                  if (arr.length > 0) {
                    obj.mutualGuilds = arr;
                  }
                }
              }
            }
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
      const currentUser1 = authStore.getCurrentUser();
      let flag2;
      if (currentUser1 != null) {
        flag2 = currentUser1.isStaff();
      }
      if (flag2 == null) {
        flag2 = false;
      }
      obj1 = _require(frictionlessGDMsEnabled[11]);
      const frictionlessGDMsEnabled1 = obj1.getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
      if (frictionlessGDMsEnabled1) {
        const members = obj1(frictionlessGDMsEnabled[12]).requestMembers(null, _var);
        const obj3 = obj1(frictionlessGDMsEnabled[12]);
      }
      if (null != set1) {
        let obj = { query: null, filters: null, blacklist: null, boosters: null };
        obj[0] = _var;
        let tmp12;
        if (!frictionlessGDMsEnabled1) {
          obj = { friends: true, staff: null, provisional: false };
          obj[1] = flag2;
          tmp12 = obj;
        }
        obj[1] = tmp12;
        obj[2] = tmp10;
        frequentlyWithoutFetchingLatest = frequentlyWithoutFetchingLatest.getFrequentlyWithoutFetchingLatest();
        const found5 = frequentlyWithoutFetchingLatest.filter((isDM) => isDM instanceof closure_6 && isDM.isDM());
        const _Math = Math;
        const items3 = [];
        HermesBuiltin.arraySpread(found5.map((id) => scoreWithoutFetchingLatest.getScoreWithoutFetchingLatest(id.id)), 0);
        const _Math2 = Math;
        _require = HermesBuiltin.apply(items3, Math);
        obj1 = {};
        const item = found5.forEach((id) => {
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
        set1.setQuery(obj);
      }
      return false;
    }
  } else {
    return false;
  }
}
function updateHasFriends() {
  if (c15) {
    const tmp3 = store2.getFriendCount() > 0;
    let c19 = tmp3;
    return tmp3 !== c19;
  } else {
    return false;
  }
}
function sortUserList(user, user2) {
  const obj = require(1856) /* isNullOrEmpty */;
  const name = importDefault(4032).getName(user.user);
  const obj2 = importDefault(4032);
  const stripDiacriticsResult = obj.stripDiacritics(name.toLocaleLowerCase());
  const obj5 = require(1856) /* isNullOrEmpty */;
  const name1 = importDefault(4032).getName(user2.user);
  return stripDiacriticsResult.localeCompare(obj5.stripDiacritics(name1.toLocaleLowerCase()));
}
function getMutualGuildsWithCurrentUser(id, set) {
  const RestrictedGuildIds = require(3866) /* explicitContentFromProto */.RestrictedGuildIds;
  const setting = RestrictedGuildIds.getSetting();
  const items = [];
  const iter = set[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (!setting.includes(nextResult)) {
      let tmp3 = member;
      let tmp4 = nextResult;
      if (member.isMember(tmp2, id)) {
        let tmp5 = store;
        let tmp6 = nextResult;
        let guild = store.getGuild(tmp2);
        if (null != guild) {
          let tmp9 = guild;
          let arr = items.push(tmp8);
        }
      }
    }
    continue;
  }
  return items;
}
function parseUserResults(results) {
  let comparator;
  let id;
  results = results.results;
  if (c15) {
    if ("" !== c16) {
      const currentUser = authStore.getCurrentUser();
      const frictionlessGDMsEnabled = require(12827) /* getFrictionlessGDMsEnabled */.getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
      let set = null;
      if (frictionlessGDMsEnabled) {
        const _Set = Set;
        set = new Set(store.getGuildIds());
      }
      const items = [];
      const iter = results[Symbol.iterator]();
      const obj4 = require(12827) /* getFrictionlessGDMsEnabled */;
      while (iter !== undefined) {
        ({ id, comparator } = nextResult);
        if (null == currentUser) {
          let tmp12 = authStore;
          let tmp13 = id;
          let user = authStore.getUser(id);
          let obj = user;
          if (null != user) {
            let tmp37 = user;
            if (!obj.isProvisional) {
              let tmp15 = user;
              if (!obj.bot) {
                obj = { user: null, comparator: null };
                let tmp18 = user;
                obj[0] = obj;
                let tmp19 = comparator;
                obj[1] = comparator;
                let tmp20 = obj;
                if (frictionlessGDMsEnabled) {
                  if (null != set) {
                    let tmp38 = store2;
                    let tmp39 = user;
                    if (!store2.isFriend(obj.id)) {
                      let tmp21 = getMutualGuildsWithCurrentUser;
                      let tmp22 = user;
                      let arr2 = getMutualGuildsWithCurrentUser(obj.id, set);
                      let arr3 = arr2;
                      if (0 !== arr2.length) {
                        let tmp25 = arr2;
                        if (arr3.length > 0) {
                          let tmp26 = obj;
                          let tmp27 = arr2;
                          tmp20.mutualGuilds = arr3;
                        }
                      } else {
                        let tmp23 = user;
                        if (!obj.isStaff()) {
                          continue;
                        } else {
                          let isStaffResult;
                          if (currentUser != null) {
                            isStaffResult = currentUser.isStaff();
                          }
                        }
                      }
                      continue;
                    }
                  }
                }
                let tmp28 = obj;
                let arr = items.push(tmp20);
              } else {
                let tmp16 = user;
                if (obj.isStaff()) {
                  let isStaffResult1;
                  if (currentUser != null) {
                    isStaffResult1 = currentUser.isStaff();
                  }
                }
              }
            }
          }
        } else {
          let tmp11 = id;
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
    let closure_19 = store2.getFriendCount() > 0;
    if (null != userSearchContext) {
      userSearchContext.destroy();
      userSearchContext = null;
    }
    userSearchContext = importDefault(6170).getUserSearchContext(parseUserResults, 1000);
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
  let tmp = !c15;
  if (c15) {
    tmp = !require(12827) /* getFrictionlessGDMsEnabled */.getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
    const obj = require(12827) /* getFrictionlessGDMsEnabled */;
  }
  let tmp4 = !tmp;
  if (!tmp) {
    tmp4 = performQuery();
  }
  return tmp4;
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
  this.waitFor(ensureGuildLoaded, hasConsented, getHash, handleChannelSelect, trackCommunicationDisabled, createGuildRecordFromRust, upsertRelationship, recomputeAffinities, mergeGuildAvatar);
  const items = [mergeGuildAvatar, ensureGuildLoaded];
  this.syncWith(items, performQuery);
  const items1 = [recomputeAffinities];
  this.syncWith(items1, performQueryOnAffinityChange);
  const items2 = [upsertRelationship];
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
    let tmp = !c15;
    if (c15) {
      tmp = !require(12827) /* getFrictionlessGDMsEnabled */.getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
      const obj = require(12827) /* getFrictionlessGDMsEnabled */;
    }
    let tmp4 = !tmp;
    if (!tmp) {
      let flag2 = c20 !== false;
      if (flag2) {
        c20 = false;
        flag2 = true;
      }
      tmp4 = flag2;
    }
    return tmp4;
  },
  GUILD_MEMBERS_REQUEST: function handleGuildMembersRequest(query) {
    let tmp = !c15;
    if (c15) {
      tmp = !require(12827) /* getFrictionlessGDMsEnabled */.getFrictionlessGDMsEnabled("PrivateChannelRecipientsInviteStore");
      const obj = require(12827) /* getFrictionlessGDMsEnabled */;
    }
    let tmp4 = !tmp;
    if (!tmp) {
      let tmp6 = query.query === _var.toLocaleLowerCase();
      if (tmp6) {
        let flag2 = c20 !== true;
        if (flag2) {
          c20 = true;
          flag2 = true;
        }
        tmp6 = flag2;
      }
      tmp4 = tmp6;
    }
    return tmp4;
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
    let closure_19 = store2.getFriendCount() > 0;
    if (null != userSearchContext) {
      userSearchContext.destroy();
      userSearchContext = null;
    }
    userSearchContext = importDefault(6170).getUserSearchContext(parseUserResults, 1000);
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
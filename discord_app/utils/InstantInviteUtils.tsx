// === Module 9962: InstantInviteUtils ===

// Module 9962 (InstantInviteUtils)
import util from "util" /* 1115 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5528 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1957 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;
import ReadStateStore from "ReadStateStore" /* 4653 */;
import RelationshipStore from "RelationshipStore" /* 4286 */;
import UserStore from "UserStore" /* 1372 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 7328 */;

const require = globalThis.__r;

require = fn;
function isGuildMember(dependencyMap, id) {
  let isMemberResult = null != dependencyMap;
  if (isMemberResult) {
    isMemberResult = GuildMemberStore.isMember(dependencyMap, id);
  }
  return isMemberResult;
}
function addDmUsers(arg0) {
  ({ omitUserIds, maxRowsWithoutQuery, shownUserIds, rows, counts, limit } = arg0);
  let num = 0;
  ({ omitGuildId, includeGroupDms } = arg0);
  const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
  const iter = privateChannelIds[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (null != maxRowsWithoutQuery) {
      if (maxRowsWithoutQuery > 0) {
        if (rows.length >= maxRowsWithoutQuery) {
          iter.return();
          break;
        }
      }
    }
    if (null != limit) {
      if (num >= limit) {
        iter.return();
        break;
      }
      break;
    }
    let channel = ChannelStore.getChannel(tmp3);
    let item = channel;
    if (null != channel) {
      if (item.isPrivate()) {
        if (includeGroupDms) {
          if (item.type === ChannelTypes.GROUP_DM) {
            let obj2 = { type: null, item: null, isSuggested: false };
            obj2.type = item.GROUP_DM;
            obj2.item = item;
            let arr = rows.push(obj2);
            counts.numGroupDms = counts.numGroupDms + 1;
            num = num + 1;
          }
        }
        if (null != ReadStateStore.lastMessageId(item.id)) {
          let recipientId = item.getRecipientId();
          let tmp34 = recipientId;
          if (null != recipientId) {
            if (!omitUserIds.has(tmp34)) {
              if (!shownUserIds.has(tmp34)) {
                let user = UserStore.getUser(tmp34);
                let tmp16 = user;
                if (null != user) {
                  if (!tmp16.bot) {
                    if (!isGuildMember(omitGuildId, tmp16.id)) {
                      let addResult = shownUserIds.add(tmp16.id);
                      let obj3 = { type: null, item: null, isSuggested: false };
                      obj3.type = item.DM;
                      obj3.item = tmp16;
                      let arr2 = rows.push(obj3);
                      counts.numDms = counts.numDms + 1;
                      num = num + 1;
                    }
                  }
                }
                continue;
              }
              continue;
            }
          }
        }
      }
    }
    continue;
  }
}
const ChannelTypes = fn(1074).ChannelTypes;
const InviteTargetTypes = fn(7850).InviteTargetTypes;
const RowTypes = { GROUP_DM: "GROUP_DM", DM: "DM", FRIEND: "FRIEND", CHANNEL: "CHANNEL" };
const minutes = "minutes";
const hours = "hours";
const days = "days";
const never = "never";
const dependencyMap = { [fn(9963).INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: "minutes" }, [fn(9963).INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: "hours" }, [fn(9963).INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: "hours" }, [fn(9963).INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: "hours" }, [fn(9963).INVITE_OPTIONS_1_DAY.value]: { value: 1, type: "days" }, [fn(9963).INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: "days" }, [fn(9963).INVITE_OPTIONS_14_DAYS.value]: { value: 14, type: "days" }, [fn(9963).INVITE_OPTIONS_30_DAYS.value]: { value: 30, type: "days" }, [fn(9963).INVITE_OPTIONS_60_DAYS.value]: { value: 60, type: "days" }, [fn(9963).INVITE_OPTIONS_FOREVER.value]: { value: 0, type: "never" } };
let items = [fn(9963).INVITE_OPTIONS_14_DAYS, fn(9963).INVITE_OPTIONS_30_DAYS, fn(9963).INVITE_OPTIONS_60_DAYS];
const size = fn(2);
const result = size.fileFinishedImporting("utils/InstantInviteUtils.tsx");

export default {
  getMaxAgeOptionByValue(label) {
    closure_0 = label;
    items = [...items];
    return items.find((value) => value.value === closure_0) || null;
  },
  getMaxAgeOptions(arg0) {
    _require = arg0;
    const MAX_AGE_OPTIONS = require("utils/InstantInviteUtils").MAX_AGE_OPTIONS;
    return MAX_AGE_OPTIONS.filter((value) => {
      const hasItem = items.includes(value);
      let tmp2 = !hasItem;
      if (hasItem) {
        let hasItem1;
        if (closure_0 != null) {
          const includeExperimentalValues = closure_0.includeExperimentalValues;
          if (includeExperimentalValues != null) {
            const includes = includeExperimentalValues.includes;
            if (includes != null) {
              hasItem1 = includes(value.value);
            }
          }
        }
        tmp2 = hasItem1;
      }
      return tmp2;
    });
  },
  getMaxUsesOptions: fn(9963).MAX_USES_OPTIONS,
  INVITE_OPTIONS_FOREVER: fn(9963).INVITE_OPTIONS_FOREVER,
  INVITE_OPTIONS_1_DAY: fn(9963).INVITE_OPTIONS_1_DAY,
  INVITE_OPTIONS_7_DAYS: fn(9963).INVITE_OPTIONS_7_DAYS,
  INVITE_OPTIONS_14_DAYS: fn(9963).INVITE_OPTIONS_14_DAYS,
  INVITE_OPTIONS_30_DAYS: fn(9963).INVITE_OPTIONS_30_DAYS,
  INVITE_OPTIONS_60_DAYS: fn(9963).INVITE_OPTIONS_60_DAYS,
  INVITE_OPTIONS_12_HOURS: fn(9963).INVITE_OPTIONS_12_HOURS,
  INVITE_OPTIONS_6_HOURS: fn(9963).INVITE_OPTIONS_6_HOURS,
  INVITE_OPTIONS_8_HOURS: fn(9963).INVITE_OPTIONS_8_HOURS,
  INVITE_OPTIONS_1_HOUR: fn(9963).INVITE_OPTIONS_1_HOUR,
  INVITE_OPTIONS_30_MINUTES: fn(9963).INVITE_OPTIONS_30_MINUTES,
  INVITE_OPTIONS_UNLIMITED: fn(9963).INVITE_OPTIONS_UNLIMITED,
  INVITE_OPTIONS_ONCE: fn(9963).INVITE_OPTIONS_ONCE,
  INVITE_OPTIONS_5_TIMES: fn(9963).INVITE_OPTIONS_5_TIMES,
  INVITE_OPTIONS_10_TIMES: fn(9963).INVITE_OPTIONS_10_TIMES,
  INVITE_OPTIONS_25_TIMES: fn(9963).INVITE_OPTIONS_25_TIMES,
  INVITE_OPTIONS_50_TIMES: fn(9963).INVITE_OPTIONS_50_TIMES,
  INVITE_OPTIONS_100_TIMES: fn(9963).INVITE_OPTIONS_100_TIMES
};
export { RowTypes };
export const generateRowsForQuery = function generateRowsForQuery(arg0) {
  ({ query, inviteTargetType, omitUserIds, suggestedUserIds, omitGuildId } = arg0);
  ({ suggestedChannelIds, maxRowsWithoutQuery } = arg0);
  const set = new Set();
  const rows = [];
  const counts = { numFriends: 0, numDms: 0, numGroupDms: 0, numGuildMembers: 0, numChannels: 0 };
  if ("" === query) {
    obj = { omitUserIds, maxRowsWithoutQuery, omitGuildId, shownUserIds: set, rows, counts };
    if (inviteTargetType === InviteTargetTypes.EMBEDDED_APPLICATION) {
      const obj3 = {};
      const merged = Object.assign(obj);
      obj3.includeGroupDms = false;
      obj3.limit = 1;
      addDmUsers(obj3);
      const obj4 = {};
      const merged1 = Object.assign(obj);
      obj4.suggestedChannelIds = suggestedChannelIds;
      (function addChannels(arg0) {
        ({ suggestedChannelIds, maxRowsWithoutQuery, rows, counts } = arg0);
        if (null != suggestedChannelIds) {
          const iter = suggestedChannelIds[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp4 = nextResult;
            if (null != maxRowsWithoutQuery) {
              if (maxRowsWithoutQuery > 0) {
                if (rows.length >= maxRowsWithoutQuery) {
                  iter.return();
                  break;
                }
                break;
              }
            }
            let channel = set2.getChannel(tmp4);
            if (null != channel) {
              obj = { type: constants.CHANNEL, item: null, isSuggested: true };
              obj.item = tmp8;
              let arr = rows.push(obj);
              counts.numChannels = counts.numChannels + 1;
            }
            continue;
          }
        }
      })(obj4);
    }
    const obj5 = {};
    const merged2 = Object.assign(obj);
    obj5.suggestedUserIds = suggestedUserIds;
    (function addSuggestedUsers(arg0) {
      ({ omitUserIds, suggestedUserIds, maxRowsWithoutQuery, shownUserIds, rows, counts } = arg0);
      if (null != suggestedUserIds) {
        const iter = suggestedUserIds[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp5 = nextResult;
          if (null != maxRowsWithoutQuery) {
            if (maxRowsWithoutQuery > 0) {
              if (rows.length >= maxRowsWithoutQuery) {
                iter.return();
                break;
              }
              break;
            }
          }
          if (!omitUserIds.has(tmp5)) {
            if (!shownUserIds.has(tmp5)) {
              let user = authStore.getUser(tmp5);
              let tmp11 = user;
              let tmp12 = null == user;
              if (!tmp12) {
                tmp12 = isGuildMember(tmp, tmp11.id);
              }
              if (!tmp12) {
                let addResult = shownUserIds.add(tmp11.id);
                obj = { type: constants.FRIEND, item: tmp11, isSuggested: true };
                let arr = rows.push(obj);
                counts.numFriends = counts.numFriends + 1;
              }
            }
          }
          continue;
        }
      }
    })(obj5);
    const obj7 = {};
    const merged3 = Object.assign(obj);
    obj7.includeGroupDms = true;
    addDmUsers(obj7);
    (function addFriends(arg0) {
      ({ omitUserIds, maxRowsWithoutQuery, shownUserIds, rows, counts } = arg0);
      friendIDs = friendIDs.getFriendIDs();
      const iter = friendIDs[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        if (null != maxRowsWithoutQuery) {
          if (maxRowsWithoutQuery > 0) {
            if (rows.length >= maxRowsWithoutQuery) {
              iter.return();
              break;
            }
          }
        }
        if (!omitUserIds.has(tmp4)) {
          if (!shownUserIds.has(tmp4)) {
            let user = authStore.getUser(tmp4);
            let tmp10 = user;
            let tmp11 = null == user;
            if (!tmp11) {
              tmp11 = isGuildMember(tmp, tmp10.id);
            }
            if (!tmp11) {
              obj = { type: constants.FRIEND, item: null, isSuggested: false };
              obj.item = tmp10;
              let arr = rows.push(obj);
              counts.numFriends = counts.numFriends + 1;
            }
          }
        }
        continue;
      }
    })(obj);
  } else {
    const obj9 = { query, rows, counts };
    if (inviteTargetType === InviteTargetTypes.EMBEDDED_APPLICATION) {
      const obj10 = {};
      const merged4 = Object.assign(obj9);
      obj10.inviteTargetType = inviteTargetType;
      c0 = undefined;
      importDefault = undefined;
      ({ rows: c0, counts: c1 } = obj10);
      if (obj10.inviteTargetType === tmp40.EMBEDDED_APPLICATION) {
        const obj12 = { query: tmp44, limit: 3, guildId: "w" };
        let item = AutocompleteUtilsDefault.queryChannels(obj12).forEach((record) => {
          obj = { type: obj.CHANNEL, item: record.record, isSuggested: false, score: record.score };
          _undefined.push(obj);
          _undefined2.numChannels = _undefined2.numChannels + 1;
        });
        const queryChannelsResult = AutocompleteUtilsDefault.queryChannels(obj12);
      }
    }
    const obj13 = {};
    const merged5 = Object.assign(obj9);
    obj13.omitUserIds = omitUserIds;
    obj13.omitGuildId = omitGuildId;
    obj13.shownUserIds = set;
    obj13.suggestedUserIds = suggestedUserIds;
    (function addQueriedSuggestedUsers(suggestedUserIds) {
      ({ rows: c0, counts: c1, omitUserIds, omitGuildId: closure_2, shownUserIds } = suggestedUserIds);
      suggestedUserIds = suggestedUserIds.suggestedUserIds;
      if (null != suggestedUserIds) {
        items = [];
        for (const item10013 of suggestedUserIds) {
          if (!omitUserIds.has(item10013)) {
            if (!shownUserIds.has(item10013)) {
              let user = authStore.getUser(item10013);
              if (null != user) {
                let arr = items.push(tmp8);
              }
            }
          }
          continue;
        }
        const obj2 = { query: tmp, members: items, limit: 10 };
        obj = _undefined2(set[9]);
        const item = _undefined2(set[9]).queryMemberList(obj2).forEach((record) => {
          record = record.record;
          shownUserIds.add(record.id);
          obj = { type: constants.FRIEND, item: record, isSuggested: true, score: record.score, isGuildMember: null };
          let isMemberResult = null != set;
          if (isMemberResult) {
            isMemberResult = member.isMember(tmp3, tmp4);
          }
          obj.isGuildMember = isMemberResult;
          _undefined.push(obj);
          numFriends.numFriends = numFriends.numFriends + 1;
        });
        const queryMemberListResult = _undefined2(set[9]).queryMemberList(obj2);
      }
    })(obj13);
    const obj14 = {};
    const merged6 = Object.assign(obj9);
    obj14.omitUserIds = omitUserIds;
    obj14.omitGuildId = omitGuildId;
    obj14.shownUserIds = set;
    closure_129_0 = undefined;
    closure_129_1 = undefined;
    closure_129_2 = undefined;
    closure_129_3 = undefined;
    closure_129_4 = undefined;
    ({ omitUserIds: closure_129_0, omitGuildId: closure_129_1, shownUserIds: closure_129_2, rows: closure_129_3, counts: closure_129_4 } = obj14);
    const obj15 = { query: obj14.query, limit: 50 };
    const item1 = AutocompleteUtilsDefault.queryDMUsers(obj15).forEach((record) => {
      record = record.record;
      if (!_undefined.has(record.id)) {
        if (!set.has(record.id)) {
          const dMFromUserId = ChannelStore.getDMFromUserId(record.id);
          let tmp4 = null != dMFromUserId;
          if (tmp4) {
            tmp4 = null != ReadStateStore.lastMessageId(dMFromUserId);
          }
          if (tmp4) {
            set.add(record.id);
            const obj2 = { type: set.DM, item: record, isSuggested: false, score: record.score, isGuildMember: null };
            let isMemberResult = null != c1;
            if (isMemberResult) {
              isMemberResult = GuildMemberStore.isMember(tmp9, tmp10);
            }
            obj2.isGuildMember = isMemberResult;
            EmbeddedActivitiesStore.push(obj2);
            set2.numDms = set2.numDms + 1;
          }
        }
      }
    });
    closure_130_0 = undefined;
    closure_130_1 = undefined;
    ({ rows: closure_130_0, counts: closure_130_1, query: query2 } = obj9);
    const queryDMUsersResult = AutocompleteUtilsDefault.queryDMUsers(obj15);
    const obj16 = { query: query2, limit: 50, fuzzy: false };
    const item2 = AutocompleteUtilsDefault.queryGroupDMs(obj16).forEach((record) => {
      obj = { type: obj.GROUP_DM, item: record.record, isSuggested: false, score: record.score };
      _undefined.push(obj);
      _undefined2.numGroupDms = _undefined2.numGroupDms + 1;
    });
    const obj17 = {};
    const merged7 = Object.assign(obj9);
    obj17.omitUserIds = omitUserIds;
    obj17.omitGuildId = omitGuildId;
    obj17.shownUserIds = set;
    closure_131_0 = undefined;
    closure_131_1 = undefined;
    closure_131_2 = undefined;
    closure_131_3 = undefined;
    closure_131_4 = undefined;
    ({ rows: closure_131_0, counts: closure_131_1, omitUserIds: closure_131_2, omitGuildId: closure_131_3, shownUserIds: closure_131_4, query: query3 } = obj17);
    const queryGroupDMsResult = AutocompleteUtilsDefault.queryGroupDMs(obj16);
    const obj18 = { query: query3, limit: 500, _fuzzy: false };
    const item3 = AutocompleteUtilsDefault.queryFriends(obj18).forEach((record) => {
      record = record.record;
      let hasItem = set.has(record.id);
      if (!hasItem) {
        hasItem = set2.has(record.id);
      }
      if (!hasItem) {
        set2.add(record.id);
        obj = { type: null, item: null, isSuggested: false, score: null, isGuildMember: null };
        obj.type = obj.FRIEND;
        obj.item = record;
        obj.score = record.score;
        let isMemberResult = null != EmbeddedActivitiesStore;
        if (isMemberResult) {
          isMemberResult = GuildMemberStore.isMember(tmp7, tmp8);
        }
        obj.isGuildMember = isMemberResult;
        _undefined.push(obj);
        _undefined2.numFriends = _undefined2.numFriends + 1;
      }
    });
    const queryFriendsResult = AutocompleteUtilsDefault.queryFriends(obj18);
  }
  return { rows, counts };
};
export const groupInviteSuggestions = function groupInviteSuggestions(arg0, dependencyMap) {
  items = [];
  const items1 = [];
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let type = nextResult.type;
    if (obj.FRIEND !== type) {
      if (obj.DM !== type) {
        if (obj.CHANNEL === type) {
          let arr = items1.push(tmp2);
        }
      }
      continue;
    }
    if (isGuildMember(dependencyMap, tmp2.item.id)) {
      let arr2 = items.push(tmp2);
    } else {
      let arr3 = items1.push(tmp2);
    }
  }
  const items2 = [items, items1];
  return items2;
};
export const getMostRecentDMedUser = function getMostRecentDMedUser(has, dependencyMap) {
  const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
  obj = privateChannelIds[Symbol.iterator]();
  while (obj !== undefined) {
    let channel = ChannelStore.getChannel(tmp2);
    let obj2 = channel;
    if (null != channel) {
      if (obj2.isDM()) {
        if (null != ReadStateStore.lastMessageId(obj2.id)) {
          let recipientId = obj2.getRecipientId();
          let tmp9 = recipientId;
          if (null != recipientId) {
            if (!has.has(tmp9)) {
              let user = UserStore.getUser(tmp9);
              let tmp14 = user;
              if (null != user) {
                if (!tmp14.bot) {
                  if (!isGuildMember(dependencyMap, tmp14.id)) {
                    obj.return();
                    return tmp14;
                  }
                }
              }
              continue;
            }
            continue;
          }
        }
      }
    }
    continue;
  }
  return null;
};
export const getUsersAlreadyJoined = function getUsersAlreadyJoined(channel) {
  channel = channel.channel;
  if (channel.inviteTargetType === InviteTargetTypes.EMBEDDED_APPLICATION) {
    if (null != channel) {
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
      for (const item10016 of embeddedActivitiesForChannel) {
        if (item10016.applicationId === tmp) {
          let tmp8 = globalThis;
          let _Set = Set;
          let tmp9 = new.target;
          let tmp10 = new.target;
          let set = new Set(item10016.userIds);
          obj.return();
          return set;
        }
      }
    }
  }
  return new Set();
};
export const maxAgeString = function maxAgeString(maxAge, maxUses) {
  const parsed = parseInt(maxUses, 10);
  value = dependencyMap[maxAge].value;
  const type = dependencyMap[maxAge].type;
  if (minutes === type) {
    const intl4 = util.intl;
    if (tmp2) {
      let stringResult = intl4.string(util.t["/WbTXD"]);
    } else {
      const obj2 = { numUses: parsed };
      stringResult = intl4.formatToPlainString(util.t.eDRWJK, obj2);
    }
    return stringResult;
  } else if (hours === type) {
    const intl3 = util.intl;
    const formatToPlainString2 = intl3.formatToPlainString;
    const t2 = util.t;
    if (tmp2) {
      const obj3 = { numHours: value };
      let formatToPlainString2Result = formatToPlainString2(t2.ZVdJMy, obj3);
    } else {
      const obj4 = { numHours: value, numUses: parsed };
      formatToPlainString2Result = formatToPlainString2(t2.NgZgAB, obj4);
    }
    return formatToPlainString2Result;
  } else if (days === type) {
    const intl2 = util.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const t = util.t;
    if (tmp2) {
      const obj5 = { numDays: value };
      let formatToPlainStringResult = formatToPlainString(t.T96qss, obj5);
    } else {
      const obj6 = { numDays: value, numUses: parsed };
      formatToPlainStringResult = formatToPlainString(t.TfuB9B, obj6);
    }
    return formatToPlainStringResult;
  } else if (never === type) {
    const intl = util.intl;
    if (tmp2) {
      let stringResult1 = intl.string(util.t.QrHBnC);
    } else {
      obj = { numUses: parsed };
      stringResult1 = intl.formatToPlainString(util.t.yJnTxI, obj);
    }
    return stringResult1;
  } else {
    return "";
  }
};
export const urgentShareMessageString = function urgentShareMessageString(arg0, link) {
  if (null == arg0) {
    const intl5 = util.intl;
    const obj2 = { link };
    return intl5.formatToPlainString(util.t.RHbY6K, obj2);
  } else {
    value = dependencyMap[arg0].value;
    const type = dependencyMap[arg0].type;
    if (minutes === type) {
      const intl4 = util.intl;
      const obj3 = { numMinutes: value, link };
      return intl4.formatToPlainString(util.t.N3VHkw, obj3);
    } else if (hours === type) {
      const intl3 = util.intl;
      const obj4 = { numHours: value, link };
      return intl3.formatToPlainString(util.t["3d9BlG"], obj4);
    } else if (days === type) {
      const intl2 = util.intl;
      const obj5 = { numDays: value, link };
      return intl2.formatToPlainString(util.t.gLIlkb, obj5);
    } else {
      const intl = util.intl;
      obj = { link };
      return intl.formatToPlainString(util.t.RHbY6K, obj);
    }
  }
};
export const EXPERIMENTAL_MAX_AGE_OPTIONS = items;
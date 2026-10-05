// === Module 9483: InstantInviteUtils ===

// Module 9483 (InstantInviteUtils)
import Constants from "Constants" /* 1085 */;
import intl6 from "intl" /* 1126 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5621 */;
import Constants2 from "Constants" /* 7226 */;
import utils_InstantInviteUtils from "utils/InstantInviteUtils" /* 9484 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 6719 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, friendIDs, importDefault, obj, record, set;

function isGuildMember(dependencyMap, id) {
  const isMemberResult = null != dependencyMap && GuildMemberStore.isMember(dependencyMap, id);
  return isMemberResult;
}
function addDmUsers(arg0) {
  let counts;
  let includeGroupDms;
  let limit;
  let maxRowsWithoutQuery;
  let omitGuildId;
  let omitUserIds;
  let rows;
  let shownUserIds;
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
            let obj2 = { type: item.GROUP_DM, item, isSuggested: false };
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
                      let obj3 = { type: item.DM, item: tmp16, isSuggested: false };
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
const ChannelTypes = Constants.ChannelTypes;
const InviteTargetTypes = Constants2.InviteTargetTypes;
const RowTypes = { GROUP_DM: "GROUP_DM", DM: "DM", FRIEND: "FRIEND", CHANNEL: "CHANNEL" };
const minutes = "minutes";
const hours = "hours";
const days = "days";
const never = "never";
let closure_19 = { [utils_InstantInviteUtils.INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: "minutes" }, [utils_InstantInviteUtils.INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: "hours" }, [utils_InstantInviteUtils.INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: "hours" }, [utils_InstantInviteUtils.INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: "hours" }, [utils_InstantInviteUtils.INVITE_OPTIONS_1_DAY.value]: { value: 1, type: "days" }, [utils_InstantInviteUtils.INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: "days" }, [utils_InstantInviteUtils.INVITE_OPTIONS_14_DAYS.value]: { value: 14, type: "days" }, [utils_InstantInviteUtils.INVITE_OPTIONS_30_DAYS.value]: { value: 30, type: "days" }, [utils_InstantInviteUtils.INVITE_OPTIONS_60_DAYS.value]: { value: 60, type: "days" }, [utils_InstantInviteUtils.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: "never" } };
let items = [utils_InstantInviteUtils.INVITE_OPTIONS_14_DAYS, utils_InstantInviteUtils.INVITE_OPTIONS_30_DAYS, utils_InstantInviteUtils.INVITE_OPTIONS_60_DAYS];
let obj2 = {
  getMaxAgeOptionByValue(maxAge) {
    let closure_0 = maxAge;
    items = [...items];
    const tmp = items.find((value) => value.value === closure_0) || null;
    return tmp;
  },
  getMaxAgeOptions(arg0) {
    let closure_0;
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
  getMaxUsesOptions: utils_InstantInviteUtils.MAX_USES_OPTIONS,
  INVITE_OPTIONS_FOREVER: utils_InstantInviteUtils.INVITE_OPTIONS_FOREVER,
  INVITE_OPTIONS_1_DAY: utils_InstantInviteUtils.INVITE_OPTIONS_1_DAY,
  INVITE_OPTIONS_7_DAYS: utils_InstantInviteUtils.INVITE_OPTIONS_7_DAYS,
  INVITE_OPTIONS_14_DAYS: utils_InstantInviteUtils.INVITE_OPTIONS_14_DAYS,
  INVITE_OPTIONS_30_DAYS: utils_InstantInviteUtils.INVITE_OPTIONS_30_DAYS,
  INVITE_OPTIONS_60_DAYS: utils_InstantInviteUtils.INVITE_OPTIONS_60_DAYS,
  INVITE_OPTIONS_12_HOURS: utils_InstantInviteUtils.INVITE_OPTIONS_12_HOURS,
  INVITE_OPTIONS_6_HOURS: utils_InstantInviteUtils.INVITE_OPTIONS_6_HOURS,
  INVITE_OPTIONS_8_HOURS: utils_InstantInviteUtils.INVITE_OPTIONS_8_HOURS,
  INVITE_OPTIONS_1_HOUR: utils_InstantInviteUtils.INVITE_OPTIONS_1_HOUR,
  INVITE_OPTIONS_30_MINUTES: utils_InstantInviteUtils.INVITE_OPTIONS_30_MINUTES,
  INVITE_OPTIONS_UNLIMITED: utils_InstantInviteUtils.INVITE_OPTIONS_UNLIMITED,
  INVITE_OPTIONS_ONCE: utils_InstantInviteUtils.INVITE_OPTIONS_ONCE,
  INVITE_OPTIONS_5_TIMES: utils_InstantInviteUtils.INVITE_OPTIONS_5_TIMES,
  INVITE_OPTIONS_10_TIMES: utils_InstantInviteUtils.INVITE_OPTIONS_10_TIMES,
  INVITE_OPTIONS_25_TIMES: utils_InstantInviteUtils.INVITE_OPTIONS_25_TIMES,
  INVITE_OPTIONS_50_TIMES: utils_InstantInviteUtils.INVITE_OPTIONS_50_TIMES,
  INVITE_OPTIONS_100_TIMES: utils_InstantInviteUtils.INVITE_OPTIONS_100_TIMES
};
const result = size.fileFinishedImporting("utils/InstantInviteUtils.tsx");

export default obj2;
export { RowTypes };
export const generateRowsForQuery = function generateRowsForQuery(arg0) {
  let _undefined;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let inviteTargetType;
  let maxRowsWithoutQuery;
  let numChannels;
  let omitGuildId;
  let omitUserIds;
  let query;
  let query3;
  let query4;
  let suggestedChannelIds;
  let suggestedUserIds;
  function addChannels(arg0) {
    let counts;
    let maxRowsWithoutQuery;
    let rows;
    let suggestedChannelIds;
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
        let channel = authStore.getChannel(tmp4);
        if (null != channel) {
          obj = { type: constants.CHANNEL, item: tmp8, isSuggested: true };
          let arr = rows.push(obj);
          counts.numChannels = counts.numChannels + 1;
        }
        continue;
      }
    }
  }
  function addSuggestedUsers(arg0) {
    let counts;
    let maxRowsWithoutQuery;
    let omitUserIds;
    let rows;
    let shownUserIds;
    let suggestedUserIds;
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
            let user = authStore2.getUser(tmp5);
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
  }
  function addFriends(omitGuildId) {
    let counts;
    let maxRowsWithoutQuery;
    let omitUserIds;
    let rows;
    let shownUserIds;
    ({ omitUserIds, maxRowsWithoutQuery, shownUserIds, rows, counts } = omitGuildId);
    omitGuildId = omitGuildId.omitGuildId;
    friendIDs = friendIDs.getFriendIDs();
    const iter = friendIDs[Symbol.iterator]();
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
      if (!omitUserIds.has(tmp3)) {
        if (!shownUserIds.has(tmp3)) {
          let user = authStore2.getUser(tmp3);
          let tmp9 = user;
          let tmp10 = null == user;
          if (!tmp10) {
            tmp10 = isGuildMember(omitGuildId, tmp9.id);
          }
          if (!tmp10) {
            obj = { type: constants.FRIEND, item: tmp9, isSuggested: false };
            let arr = rows.push(obj);
            counts.numFriends = counts.numFriends + 1;
          }
        }
      }
      continue;
    }
  }
  function addQueriedSuggestedUsers(suggestedUserIds) {
    let c0;
    let c1;
    let closure_2;
    let numFriends;
    let omitUserIds;
    let shownUserIds;
    ({ rows: c0, counts: c1, omitUserIds, omitGuildId: closure_2, shownUserIds } = suggestedUserIds);
    suggestedUserIds = suggestedUserIds.suggestedUserIds;
    if (null != suggestedUserIds) {
      items = [];
      for (const item10013 of suggestedUserIds) {
        if (!omitUserIds.has(item10013)) {
          if (!shownUserIds.has(item10013)) {
            let user = authStore2.getUser(item10013);
            if (null != user) {
              let arr = items.push(tmp8);
            }
          }
        }
        continue;
      }
      obj = _undefined2(closure_2[9]);
      const obj2 = { query: tmp, members: items, limit: 10 };
      const queryMemberListResult = obj.queryMemberList(obj2);
      const item = queryMemberListResult.forEach((record) => {
        let isMemberResult;
        record = record.record;
        const score = record.score;
        shownUserIds.add(record.id);
        obj = { type: constants.FRIEND, item: record, isSuggested: true, score, isGuildMember: isMemberResult };
        isMemberResult = null != closure_2;
        const push = navigation.push;
        if (isMemberResult) {
          isMemberResult = GuildMemberStore.isMember(tmp3, tmp4);
        }
        push(obj);
        numFriends.numFriends = numFriends.numFriends + 1;
      });
    }
  }
  ({ query, inviteTargetType, omitUserIds, suggestedUserIds, omitGuildId } = arg0);
  ({ suggestedChannelIds, maxRowsWithoutQuery } = arg0);
  set = new Set();
  const rows = [];
  const counts = { numFriends: 0, numDms: 0, numGroupDms: 0, numGuildMembers: 0, numChannels: 0 };
  if ("" === query) {
    obj = { omitUserIds, maxRowsWithoutQuery, omitGuildId, shownUserIds: set, rows, counts };
    if (inviteTargetType === InviteTargetTypes.EMBEDDED_APPLICATION) {
      const obj3 = { includeGroupDms: false, limit: 1 };
      const merged = Object.assign(obj);
      addDmUsers(obj3);
      const obj4 = { suggestedChannelIds };
      const merged1 = Object.assign(obj);
      addChannels(obj4);
    }
    const obj5 = { suggestedUserIds };
    const merged2 = Object.assign(obj);
    addSuggestedUsers(obj5);
    const obj7 = { includeGroupDms: true };
    const merged3 = Object.assign(obj);
    addDmUsers(obj7);
    addFriends(obj);
  } else {
    const obj9 = { query, rows, counts };
    if (inviteTargetType === InviteTargetTypes.EMBEDDED_APPLICATION) {
      const obj10 = { inviteTargetType };
      const merged4 = Object.assign(obj9);
      c0 = undefined;
      importDefault = undefined;
      ({ rows: c0, counts: c1 } = obj10);
      if (obj10.inviteTargetType === tmp40.EMBEDDED_APPLICATION) {
        let obj2 = AutocompleteUtilsDefault;
        const obj12 = { query: tmp44, limit: 3, guildId: "filter" };
        const queryChannelsResult = obj2.queryChannels(obj12);
        let item = queryChannelsResult.forEach((record) => {
          obj = { type: obj.CHANNEL, item: record.record, isSuggested: false, score: record.score };
          c0.push(obj);
          numChannels.numChannels = numChannels.numChannels + 1;
        });
      }
    }
    const obj13 = { omitUserIds, omitGuildId, shownUserIds: set, suggestedUserIds };
    let tmp5 = obj13;
    let tmp6 = obj9;
    const merged5 = Object.assign(obj9);
    const tmp8 = addQueriedSuggestedUsers(obj13);
    const obj14 = { omitUserIds, omitGuildId, shownUserIds: set };
    let tmp9 = obj14;
    let tmp10 = obj9;
    const merged6 = Object.assign(obj9);
    importDefault = undefined;
    ({ omitUserIds: c0, omitGuildId: c1, shownUserIds: c2, rows: c3, counts: c4 } = obj14);
    let tmp12 = importDefault;
    const query2 = obj14.query;
    const obj15 = { query: query2, limit: 50 };
    const obj6 = AutocompleteUtilsDefault;
    const queryDMUsersResult = obj6.queryDMUsers(obj15);
    const item1 = queryDMUsersResult.forEach((record) => {
      let isMemberResult;
      record = record.record;
      const score = record.score;
      if (!_undefined.has(record.id)) {
        if (!_undefined2.has(record.id)) {
          const dMFromUserId = authStore.getDMFromUserId(record.id);
          const tmp4 = null != dMFromUserId && null != ReadStateStore.lastMessageId(dMFromUserId);
          if (tmp4) {
            _undefined2.add(record.id);
            const obj2 = { type: constants.DM, item: record, isSuggested: false, score, isGuildMember: isMemberResult };
            isMemberResult = null != c1;
            const push = _undefined3.push;
            if (isMemberResult) {
              isMemberResult = GuildMemberStore.isMember(tmp9, tmp10);
            }
            push(obj2);
            _undefined4.numDms = _undefined4.numDms + 1;
          }
        }
      }
    });
    ({ rows: c0, counts: c1, query: query3 } = obj9);
    const obj16 = { query: query3, limit: 50, fuzzy: false };
    const obj8 = AutocompleteUtilsDefault;
    const queryGroupDMsResult = obj8.queryGroupDMs(obj16);
    const item2 = queryGroupDMsResult.forEach((record) => {
      obj = { type: constants.GROUP_DM, item: record.record, isSuggested: false, score: record.score };
      _undefined.push(obj);
      _undefined2.numGroupDms = _undefined2.numGroupDms + 1;
    });
    const obj17 = { omitUserIds, omitGuildId, shownUserIds: set };
    let tmp16 = obj17;
    const merged7 = Object.assign(obj9);
    c0 = undefined;
    importDefault = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    ({ rows: c0, counts: c1, omitUserIds: c2, omitGuildId: c3, shownUserIds: c4, query: query4 } = obj17);
    const obj18 = { query: query4, limit: 500, _fuzzy: false };
    const obj11 = AutocompleteUtilsDefault;
    const queryFriendsResult = obj11.queryFriends(obj18);
    const item3 = queryFriendsResult.forEach((record) => {
      let isMemberResult;
      record = record.record;
      const score = record.score;
      const hasItem = _undefined3.has(record.id) || _undefined4.has(record.id);
      if (!hasItem) {
        _undefined4.add(record.id);
        obj = { type: constants.FRIEND, item: record, isSuggested: false, score, isGuildMember: isMemberResult };
        isMemberResult = null != c3;
        const push = _undefined.push;
        if (isMemberResult) {
          isMemberResult = GuildMemberStore.isMember(tmp7, tmp8);
        }
        push(obj);
        _undefined2.numFriends = _undefined2.numFriends + 1;
      }
    });
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
          let self = this;
          let self2 = this;
          set = new Set(item10016.userIds);
          obj.return();
          return set;
        }
      }
    }
  }
  const set1 = new Set();
  return set1;
};
export const maxAgeString = function maxAgeString(maxAge, maxUses) {
  const parsed = parseInt(maxUses, 10);
  const value = closure_19[maxAge].value;
  const type = closure_19[maxAge].type;
  if (minutes === type) {
    let stringResult;
    const intl4 = intl6.intl;
    if (0 === parsed) {
      stringResult = intl4.string(intl6.t["/WbTXD"]);
    } else {
      const obj2 = { numUses: parsed };
      stringResult = intl4.formatToPlainString(intl6.t.eDRWJK, obj2);
    }
    return stringResult;
  } else if (hours === type) {
    let formatToPlainString2Result;
    const intl3 = intl6.intl;
    const formatToPlainString2 = intl3.formatToPlainString;
    const t2 = intl6.t;
    if (0 === parsed) {
      const obj3 = { numHours: value };
      formatToPlainString2Result = formatToPlainString2(t2.ZVdJMy, obj3);
    } else {
      const obj4 = { numHours: value, numUses: parsed };
      formatToPlainString2Result = formatToPlainString2(t2.NgZgAB, obj4);
    }
    return formatToPlainString2Result;
  } else if (days === type) {
    let formatToPlainStringResult;
    const intl2 = intl6.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const t = intl6.t;
    if (0 === parsed) {
      const obj5 = { numDays: value };
      formatToPlainStringResult = formatToPlainString(t.T96qss, obj5);
    } else {
      const obj6 = { numDays: value, numUses: parsed };
      formatToPlainStringResult = formatToPlainString(t.TfuB9B, obj6);
    }
    return formatToPlainStringResult;
  } else if (never === type) {
    let stringResult1;
    const intl = intl6.intl;
    if (0 === parsed) {
      stringResult1 = intl.string(intl6.t.QrHBnC);
    } else {
      obj = { numUses: parsed };
      stringResult1 = intl.formatToPlainString(intl6.t.yJnTxI, obj);
    }
    return stringResult1;
  } else {
    return "";
  }
};
export const urgentShareMessageString = function urgentShareMessageString(arg0, link) {
  if (null == arg0) {
    const intl5 = intl6.intl;
    const obj2 = { link };
    return intl5.formatToPlainString(intl6.t.RHbY6K, obj2);
  } else {
    const value = closure_19[arg0].value;
    const type = closure_19[arg0].type;
    if (minutes === type) {
      const intl4 = intl6.intl;
      const obj3 = { numMinutes: value, link };
      return intl4.formatToPlainString(intl6.t.N3VHkw, obj3);
    } else if (hours === type) {
      const intl3 = intl6.intl;
      const obj4 = { numHours: value, link };
      return intl3.formatToPlainString(intl6.t["3d9BlG"], obj4);
    } else if (days === type) {
      const intl2 = intl6.intl;
      const obj5 = { numDays: value, link };
      return intl2.formatToPlainString(intl6.t.gLIlkb, obj5);
    } else {
      const intl = intl6.intl;
      obj = { link };
      return intl.formatToPlainString(intl6.t.RHbY6K, obj);
    }
  }
};
export const EXPERIMENTAL_MAX_AGE_OPTIONS = items;
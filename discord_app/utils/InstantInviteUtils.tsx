// discord_app/utils/InstantInviteUtils.tsx
import util from "../intl/index.native.tsx";
import AutocompleteUtilsDefault from "AutocompleteUtils.tsx";
import EmbeddedActivitiesStore from "../modules/activities/EmbeddedActivitiesStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import GuildMemberStore from "../stores/GuildMemberStore.tsx";
import ReadStateStore from "../stores/ReadStateStore.tsx";
import RelationshipStore from "../stores/RelationshipStore.tsx";
import UserStore from "../stores/UserStore.tsx";
import PrivateChannelSortStore from "../stores/views/PrivateChannelSortStore.tsx";

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
            item = { type: null, item: null, isSuggested: false };
            item.type = item.GROUP_DM;
            item.item = item;
            let arr = rows.push(item);
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
                      item = { type: null, item: null, isSuggested: false };
                      item.type = item.DM;
                      item.item = tmp16;
                      arr = rows.push(item);
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
const InviteTargetTypes = fn(7736).InviteTargetTypes;
let RowTypes = { GROUP_DM: "GROUP_DM", DM: "DM", FRIEND: "FRIEND", CHANNEL: "CHANNEL" };
const minutes = "minutes";
const hours = "hours";
const days = "days";
const never = "never";
const dependencyMap = {
  [fn(9823).INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: "minutes" },
  [fn(9823).INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: "hours" },
  [fn(9823).INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: "hours" },
  [fn(9823).INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: "hours" },
  [fn(9823).INVITE_OPTIONS_1_DAY.value]: { value: 1, type: "days" },
  [fn(9823).INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: "days" },
  [fn(9823).INVITE_OPTIONS_14_DAYS.value]: { value: 14, type: "days" },
  [fn(9823).INVITE_OPTIONS_30_DAYS.value]: { value: 30, type: "days" },
  [fn(9823).INVITE_OPTIONS_60_DAYS.value]: { value: 60, type: "days" },
  [fn(9823).INVITE_OPTIONS_FOREVER.value]: { value: 0, type: "never" },
};
let items = [fn(9823).INVITE_OPTIONS_14_DAYS, fn(9823).INVITE_OPTIONS_30_DAYS, fn(9823).INVITE_OPTIONS_60_DAYS];
RowTypes = {
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
  getMaxUsesOptions: fn(9823).MAX_USES_OPTIONS,
  INVITE_OPTIONS_FOREVER: fn(9823).INVITE_OPTIONS_FOREVER,
  INVITE_OPTIONS_1_DAY: fn(9823).INVITE_OPTIONS_1_DAY,
  INVITE_OPTIONS_7_DAYS: fn(9823).INVITE_OPTIONS_7_DAYS,
  INVITE_OPTIONS_14_DAYS: fn(9823).INVITE_OPTIONS_14_DAYS,
  INVITE_OPTIONS_30_DAYS: fn(9823).INVITE_OPTIONS_30_DAYS,
  INVITE_OPTIONS_60_DAYS: fn(9823).INVITE_OPTIONS_60_DAYS,
  INVITE_OPTIONS_12_HOURS: fn(9823).INVITE_OPTIONS_12_HOURS,
  INVITE_OPTIONS_6_HOURS: fn(9823).INVITE_OPTIONS_6_HOURS,
  INVITE_OPTIONS_8_HOURS: fn(9823).INVITE_OPTIONS_8_HOURS,
  INVITE_OPTIONS_1_HOUR: fn(9823).INVITE_OPTIONS_1_HOUR,
  INVITE_OPTIONS_30_MINUTES: fn(9823).INVITE_OPTIONS_30_MINUTES,
  INVITE_OPTIONS_UNLIMITED: fn(9823).INVITE_OPTIONS_UNLIMITED,
  INVITE_OPTIONS_ONCE: fn(9823).INVITE_OPTIONS_ONCE,
  INVITE_OPTIONS_5_TIMES: fn(9823).INVITE_OPTIONS_5_TIMES,
  INVITE_OPTIONS_10_TIMES: fn(9823).INVITE_OPTIONS_10_TIMES,
  INVITE_OPTIONS_25_TIMES: fn(9823).INVITE_OPTIONS_25_TIMES,
  INVITE_OPTIONS_50_TIMES: fn(9823).INVITE_OPTIONS_50_TIMES,
  INVITE_OPTIONS_100_TIMES: fn(9823).INVITE_OPTIONS_100_TIMES,
};
const size = fn(2);
const result = size.fileFinishedImporting("utils/InstantInviteUtils.tsx");

export default RowTypes;
export { RowTypes };
export const generateRowsForQuery = function generateRowsForQuery(arg0) {
  ({ query, inviteTargetType, omitUserIds, suggestedUserIds } = arg0);
  ({ suggestedChannelIds, maxRowsWithoutQuery, omitGuildId } = arg0);
  const set = new Set();
  const rows = [];
  const counts = { numFriends: 0, numDms: 0, numGroupDms: 0, numGuildMembers: 0, numChannels: 0 };
  if ("" === query) {
    obj = { omitUserIds, maxRowsWithoutQuery, omitGuildId, shownUserIds: set, rows, counts };
    if (inviteTargetType === InviteTargetTypes.EMBEDDED_APPLICATION) {
      obj = {};
      const merged = Object.assign(obj);
      obj.includeGroupDms = false;
      obj.limit = 1;
      addDmUsers(obj);
      let obj1 = {};
      const merged1 = Object.assign(obj);
      obj1.suggestedChannelIds = suggestedChannelIds;
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
            channel = channel.getChannel(tmp4);
            if (null != channel) {
              obj = { type: null, item: null, isSuggested: true };
              obj.type = constants.CHANNEL;
              obj.item = tmp8;
              let arr = rows.push(obj);
              counts.numChannels = counts.numChannels + 1;
            }
            continue;
          }
        }
      })(obj1);
    }
    const obj2 = {};
    const merged2 = Object.assign(obj);
    obj2.suggestedUserIds = suggestedUserIds;
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
                obj = { type: null, item: null, isSuggested: true };
                obj.type = constants.FRIEND;
                obj.item = tmp11;
                let arr = rows.push(obj);
                counts.numFriends = counts.numFriends + 1;
              }
            }
          }
          continue;
        }
      }
    })(obj2);
    const obj3 = {};
    const merged3 = Object.assign(obj);
    obj3.includeGroupDms = true;
    addDmUsers(obj3);
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
              obj = { type: null, item: null, isSuggested: false };
              obj.type = constants.FRIEND;
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
    const obj4 = { query, rows, counts };
    if (inviteTargetType === InviteTargetTypes.EMBEDDED_APPLICATION) {
      let obj5 = {};
      const merged4 = Object.assign(obj4);
      obj5.inviteTargetType = inviteTargetType;
      c0 = undefined;
      importDefault = undefined;
      ({ rows: c0, counts: c1 } = obj5);
      if (obj5.inviteTargetType === tmp40.EMBEDDED_APPLICATION) {
        obj1 = AutocompleteUtilsDefault;
        const obj6 = { query: tmp44, limit: 3, guildId: "w" };
        let item = obj1.queryChannels(obj6).forEach((record) => {
          obj = { type: obj.CHANNEL, item: record.record, isSuggested: false, score: record.score };
          _undefined.push(obj);
          _undefined2.numChannels = _undefined2.numChannels + 1;
        });
        const queryChannelsResult = obj1.queryChannels(obj6);
      }
    }
    let obj7 = {};
    const merged5 = Object.assign(obj4);
    obj7.omitUserIds = omitUserIds;
    obj7.shownUserIds = set;
    obj7.suggestedUserIds = suggestedUserIds;
    (function addQueriedSuggestedUsers(suggestedUserIds) {
      ({ rows: c0, counts: c1, omitUserIds, shownUserIds } = suggestedUserIds);
      suggestedUserIds = suggestedUserIds.suggestedUserIds;
      if (null != suggestedUserIds) {
        items = [];
        for (const item10012 of suggestedUserIds) {
          let tmp3 = item10012;
          if (!omitUserIds.has(item10012)) {
            if (!shownUserIds.has(tmp3)) {
              let user = authStore.getUser(tmp3);
              if (null != user) {
                let arr = items.push(tmp8);
              }
            }
          }
          continue;
        }
        _undefined2(shownUserIds[9]);
        obj = { query: tmp, members: items, limit: 10 };
        const item = obj.queryMemberList(obj).forEach((record) => {
          record = record.record;
          shownUserIds.add(record.id);
          _undefined.push({ type: constants.FRIEND, item: record, isSuggested: true, score: record.score });
          numFriends.numFriends = numFriends.numFriends + 1;
        });
        const queryMemberListResult = obj.queryMemberList(obj);
      }
    })(obj7);
    const obj8 = {};
    const merged6 = Object.assign(obj4);
    obj8.omitUserIds = omitUserIds;
    obj8.shownUserIds = set;
    closure_129_0 = undefined;
    closure_129_1 = undefined;
    closure_129_2 = undefined;
    closure_129_3 = undefined;
    ({ omitUserIds: closure_129_0, shownUserIds: closure_129_1, rows: closure_129_2, counts: closure_129_3 } = obj8);
    obj5 = AutocompleteUtilsDefault;
    const obj9 = { query: obj8.query, limit: 50 };
    const item1 = obj5.queryDMUsers(obj9).forEach((record) => {
      record = record.record;
      if (!_undefined.has(record.id)) {
        obj = _undefined2;
        if (!_undefined2.has(record.id)) {
          const dMFromUserId = ChannelStore.getDMFromUserId(record.id);
          let tmp4 = null != dMFromUserId;
          if (tmp4) {
            tmp4 = null != ReadStateStore.lastMessageId(dMFromUserId);
          }
          if (tmp4) {
            obj.add(record.id);
            obj = { type: null, item: null, isSuggested: false, score: null };
            obj.type = obj.DM;
            obj.item = record;
            obj.score = record.score;
            dependencyMap.push(obj);
            set.numDms = set.numDms + 1;
          }
        }
      }
    });
    closure_130_0 = undefined;
    closure_130_1 = undefined;
    ({ rows: closure_130_0, counts: closure_130_1, query: query2 } = obj4);
    obj7 = AutocompleteUtilsDefault;
    let obj10 = { query: query2, limit: 50, fuzzy: false };
    const queryDMUsersResult = obj5.queryDMUsers(obj9);
    const item2 = obj7.queryGroupDMs(obj10).forEach((record) => {
      obj = { type: obj.GROUP_DM, item: record.record, isSuggested: false, score: record.score };
      _undefined.push(obj);
      _undefined2.numGroupDms = _undefined2.numGroupDms + 1;
    });
    const obj11 = {};
    const merged7 = Object.assign(obj4);
    obj11.omitUserIds = omitUserIds;
    obj11.shownUserIds = set;
    closure_131_0 = undefined;
    closure_131_1 = undefined;
    closure_131_2 = undefined;
    closure_131_3 = undefined;
    ({
      rows: closure_131_0,
      counts: closure_131_1,
      omitUserIds: closure_131_2,
      shownUserIds: closure_131_3,
      query: query3,
    } = obj11);
    obj10 = AutocompleteUtilsDefault;
    const obj12 = { query: query3, limit: 500, _fuzzy: false };
    const queryGroupDMsResult = obj7.queryGroupDMs(obj10);
    const item3 = obj10.queryFriends(obj12).forEach((record) => {
      record = record.record;
      let hasItem = dependencyMap.has(record.id);
      if (!hasItem) {
        hasItem = set.has(record.id);
      }
      if (!hasItem) {
        set.add(record.id);
        obj = { type: null, item: null, isSuggested: false, score: null };
        obj.type = obj.FRIEND;
        obj.item = record;
        obj.score = record.score;
        _undefined.push(obj);
        _undefined2.numFriends = _undefined2.numFriends + 1;
      }
    });
    const queryFriendsResult = obj10.queryFriends(obj12);
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
    let tmp3 = obj;
    if (obj.FRIEND !== type) {
      if (tmp3.DM !== type) {
        if (tmp3.CHANNEL === type) {
          let arr = items1.push(tmp2);
        }
      }
      continue;
    }
    if (isGuildMember(dependencyMap, tmp2.item.id)) {
      arr = items.push(tmp2);
    } else {
      let arr1 = items1.push(tmp2);
    }
  }
  const items2 = [items, items1];
  return items2;
};
export const getMostRecentDMedUser = function getMostRecentDMedUser(set, id) {
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
            if (!set.has(tmp9)) {
              let user = UserStore.getUser(tmp9);
              let tmp14 = user;
              if (null != user) {
                if (!tmp14.bot) {
                  if (!isGuildMember(id, tmp14.id)) {
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
      let stringResult = intl4.string(tmp13(1114).t["/WbTXD"]);
    } else {
      obj = { numUses: parsed };
      stringResult = intl4.formatToPlainString(tmp13(1114).t.eDRWJK, obj);
    }
    return stringResult;
  } else if (hours === type) {
    const intl3 = util.intl;
    const formatToPlainString2 = intl3.formatToPlainString;
    const t2 = util.t;
    if (tmp2) {
      obj = { numHours: value };
      let formatToPlainString2Result = formatToPlainString2(t2.ZVdJMy, obj);
    } else {
      const obj1 = { numHours: value, numUses: parsed };
      formatToPlainString2Result = formatToPlainString2(t2.NgZgAB, obj1);
    }
    return formatToPlainString2Result;
  } else if (days === type) {
    const intl2 = util.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const t = util.t;
    if (tmp2) {
      const obj2 = { numDays: value };
      let formatToPlainStringResult = formatToPlainString(t.T96qss, obj2);
    } else {
      const obj3 = { numDays: value, numUses: parsed };
      formatToPlainStringResult = formatToPlainString(t.TfuB9B, obj3);
    }
    return formatToPlainStringResult;
  } else if (never === type) {
    const intl = util.intl;
    if (tmp2) {
      let stringResult1 = intl.string(tmp4(1114).t.QrHBnC);
    } else {
      obj = { numUses: parsed };
      stringResult1 = intl.formatToPlainString(tmp4(1114).t.yJnTxI, obj);
    }
    return stringResult1;
  } else {
    return "";
  }
};
export const urgentShareMessageString = function urgentShareMessageString(arg0, link) {
  if (null == arg0) {
    const intl5 = util.intl;
    obj = { link };
    return intl5.formatToPlainString(util.t.RHbY6K, obj);
  } else {
    value = dependencyMap[arg0].value;
    const type = dependencyMap[arg0].type;
    if (minutes === type) {
      const intl4 = util.intl;
      obj = { numMinutes: value, link };
      return intl4.formatToPlainString(util.t.N3VHkw, obj);
    } else if (hours === type) {
      const intl3 = util.intl;
      const obj1 = { numHours: value, link };
      return intl3.formatToPlainString(util.t["3d9BlG"], obj1);
    } else if (days === type) {
      const intl2 = util.intl;
      const obj2 = { numDays: value, link };
      return intl2.formatToPlainString(util.t.gLIlkb, obj2);
    } else {
      const intl = util.intl;
      obj = { link };
      return intl.formatToPlainString(util.t.RHbY6K, obj);
    }
  }
};
export const EXPERIMENTAL_MAX_AGE_OPTIONS = items;

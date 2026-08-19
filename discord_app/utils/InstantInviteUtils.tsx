// discord_app/utils/InstantInviteUtils.tsx
import getSystemLocale from "../intl/index.native.tsx";
import NOOPDefault from "AutocompleteUtils.tsx";
import participantFromServer from "../modules/activities/EmbeddedActivitiesStore.tsx";
import ensureGuildLoaded from "../stores/ChannelStore.tsx";
import trackCommunicationDisabled from "../stores/GuildMemberStore.tsx";
import generateOldThreadCutoff from "../stores/ReadStateStore.tsx";
import markAllUserIdListsStale from "../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../stores/UserStore.tsx";
import makeSortedChannel from "../stores/views/PrivateChannelSortStore.tsx";
import { ChannelTypes } from "../Constants.tsx";
import { InviteTargetTypes } from "../modules/instant_invite/Constants.tsx";

require = fn;
function isGuildMember(dependencyMap, id) {
  let isMemberResult = null != dependencyMap;
  if (isMemberResult) {
    isMemberResult = member.isMember(dependencyMap, id);
  }
  return isMemberResult;
}
function addDmUsers(arg0) {
  ({ omitUserIds, maxRowsWithoutQuery, shownUserIds, rows, counts, limit } = arg0);
  let num = 0;
  ({ omitGuildId, includeGroupDms } = arg0);
  const privateChannelIds = store2.getPrivateChannelIds();
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
    let channel = store.getChannel(tmp3);
    obj = channel;
    if (null != channel) {
      if (obj.isPrivate()) {
        if (includeGroupDms) {
          if (obj.type === ChannelTypes.GROUP_DM) {
            obj = { type: null, item: null, isSuggested: false };
            obj[0] = obj.GROUP_DM;
            obj[1] = obj;
            let arr = rows.push(obj);
            counts.numGroupDms = counts.numGroupDms + 1;
            num = num + 1;
          }
        }
        if (null != closure_6.lastMessageId(obj.id)) {
          let recipientId = obj.getRecipientId();
          let tmp34 = recipientId;
          if (null != recipientId) {
            if (!omitUserIds.has(tmp34)) {
              if (!shownUserIds.has(tmp34)) {
                let user = authStore.getUser(tmp34);
                let tmp16 = user;
                if (null != user) {
                  if (!tmp16.bot) {
                    if (!isGuildMember(omitGuildId, tmp16.id)) {
                      let addResult = shownUserIds.add(tmp16.id);
                      obj = { type: null, item: null, isSuggested: false };
                      obj[0] = obj.DM;
                      obj[1] = tmp16;
                      arr = rows.push(obj);
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
const minutes = "minutes";
const hours = "hours";
const days = "days";
const never = "never";
let closure_19 = { [fn(8921).INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: "minutes" }, [fn(8921).INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: "hours" }, [fn(8921).INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: "hours" }, [fn(8921).INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: "hours" }, [fn(8921).INVITE_OPTIONS_1_DAY.value]: { value: 1, type: "days" }, [fn(8921).INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: "days" }, [fn(8921).INVITE_OPTIONS_14_DAYS.value]: { value: 14, type: "days" }, [fn(8921).INVITE_OPTIONS_30_DAYS.value]: { value: 30, type: "days" }, [fn(8921).INVITE_OPTIONS_60_DAYS.value]: { value: 60, type: "days" }, [fn(8921).INVITE_OPTIONS_FOREVER.value]: { value: 0, type: "never" } };
let items = [require("get label").INVITE_OPTIONS_14_DAYS, require("get label").INVITE_OPTIONS_30_DAYS, require("get label").INVITE_OPTIONS_60_DAYS];
let obj = {
  getMaxAgeOptionByValue(label) {
    closure_0 = label;
    items = [...items];
    return items.find((item, index) => item.value === closure_0) || null;
  },
  getMaxAgeOptions(arg0) {
    const _require = arg0;
    const MAX_AGE_OPTIONS = require("native/InstantInviteUtils.tsx").MAX_AGE_OPTIONS;
    return MAX_AGE_OPTIONS.filter((item, index) => {
      const hasItem = items.includes(item);
      let tmp2 = !hasItem;
      if (hasItem) {
        let hasItem1;
        if (obj != null) {
          const includeExperimentalValues = obj.includeExperimentalValues;
          if (includeExperimentalValues != null) {
            const includes = includeExperimentalValues.includes;
            if (includes != null) {
              hasItem1 = includes(item.value);
            }
          }
        }
        tmp2 = hasItem1;
      }
      return tmp2;
    });
  },
  getMaxUsesOptions: require("get label").MAX_USES_OPTIONS,
  INVITE_OPTIONS_FOREVER: require("get label").INVITE_OPTIONS_FOREVER,
  INVITE_OPTIONS_1_DAY: require("get label").INVITE_OPTIONS_1_DAY,
  INVITE_OPTIONS_7_DAYS: require("get label").INVITE_OPTIONS_7_DAYS,
  INVITE_OPTIONS_14_DAYS: require("get label").INVITE_OPTIONS_14_DAYS,
  INVITE_OPTIONS_30_DAYS: require("get label").INVITE_OPTIONS_30_DAYS,
  INVITE_OPTIONS_60_DAYS: require("get label").INVITE_OPTIONS_60_DAYS,
  INVITE_OPTIONS_12_HOURS: require("get label").INVITE_OPTIONS_12_HOURS,
  INVITE_OPTIONS_6_HOURS: require("get label").INVITE_OPTIONS_6_HOURS,
  INVITE_OPTIONS_8_HOURS: require("get label").INVITE_OPTIONS_8_HOURS,
  INVITE_OPTIONS_1_HOUR: require("get label").INVITE_OPTIONS_1_HOUR,
  INVITE_OPTIONS_30_MINUTES: require("get label").INVITE_OPTIONS_30_MINUTES,
  INVITE_OPTIONS_UNLIMITED: require("get label").INVITE_OPTIONS_UNLIMITED,
  INVITE_OPTIONS_ONCE: require("get label").INVITE_OPTIONS_ONCE,
  INVITE_OPTIONS_5_TIMES: require("get label").INVITE_OPTIONS_5_TIMES,
  INVITE_OPTIONS_10_TIMES: require("get label").INVITE_OPTIONS_10_TIMES,
  INVITE_OPTIONS_25_TIMES: require("get label").INVITE_OPTIONS_25_TIMES,
  INVITE_OPTIONS_50_TIMES: require("get label").INVITE_OPTIONS_50_TIMES,
  INVITE_OPTIONS_100_TIMES: require("get label").INVITE_OPTIONS_100_TIMES
};
const result = require("obj132").fileFinishedImporting("utils/InstantInviteUtils.tsx");

export default obj;
export const RowTypes = obj;
export const generateRowsForQuery = function generateRowsForQuery(arg0) {
  ({ query, inviteTargetType, omitUserIds, suggestedUserIds } = arg0);
  ({ suggestedChannelIds, maxRowsWithoutQuery, omitGuildId } = arg0);
  const set = new Set();
  const rows = [];
  const counts = { numFriends: 0, numDms: 0, numGroupDms: 0, numGuildMembers: 0, numChannels: 0 };
  if ("" === query) {
    obj = { omitUserIds: null, maxRowsWithoutQuery: null, omitGuildId: null, shownUserIds: null, rows: null, counts: null };
    obj[0] = omitUserIds;
    obj[1] = maxRowsWithoutQuery;
    obj[2] = omitGuildId;
    obj[3] = set;
    obj[4] = rows;
    obj[5] = counts;
    if (inviteTargetType === InviteTargetTypes.EMBEDDED_APPLICATION) {
      obj = {};
      const merged = Object.assign(obj);
      obj.includeGroupDms = false;
      obj.limit = 1;
      addDmUsers(obj);
      obj1 = {};
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
              obj[0] = constants.CHANNEL;
              obj[1] = tmp8;
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
                tmp12 = callback(tmp, tmp11.id);
              }
              if (!tmp12) {
                let addResult = shownUserIds.add(tmp11.id);
                obj = { type: null, item: null, isSuggested: true };
                obj[0] = constants.FRIEND;
                obj[1] = tmp11;
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
              tmp11 = callback(tmp, tmp10.id);
            }
            if (!tmp11) {
              obj = { type: null, item: null, isSuggested: false };
              obj[0] = constants.FRIEND;
              obj[1] = tmp10;
              let arr = rows.push(obj);
              counts.numFriends = counts.numFriends + 1;
            }
          }
        }
        continue;
      }
    })(obj);
  } else {
    const obj4 = { query: null, rows: null, counts: null };
    obj4[0] = query;
    obj4[1] = rows;
    obj4[2] = counts;
    if (inviteTargetType === InviteTargetTypes.EMBEDDED_APPLICATION) {
      let obj5 = {};
      const merged4 = Object.assign(obj4);
      obj5.inviteTargetType = inviteTargetType;
      c0 = undefined;
      importDefault = undefined;
      ({ rows: c0, counts: c1 } = obj5);
      if (obj5.inviteTargetType === tmp40.EMBEDDED_APPLICATION) {
        obj1 = NOOPDefault;
        const obj6 = { query: null, limit: 3, guildId: "call" };
        obj6[0] = tmp44;
        let item = obj1.queryChannels(obj6).forEach((item, index) => {
          _undefined.push({ type: closure_1_12.CHANNEL, item: item.record, isSuggested: false, score: item.score });
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
          if (!omitUserIds.has(item10012)) {
            if (!shownUserIds.has(item10012)) {
              let user = authStore.getUser(item10012);
              if (null != user) {
                let arr = items.push(tmp8);
              }
            }
          }
          continue;
        }
        _undefined2(shownUserIds[9]);
        obj = { query: null, members: null, limit: 10 };
        obj[0] = tmp;
        obj[1] = items;
        const item = obj.queryMemberList(obj).forEach((item, index) => {
          const record = item.record;
          shownUserIds.add(record.id);
          numFriends.numFriends = numFriends.numFriends + 1;
        });
        const queryMemberListResult = obj.queryMemberList(obj);
      }
    })(obj7);
    const obj8 = {};
    const merged6 = Object.assign(obj4);
    obj8.omitUserIds = omitUserIds;
    obj8.shownUserIds = set;
    ({ omitUserIds: c0, shownUserIds: c1, rows: c2, counts: c3 } = obj8);
    obj5 = NOOPDefault;
    const obj9 = { query: null, limit: 50 };
    obj9[0] = obj8.query;
    const item1 = obj5.queryDMUsers(obj9).forEach((item, index) => {
      const record = item.record;
      if (!_undefined.has(record.id)) {
        obj = _undefined2;
        if (!_undefined2.has(record.id)) {
          const dMFromUserId = closure_1_4.getDMFromUserId(record.id);
          let tmp4 = null != dMFromUserId;
          if (tmp4) {
            tmp4 = null != closure_1_6.lastMessageId(dMFromUserId);
          }
          if (tmp4) {
            obj.add(record.id);
            obj = { type: null, item: null, isSuggested: false, score: null };
            obj[0] = closure_1_12.DM;
            obj[1] = record;
            obj[3] = item.score;
            _undefined3.push(obj);
            _undefined4.numDms = _undefined4.numDms + 1;
          }
        }
      }
    });
    ({ rows: c0, counts: c1, query: query2 } = obj4);
    obj7 = NOOPDefault;
    let obj10 = { query: null, limit: 50, fuzzy: false };
    obj10[0] = query2;
    const queryDMUsersResult = obj5.queryDMUsers(obj9);
    const item2 = obj7.queryGroupDMs(obj10).forEach((item, index) => {
      _undefined.push({ type: closure_1_12.GROUP_DM, item: item.record, isSuggested: false, score: item.score });
      _undefined2.numGroupDms = _undefined2.numGroupDms + 1;
    });
    const obj11 = {};
    const merged7 = Object.assign(obj4);
    obj11.omitUserIds = omitUserIds;
    obj11.shownUserIds = set;
    c0 = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    c3 = undefined;
    ({ rows: c0, counts: c1, omitUserIds: c2, shownUserIds: c3, query: query3 } = obj11);
    obj10 = NOOPDefault;
    const obj12 = { query: null, limit: 500, _fuzzy: false };
    obj12[0] = query3;
    const queryGroupDMsResult = obj7.queryGroupDMs(obj10);
    const item3 = obj10.queryFriends(obj12).forEach((item, index) => {
      const record = item.record;
      let hasItem = _undefined3.has(record.id);
      if (!hasItem) {
        hasItem = _undefined4.has(record.id);
      }
      if (!hasItem) {
        _undefined4.add(record.id);
        obj = { type: null, item: null, isSuggested: false, score: null };
        obj[0] = closure_1_12.FRIEND;
        obj[1] = record;
        obj[3] = item.score;
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
    if (obj.FRIEND !== type) {
      if (obj.DM !== type) {
        if (obj.CHANNEL === type) {
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
  const privateChannelIds = store2.getPrivateChannelIds();
  obj = privateChannelIds[Symbol.iterator]();
  while (obj !== undefined) {
    let channel = store.getChannel(tmp2);
    let obj2 = channel;
    if (null != channel) {
      if (obj2.isDM()) {
        if (null != closure_6.lastMessageId(obj2.id)) {
          let recipientId = obj2.getRecipientId();
          let tmp9 = recipientId;
          if (null != recipientId) {
            if (!set.has(tmp9)) {
              let user = authStore.getUser(tmp9);
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
      embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(channel.id);
      for (const item10016 of embeddedActivitiesForChannel) {
        if (item10016.applicationId === tmp) {
          let _Set = Set;
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
  const value = dependencyMap2[maxAge].value;
  const type = dependencyMap2[maxAge].type;
  if (minutes === type) {
    const intl4 = getSystemLocale.intl;
    if (tmp2) {
      let stringResult = intl4.string(getSystemLocale.t["/WbTXD"]);
    } else {
      obj = { numUses: null };
      obj[0] = parsed;
      stringResult = intl4.formatToPlainString(getSystemLocale.t.eDRWJK, obj);
    }
    return stringResult;
  } else if (hours === type) {
    const intl3 = getSystemLocale.intl;
    const formatToPlainString2 = intl3.formatToPlainString;
    const t2 = getSystemLocale.t;
    if (tmp2) {
      obj = { numHours: null };
      obj[0] = value;
      let formatToPlainString2Result = formatToPlainString2(t2.ZVdJMy, obj);
    } else {
      obj1 = { numHours: null, numUses: null };
      obj1[0] = value;
      obj1[1] = parsed;
      formatToPlainString2Result = formatToPlainString2(t2.NgZgAB, obj1);
    }
    return formatToPlainString2Result;
  } else if (days === type) {
    const intl2 = getSystemLocale.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const t = getSystemLocale.t;
    if (tmp2) {
      const obj2 = { numDays: null };
      obj2[0] = value;
      let formatToPlainStringResult = formatToPlainString(t.T96qss, obj2);
    } else {
      const obj3 = { numDays: null, numUses: null };
      obj3[0] = value;
      obj3[1] = parsed;
      formatToPlainStringResult = formatToPlainString(t.TfuB9B, obj3);
    }
    return formatToPlainStringResult;
  } else if (never === type) {
    const intl = getSystemLocale.intl;
    if (tmp2) {
      let stringResult1 = intl.string(getSystemLocale.t.QrHBnC);
    } else {
      obj = { numUses: null };
      obj[0] = parsed;
      stringResult1 = intl.formatToPlainString(getSystemLocale.t.yJnTxI, obj);
    }
    return stringResult1;
  } else {
    return "";
  }
};
export const urgentShareMessageString = function urgentShareMessageString(arg0, arg1) {
  if (null == arg0) {
    const intl5 = getSystemLocale.intl;
    obj = { link: null };
    obj[0] = arg1;
    return intl5.formatToPlainString(getSystemLocale.t.RHbY6K, obj);
  } else {
    const value = dependencyMap2[arg0].value;
    const type = dependencyMap2[arg0].type;
    if (minutes === type) {
      const intl4 = getSystemLocale.intl;
      obj = { numMinutes: null, link: null };
      obj[0] = value;
      obj[1] = arg1;
      return intl4.formatToPlainString(getSystemLocale.t.N3VHkw, obj);
    } else if (hours === type) {
      const intl3 = getSystemLocale.intl;
      obj1 = { numHours: null, link: null };
      obj1[0] = value;
      obj1[1] = arg1;
      return intl3.formatToPlainString(getSystemLocale.t["3d9BlG"], obj1);
    } else if (days === type) {
      const intl2 = getSystemLocale.intl;
      const obj2 = { numDays: null, link: null };
      obj2[0] = value;
      obj2[1] = arg1;
      return intl2.formatToPlainString(getSystemLocale.t.gLIlkb, obj2);
    } else {
      const intl = getSystemLocale.intl;
      obj = { link: null };
      obj[0] = arg1;
      return intl.formatToPlainString(getSystemLocale.t.RHbY6K, obj);
    }
  }
};
export const EXPERIMENTAL_MAX_AGE_OPTIONS = items;
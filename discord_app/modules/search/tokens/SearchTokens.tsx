// discord_app/modules/search/tokens/SearchTokens.tsx
import applyDefault from "apply" /* 12 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import tDefault from "t" /* 3975 */;
import NOOPDefault from "NOOP" /* 6714 */;
import ANSWER_IN_REGEX from "ANSWER_IN_REGEX" /* 11515 */;
import getMatch2 from "getMatch" /* 11517 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import comparator from "comparator" /* 1980 */;
import closure_7 from "comparator" /* 1980 */;
import closure_8 from "markAllUserIdListsStale" /* 4030 */;
import closure_9 from "handleConnectionOpen" /* 1979 */;
import closure_10 from "initialize" /* 4220 */;
import closure_11 from "mergeGuildAvatar" /* 1922 */;
import closure_12 from "handleUserSearchResults" /* 11513 */;
import closure_13 from "handleReset" /* 11514 */;
import ME from "ME" /* 676 */;
import { SearchTokenTypes } from "../SearchUtils.tsx";

require = arg1;
function getShortcuts() {
  obj = {};
  const intl = getSystemLocale.intl;
  obj[intl.string(getSystemLocale.t.HYiVEQ)] = () => {
    obj = callback(3975)();
    const addResult = callback(3975)().startOf("day").add(0, "day");
    const items = [addResult, ];
    const startOfResult = callback(3975)().startOf("day");
    items[1] = addResult.clone().add(1, "day");
    return items;
  };
  const intl2 = getSystemLocale.intl;
  obj[intl2.string(getSystemLocale.t.cu86KC)] = () => {
    obj = callback(3975)();
    const addResult = callback(3975)().startOf("day").add(-1, "day");
    const items = [addResult, ];
    const startOfResult = callback(3975)().startOf("day");
    items[1] = addResult.clone().add(1, "day");
    return items;
  };
  const intl3 = getSystemLocale.intl;
  obj[intl3.string(getSystemLocale.t["FvBj/6"])] = () => {
    obj = callback(3975)();
    const addResult = callback(3975)().startOf("week").add(0, "week");
    const items = [addResult, ];
    const startOfResult = callback(3975)().startOf("week");
    items[1] = addResult.clone().add(1, "week");
    return items;
  };
  const intl4 = getSystemLocale.intl;
  obj[intl4.string(getSystemLocale.t["20uWCw"])] = () => {
    obj = callback(3975)();
    const addResult = callback(3975)().startOf("month").add(0, "month");
    const items = [addResult, ];
    const startOfResult = callback(3975)().startOf("month");
    items[1] = addResult.clone().add(1, "month");
    return items;
  };
  const intl5 = getSystemLocale.intl;
  obj[intl5.string(getSystemLocale.t["dXC/hn"])] = () => {
    obj = callback(3975)();
    const addResult = callback(3975)().startOf("year").add(0, "year");
    const items = [addResult, ];
    const startOfResult = callback(3975)().startOf("year");
    items[1] = addResult.clone().add(1, "year");
    return items;
  };
  return obj;
}
function isValidUserAutocomplete(token) {
  const match = token.getMatch(1);
  if (regex2.test(match)) {
    let flag = null != match;
    if (flag) {
      token.setData("userId", match);
      flag = true;
    }
    return flag;
  } else if (match === closure_14) {
    const currentUser = authStore.getCurrentUser();
    let tmp15 = null;
    if (null != currentUser) {
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      tmp15 = id;
    }
    let tmp6 = tmp15;
  } else if (null != token.getMatch(4)) {
    const findByTagResult = authStore.findByTag(token.getMatch(4));
    let tmp10 = null;
    if (null != findByTagResult) {
      let id1;
      if (findByTagResult != null) {
        id1 = findByTagResult.id;
      }
      tmp10 = id1;
    }
    tmp6 = tmp10;
  } else {
    const match1 = token.getMatch(2);
    const findByTagResult1 = authStore.findByTag(match1, token.getMatch(3));
    tmp6 = null;
    if (null != findByTagResult1) {
      let id2;
      if (findByTagResult1 != null) {
        id2 = findByTagResult1.id;
      }
      tmp6 = id2;
    }
  }
}
function dateValidator(getFullMatch) {
  const str = getFullMatch.getFullMatch();
  const formatted = getFullMatch.getFullMatch().trim().toLowerCase();
  const tmp2 = getShortcuts()[formatted];
  if (null != tmp2) {
    [obj9, obj10] = callback(tmp2(), 2);
    const tmp23 = callback(tmp2(), 2);
  } else {
    const _Set3 = Set;
    const obj20 = tDefault;
    const set = new Set(tDefault.months().map((str) => str.toLowerCase()));
    if (set.has(formatted)) {
      const localResult = tmp32(3975)(formatted, "MMMM").local();
      const items = [localResult, ];
      const obj17 = tmp32(3975)(formatted, "MMMM");
      items[1] = localResult.clone().add(1, "month");
      const cloneResult = localResult.clone();
      [obj9, obj10] = callback(items, 2);
      const tmp21 = callback(items, 2);
    } else {
      const _Set = Set;
      let tmp32Result = tmp32(3975);
      const set1 = new Set(tmp32Result.weekdays().map((str) => str.toLowerCase()));
      if (set1.has(formatted)) {
        const localResult1 = tmp32(3975)(formatted, "dddd").local();
        const items1 = [localResult1, ];
        const obj14 = tmp32(3975)(formatted, "dddd");
        items1[1] = localResult1.clone().add(1, "day");
        const cloneResult1 = localResult1.clone();
        [obj9, obj10] = callback(items1, 2);
        const tmp19 = callback(items1, 2);
      } else {
        const _Date = Date;
        const date = new Date();
        const _Set2 = Set;
        const fullYear = date.getFullYear();
        tmp32Result = tmp32(12);
        const set2 = new Set(tmp32Result.range(2015, fullYear + 1).map((arg0) => arg0.toString()));
        if (set2.has(formatted)) {
          const localResult2 = tmp32(3975)(formatted, "YYYY").local();
          const items2 = [localResult2, ];
          const obj11 = tmp32(3975)(formatted, "YYYY");
          items2[1] = localResult2.clone().add(1, "year");
          const cloneResult2 = localResult2.clone();
          [obj9, obj10] = callback(items2, 2);
          const tmp17 = callback(items2, 2);
        } else {
          const localResult3 = tmp32(3975)(formatted, closure_16).local();
          const items3 = [localResult3, ];
          const obj6 = tmp32(3975)(formatted, closure_16);
          items3[1] = localResult3.clone().add(1, "day");
          const cloneResult3 = localResult3.clone();
          [obj9, obj10] = callback(items3, 2);
          const tmp15 = callback(items3, 2);
        }
        const rangeResult = tmp32Result.range(2015, fullYear + 1);
      }
      const weekdaysResult = tmp32Result.weekdays();
    }
    const monthsResult = tDefault.months();
  }
  const isValidResult = obj9.isValid();
  let tmp25 = !isValidResult;
  if (isValidResult) {
    tmp25 = !obj10.isValid();
  }
  let flag = !tmp25;
  if (!tmp25) {
    let tmp27 = obj9;
    let tmp28 = null;
    if ("before" !== arg1) {
      tmp27 = obj10;
      tmp28 = obj9;
      if ("after" === arg1) {
        tmp27 = null;
        tmp28 = obj10;
      }
    }
    getFullMatch.setData("start", tmp28);
    getFullMatch.setData("end", tmp27);
    flag = true;
  }
  return flag;
}
function isValidChannelAutocomplete(token, guildId) {
  const str = token.getMatch(1);
  if (regex2.test(str)) {
    const items = [str];
    token.setData("channelIds", items);
    let flag = true;
  } else {
    let replaced = str;
    if (tmp) {
      const substr = str.substring(1, str.length - 1);
      replaced = substr.replaceAll(/\\(.)/g, (arg0, arg1) => arg1);
    }
    tmp = str.startsWith("\"") && str.endsWith("\"");
    if (obj2.isGuildLikeSearchContext(guildId)) {
      guildId = guildId.guildId;
      importDefault = undefined;
      const combined = store2.getChannels(guildId)[closure_5].concat(store2.getChannels(guildId)[closure_6]);
      importDefault = store2.getTextChannelNameDisambiguations(guildId);
      const obj3 = store2.getChannels(guildId)[closure_5];
      const obj4 = applyDefault;
      const mapped = applyDefault.chain(combined).map((channel) => channel.channel);
      if (null != guildId) {
        let allThreadsForGuild = store.getAllThreadsForGuild(guildId);
      } else {
        allThreadsForGuild = [];
      }
      const combined1 = mapped.concat(allThreadsForGuild);
      const chainResult = applyDefault.chain(combined);
      const valueResult = combined1.filter((channel) => {
        let name;
        if (dependencyMap[channel.id] != null) {
          name = tmp2.name;
        }
        if (name == null) {
          name = replaced(closure_1_2[13]).computeChannelName(channel, closure_1_11, closure_1_8);
          obj = replaced(closure_1_2[13]);
        }
        return replaced === name;
      }).value();
      let length;
      if (valueResult != null) {
        length = valueResult.length;
      }
      let flag3 = length > 0;
      if (flag3) {
        token.setData("channelIds", valueResult.map((id) => id.id));
        flag3 = true;
      }
      flag = flag3;
      const iter = combined1.filter((channel) => {
        let name;
        if (dependencyMap[channel.id] != null) {
          name = tmp2.name;
        }
        if (name == null) {
          name = replaced(closure_1_2[13]).computeChannelName(channel, closure_1_11, closure_1_8);
          obj = replaced(closure_1_2[13]);
        }
        return replaced === name;
      });
    } else {
      flag = guildId.type === constants.DMS;
      if (flag) {
        flag = !closure_10.hidePersonalInformation;
      }
      if (flag) {
        const _Object = Object;
        const values = Object.values(store.getMutablePrivateChannels());
        const found = values.filter((isGroupDM) => {
          if (isGroupDM.isGroupDM()) {
            if (replaced === obj.computeChannelName(isGroupDM, closure_1_11, closure_1_8)) {
              return true;
            }
            obj = replaced(closure_1_2[13]);
          }
          if (isGroupDM.isDM()) {
            const user = closure_1_11.getUser(isGroupDM.getRecipientId());
            if (null == user) {
              return false;
            } else {
              return replaced === dependencyMap(closure_1_2[14]).getUserTag(user);
            }
          } else {
            return false;
          }
        });
        let length1;
        if (found != null) {
          length1 = found.length;
        }
        let flag2 = length1 > 0;
        if (flag2) {
          token.setData("channelIds", found.map((id) => id.id));
          flag2 = true;
        }
        flag = flag2;
      }
    }
    obj2 = replaced(11511);
  }
  return flag;
}
function getHasMap() {
  obj = {};
  const intl = getSystemLocale.intl;
  obj[intl.string(getSystemLocale.t.ZNR2fi)] = "link";
  const intl2 = getSystemLocale.intl;
  obj[intl2.string(getSystemLocale.t["20uQR3"])] = "embed";
  const intl3 = getSystemLocale.intl;
  obj[intl3.string(getSystemLocale.t.L4lxyE)] = "poll";
  const intl4 = getSystemLocale.intl;
  obj[intl4.string(getSystemLocale.t.nrpA5E)] = "snapshot";
  const intl5 = getSystemLocale.intl;
  obj[intl5.string(getSystemLocale.t["AV/v6i"])] = "file";
  const intl6 = getSystemLocale.intl;
  obj[intl6.string(getSystemLocale.t.XM9XGP)] = "video";
  const intl7 = getSystemLocale.intl;
  obj[intl7.string(getSystemLocale.t.TNLcpx)] = "image";
  const intl8 = getSystemLocale.intl;
  obj[intl8.string(getSystemLocale.t.F8Wf0e)] = "sound";
  const intl9 = getSystemLocale.intl;
  obj[intl9.string(getSystemLocale.t.PJgX2h)] = "sticker";
  return obj;
}
function isValidHasAutocomplete(token) {
  return ANSWER_IN_REGEX.validateForMapWithNegation("has", getHasMap(), token);
}
function isValidAuthorTypeAutocomplete(token) {
  obj = ANSWER_IN_REGEX;
  obj = {};
  const intl = getSystemLocale.intl;
  obj[intl.string(getSystemLocale.t.tPZo4p)] = "user";
  const intl2 = getSystemLocale.intl;
  obj[intl2.string(getSystemLocale.t.JL7sRS)] = "bot";
  const intl3 = getSystemLocale.intl;
  obj[intl3.string(getSystemLocale.t.WjkIKU)] = "webhook";
  return obj.validateForMapWithNegation("author_type", obj, token);
}
function isValidPinnedAutocomplete(getMatch) {
  const match = getMatch.getMatch(1);
  if ("true" === match) {
    getMatch.setData("pinned", true);
    let flag = true;
  } else {
    flag = "false" === match;
    if (flag) {
      getMatch.setData("pinned", false);
      flag = true;
    }
  }
  return flag;
}
function generateDateAutocompletions() {
  obj = tDefault;
  const monthsResult = tDefault.months();
  const items = [...Array.from(new Set(tDefault.months().map((str) => str.toLowerCase())))];
  const set = new Set(tDefault.months().map((str) => str.toLowerCase()));
  const obj2 = tDefault;
  const weekdaysResult = tDefault.weekdays();
  let arraySpreadResult = HermesBuiltin.arraySpread(Array.from(new Set(tDefault.weekdays().map((str) => str.toLowerCase()))), tmp2);
  const set1 = new Set(tDefault.weekdays().map((str) => str.toLowerCase()));
  const fullYear = new Date().getFullYear();
  const date = new Date();
  const obj4 = applyDefault;
  const rangeResult = applyDefault.range(2015, fullYear + 1);
  arraySpreadResult = HermesBuiltin.arraySpread(Array.from(new Set(applyDefault.range(2015, fullYear + 1).map((arg0) => arg0.toString()))), arraySpreadResult);
  HermesBuiltin.arraySpread(Object.keys(getShortcuts()), arraySpreadResult);
  return items;
}
function getUserAutocompletions(tokens) {
  ({ query, searchContext, maxResults } = tokens);
  tokens = tokens.tokens;
  let items2;
  let set1;
  let currentUser1;
  c3 = undefined;
  obj = { query: null, limit: null, request: false, boosters: null };
  const str2 = query.trim().split("#")[0];
  obj[0] = str2;
  obj[1] = maxResults;
  obj1 = items2(currentUser1[18]);
  obj[3] = obj1.getBoosterMap(items2(currentUser1[19]).AutocompleterResultTypes.USER);
  const type = searchContext.type;
  if (constants.GUILD !== type) {
    if (tmp3.GUILD_CHANNEL !== type) {
      if (tmp3.THREAD !== type) {
        if (tmp3.CHANNEL === type) {
          obj = {};
          const merged = Object.assign(obj);
          obj.channelId = searchContext.channelId;
          let queryChannelUsersResult = set1(tmp2[18]).queryChannelUsers(obj);
          const obj7 = set1(tmp2[18]);
        } else if (tmp3.DMS === type) {
          if (tokens == null) {
            tokens = [];
          }
          if (null == tokens) {
            let items = [];
          } else {
            const _Set = Set;
            const set = new Set();
            items2 = set;
            const items1 = [];
            set1 = items1;
            let item = tokens.forEach((getData) => {
              const data = getData.getData("channelIds");
              if (null != data) {
                const item = data.forEach((arg0) => arr.push(arg0));
              }
            });
            items = [];
            currentUser1 = items;
            const item1 = items1.forEach((arg0) => {
              const channel = closure_1_4.getChannel(arg0);
              if (null != channel) {
                if (channel.isDM()) {
                  let user = closure_1_11.getUser(channel.getRecipientId());
                  let hasItem = null == user;
                  if (!hasItem) {
                    hasItem = items2.has(user.id);
                  }
                  if (!hasItem) {
                    currentUser1.push(user);
                    items2.add(user.id);
                  }
                } else if (channel.isGroupDM()) {
                  const recipients = channel.recipients;
                  const item = recipients.forEach((arg0) => {
                    const user = closure_1_11.getUser(arg0);
                    let hasItem = null == user;
                    if (!hasItem) {
                      hasItem = set.has(user.id);
                    }
                    if (!hasItem) {
                      arr = arr.push(user);
                      set.add(user.id);
                    }
                  });
                }
              }
            });
          }
          if (items.length > 0) {
            const currentUser = authStore.getCurrentUser();
            if (null != currentUser) {
              items.push(currentUser);
            }
            obj = {};
            const merged1 = Object.assign(obj);
            obj.users = items;
            queryChannelUsersResult = set1(tmp2[18]).queryUsers(obj);
            const obj5 = set1(tmp2[18]);
          } else {
            let obj2 = set1(tmp2[18]);
            obj1 = {};
            const merged2 = Object.assign(obj);
            queryChannelUsersResult = obj2.queryAllUsers(obj1);
          }
        } else {
          return [];
        }
      }
      currentUser1 = authStore.getCurrentUser();
      const replaced = str2.toLowerCase().replace(/^@/, "");
      let tmp31 = null != currentUser1;
      if (tmp31) {
        tmp31 = str2.length > 0;
      }
      if (tmp31) {
        const intl = tmp(tmp2[12]).intl;
        let startsWithResult = intl.string(tmp(tmp2[12]).t.Qf3ptv).startsWith(replaced);
        if (!startsWithResult) {
          const substr = closure_14.substr(1);
          startsWithResult = substr.startsWith(replaced);
        }
        tmp31 = startsWithResult;
        const stringResult = intl.string(tmp(tmp2[12]).t.Qf3ptv);
      }
      c3 = tmp31;
      const found = queryChannelUsersResult.filter((record) => {
        record = record.record;
        let isBlockedOrIgnoredResult = closure_1_8.isBlockedOrIgnored(record.id);
        if (!isBlockedOrIgnoredResult) {
          let tmp2 = c3;
          if (c3) {
            let id;
            if (currentUser1 != null) {
              id = currentUser1.id;
            }
            tmp2 = record.id === id;
          }
          isBlockedOrIgnoredResult = tmp2;
        }
        return !isBlockedOrIgnoredResult;
      });
      const mapped = found.map((record) => {
        record = record.record;
        obj = { text: set1(currentUser1[14]).getUserTag(record), user: record };
        return obj;
      });
      if (tmp31) {
        obj2 = { text: null, user: null };
        obj2[0] = closure_14;
        obj2[1] = currentUser1;
        mapped.unshift(obj2);
      }
      return mapped;
    }
  }
  if (0 === str2.length) {
    items2 = [];
    const _Set2 = Set;
    set1 = new Set();
    const currentlySelectedChannelId = store3.getCurrentlySelectedChannelId(searchContext.guildId);
    const recentlyTalked = set1(tmp2[18]).getRecentlyTalked(currentlySelectedChannelId, maxResults);
    const item2 = recentlyTalked.forEach((record) => {
      record = record.record;
      let hasItem = null == record;
      if (!hasItem) {
        hasItem = set1.has(record.id);
      }
      if (!hasItem) {
        hasItem = closure_1_8.isBlockedOrIgnored(record.id);
      }
      if (!hasItem) {
        obj = { user: null, text: null };
        obj[0] = record;
        obj[1] = set1(currentUser1[14]).getUserTag(record);
        items2.push(obj);
        set1.add(record.id);
        const obj2 = set1(currentUser1[14]);
      }
    });
    recentMessageAuthorIds = recentMessageAuthorIds.getRecentMessageAuthorIds(searchContext.guildId);
    const item3 = recentMessageAuthorIds.forEach((arg0) => {
      const user = closure_1_11.getUser(arg0);
      let hasItem = null == user;
      if (!hasItem) {
        hasItem = set1.has(user.id);
      }
      if (!hasItem) {
        hasItem = closure_1_8.isBlockedOrIgnored(user.id);
      }
      if (!hasItem) {
        obj = { user: null, text: null };
        obj[0] = user;
        obj[1] = set1(currentUser1[14]).getUserTag(user);
        items2.push(obj);
        set1.add(user.id);
        const obj2 = set1(currentUser1[14]);
      }
    });
    return items2.slice(0, maxResults);
  } else {
    const obj3 = {};
    const merged3 = Object.assign(obj);
    obj3.guildId = searchContext.guildId;
    queryChannelUsersResult = set1(tmp2[18]).queryGuildUsers(obj3);
    const obj13 = set1(tmp2[18]);
  }
}
function getChannelAutocompletions(arg0) {
  ({ query, searchContext, maxResults } = arg0);
  const str = query.trim();
  if (str.startsWith("\"")) {
    if (str.endsWith("\"")) {
      let substr = str.substring(1, str.length - 1);
      let str2 = substr.replaceAll(/\\(.)/g, (arg0, arg1) => arg1);
    }
    let substr1 = str2;
    if ("#" === str2[0]) {
      substr1 = str2.substring(1);
    }
    let obj2 = _SearchTokenTypes;
    if (obj2.isGuildLikeSearchContext(searchContext)) {
      const guildId = searchContext.guildId;
      _require = undefined;
      importDefault = undefined;
      obj = { query: null, type: null, guildId: null, limit: Infinity, allowEmptyQueries: true, allowSnowflake: true, includeAllThreads: true, boosters: null };
      obj[0] = substr1;
      obj[1] = closure_5;
      obj[2] = guildId;
      let tmpResult = tmp(6714);
      obj[7] = tmpResult.getBoosterMap(tmp(7593).AutocompleterResultTypes.TEXT_CHANNEL);
      const obj12 = NOOPDefault;
      const tmp7 = importDefault;
      const queryChannelsResult = NOOPDefault.queryChannels(obj);
      obj = { query: null, type: null, guildId: null, limit: Infinity, allowEmptyQueries: true, allowSnowflake: true, boosters: null };
      obj[0] = substr1;
      obj[1] = closure_6;
      obj[2] = guildId;
      tmpResult = tmp(6714);
      obj[6] = tmpResult.getBoosterMap(tmp(7593).AutocompleterResultTypes.VOICE_CHANNEL);
      const combined = queryChannelsResult.concat(NOOPDefault.queryChannels(obj));
      const mapped = combined.map((record) => record.record);
      if (0 === substr1.length) {
        _require = store3.getChannelId(guildId);
        const found = mapped.find((id) => id.id === closure_0);
        if (null != found) {
          mapped.splice(mapped.indexOf(found), 1);
          mapped.unshift(found);
        }
      }
      importDefault = store2.getTextChannelNameDisambiguations(guildId);
      const obj16 = NOOPDefault;
      const obj19 = tmp7(12)(mapped);
      const takeResult = tmp7(12)(mapped).take(maxResults);
      substr = tmp7(12)(mapped).take(maxResults).map((channel) => {
        let name;
        if (table[channel.id] != null) {
          name = tmp.name;
        }
        if (name == null) {
          obj = callback(closure_1_2[13]);
          name = obj.computeChannelName(channel, closure_1_11, closure_1_8);
        }
        obj = { text: "" + name, channel, key: channel.id };
        return obj;
      }).value();
      const iter2 = tmp7(12)(mapped).take(maxResults).map((channel) => {
        let name;
        if (table[channel.id] != null) {
          name = tmp.name;
        }
        if (name == null) {
          obj = callback(closure_1_2[13]);
          name = obj.computeChannelName(channel, closure_1_11, closure_1_8);
        }
        obj = { text: "" + name, channel, key: channel.id };
        return obj;
      });
    } else {
      if (searchContext.type === constants.DMS) {
        if (!closure_10.hidePersonalInformation) {
          obj1 = { query: null, limit: null, fuzzy: true, boosters: null };
          obj1[0] = substr1;
          obj1[1] = maxResults;
          const obj4 = NOOPDefault;
          obj1[3] = tmp(6714).getBoosterMap(tmp(7593).AutocompleterResultTypes.GROUP_DM);
          const tmpResult1 = tmp(6714);
          const queryGroupDMsResult = obj4.queryGroupDMs(obj1);
          obj2 = { query: null, limit: null, boosters: null };
          obj2[0] = substr1;
          obj2[1] = maxResults;
          const obj8 = NOOPDefault;
          obj2[2] = tmp(6714).getBoosterMap(tmp(7593).AutocompleterResultTypes.USER);
          const tmpResult2 = tmp(6714);
          const queryDMChannelsResult = obj8.queryDMChannels(obj2);
          const tmp6 = applyDefault;
          const sorted = applyDefault(queryGroupDMsResult.concat(queryDMChannelsResult)).sort(tmp(7593).sortByMatchScore);
          const mapped1 = sorted.map((record) => {
            record = record.record;
            obj = { text: record.comparator, channel: record, key: null };
            let id;
            if (record != null) {
              id = record.id;
            }
            obj[2] = id;
            return obj;
          });
          const tmp6Result = applyDefault(queryGroupDMsResult.concat(queryDMChannelsResult));
          const iter = mapped1.filter((text) => null != text.text && null != text.channel && null != text.key);
          substr = mapped1.filter((text) => null != text.text && null != text.channel && null != text.key).value().slice(0, maxResults);
          const valueResult = mapped1.filter((text) => null != text.text && null != text.channel && null != text.key).value();
        }
      }
      substr = [];
    }
    return substr;
  }
  str2 = str;
  if (str.startsWith("\"")) {
    const substr2 = str.substring(1);
    str2 = substr2.replaceAll(/\\(.)/g, (arg0, arg1) => arg1);
  }
}
function makeSearchTokenConfigs(arg0) {
  const _require = arg0;
  const intl = _require(items1[12]).intl;
  let items = [intl.string(_require(items1[12]).t.tPZo4p), , ];
  const intl2 = _require(items1[12]).intl;
  items[1] = intl2.string(_require(items1[12]).t.JL7sRS);
  const intl3 = _require(items1[12]).intl;
  items[2] = intl3.string(_require(items1[12]).t.WjkIKU);
  const intl4 = _require(items1[12]).intl;
  items1 = [, , , , , , , , ];
  items1[0] = intl4.string(_require(items1[12]).t.TNLcpx);
  const intl5 = _require(items1[12]).intl;
  items1[1] = intl5.string(_require(items1[12]).t.XM9XGP);
  const intl6 = _require(items1[12]).intl;
  items1[2] = intl6.string(_require(items1[12]).t.ZNR2fi);
  const intl7 = _require(items1[12]).intl;
  items1[3] = intl7.string(_require(items1[12]).t["AV/v6i"]);
  const intl8 = _require(items1[12]).intl;
  items1[4] = intl8.string(_require(items1[12]).t["20uQR3"]);
  const intl9 = _require(items1[12]).intl;
  items1[5] = intl9.string(_require(items1[12]).t.F8Wf0e);
  const intl10 = _require(items1[12]).intl;
  items1[6] = intl10.string(_require(items1[12]).t.L4lxyE);
  const intl11 = _require(items1[12]).intl;
  items1[7] = intl11.string(_require(items1[12]).t.PJgX2h);
  const intl12 = _require(items1[12]).intl;
  items1[8] = intl12.string(_require(items1[12]).t.nrpA5E);
  obj = {};
  obj = { regex: null, componentType: null, key: null, plainText: null, validator: null, getAutocompletions: null };
  const intl13 = _require(items1[12]).intl;
  regExp = new RegExp("" + intl13.string(_require(items1[12]).t["1TUdFo"]) + ":", "i");
  obj[0] = regExp;
  obj[1] = obj.FILTER;
  const intl14 = _require(items1[12]).intl;
  obj[2] = "" + intl14.string(_require(items1[12]).t["1TUdFo"]) + ":";
  const intl15 = _require(items1[12]).intl;
  obj[3] = intl15.string(_require(items1[12]).t["1TUdFo"]);
  obj[4] = function validator() {
    return callback(items1[20]).isFromUserFilterSupported();
  };
  obj[5] = getUserAutocompletions;
  obj[SearchTokenTypes.FILTER_FROM] = obj;
  obj = { follows: items2, regex: closure_33, validator: isValidUserAutocomplete, mutable: true, componentType: obj.ANSWER, queryKey: "author_id" };
  items2 = [SearchTokenTypes.FILTER_FROM];
  obj[SearchTokenTypes.ANSWER_USERNAME_FROM] = obj;
  obj1 = { regex: null, componentType: null, key: null, plainText: null, validator: null, getAutocompletions: null };
  const intl16 = _require(items1[12]).intl;
  regExp1 = new RegExp("" + intl16.string(_require(items1[12]).t["i96lO+"]) + ":", "i");
  obj1[0] = regExp1;
  obj1[1] = obj.FILTER;
  const intl17 = _require(items1[12]).intl;
  obj1[2] = "" + intl17.string(_require(items1[12]).t["i96lO+"]) + ":";
  const intl18 = _require(items1[12]).intl;
  obj1[3] = intl18.string(_require(items1[12]).t["i96lO+"]);
  obj1[4] = function validator() {
    return callback(items1[20]).isMentionsUserFilterSupported();
  };
  obj1[5] = getUserAutocompletions;
  obj[SearchTokenTypes.FILTER_MENTIONS] = obj1;
  const items3 = [SearchTokenTypes.FILTER_MENTIONS];
  obj[SearchTokenTypes.ANSWER_USERNAME_MENTIONS] = { follows: items3, regex: closure_33, validator: isValidUserAutocomplete, mutable: true, componentType: obj.ANSWER, queryKey: "mentions" };
  const obj3 = { regex: null, componentType: null, key: null, plainText: null, getAutocompletions: null };
  const intl19 = _require(items1[12]).intl;
  const regExp2 = new RegExp("" + intl19.string(_require(items1[12]).t.CqCvir) + ":", "i");
  obj3[0] = regExp2;
  obj3[1] = obj.FILTER;
  const intl20 = _require(items1[12]).intl;
  obj3[2] = "" + intl20.string(_require(items1[12]).t.CqCvir) + ":";
  const intl21 = _require(items1[12]).intl;
  obj3[3] = intl21.string(_require(items1[12]).t.CqCvir);
  obj3[4] = function getAutocompletions(query) {
    query = query.query;
    closure_0 = undefined;
    closure_0 = query.toLocaleLowerCase();
    const found = items(items1[11])(items1).filter((toLocaleLowerCase) => closure_1_1(closure_1_2[17])(closure_0, toLocaleLowerCase.toLocaleLowerCase()));
    const arr = items(items1[11])(items1);
    const takeResult = found.take(query.maxResults);
    return found.take(query.maxResults).map((text) => ({ text })).value();
  };
  obj[SearchTokenTypes.FILTER_HAS] = obj3;
  const obj4 = { regex: null, follows: null, validator: null, componentType: null, queryKey: "has" };
  let obj7 = _require(items1[16]);
  obj4[0] = obj7.makeRegexForOptionsWithNegation(items1);
  const items4 = [SearchTokenTypes.FILTER_HAS];
  obj4[1] = items4;
  obj4[2] = isValidHasAutocomplete;
  obj4[3] = obj.ANSWER;
  obj[SearchTokenTypes.ANSWER_HAS] = obj4;
  const obj5 = { regex: null, key: null, plainText: null, componentType: null };
  const intl22 = _require(items1[12]).intl;
  const regExp3 = new RegExp("" + intl22.string(_require(items1[12]).t.RpRAZD) + ":", "i");
  obj5[0] = regExp3;
  const intl23 = _require(items1[12]).intl;
  obj5[1] = "" + intl23.string(_require(items1[12]).t.RpRAZD) + ":";
  const intl24 = _require(items1[12]).intl;
  obj5[2] = intl24.string(_require(items1[12]).t.RpRAZD);
  obj5[3] = obj.FILTER;
  obj[SearchTokenTypes.FILTER_LINK_FROM] = obj5;
  const items5 = [SearchTokenTypes.FILTER_LINK_FROM];
  obj[SearchTokenTypes.ANSWER_LINK_FROM] = { regex: _require(items1[16]).GENERIC_REGEX, follows: items5, mutable: true, componentType: obj.ANSWER, queryKey: "link_hostname" };
  obj7 = { regex: null, key: null, plainText: null, componentType: null };
  const intl25 = _require(items1[12]).intl;
  const regExp4 = new RegExp("" + intl25.string(_require(items1[12]).t.TMNjFm) + ":", "i");
  obj7[0] = regExp4;
  const intl26 = _require(items1[12]).intl;
  obj7[1] = "" + intl26.string(_require(items1[12]).t.TMNjFm) + ":";
  const intl27 = _require(items1[12]).intl;
  obj7[2] = intl27.string(_require(items1[12]).t.TMNjFm);
  obj7[3] = obj.FILTER;
  obj[SearchTokenTypes.FILTER_FILE_TYPE] = obj7;
  const obj2 = { follows: items3, regex: closure_33, validator: isValidUserAutocomplete, mutable: true, componentType: obj.ANSWER, queryKey: "mentions" };
  const obj6 = { regex: _require(items1[16]).GENERIC_REGEX, follows: items5, mutable: true, componentType: obj.ANSWER, queryKey: "link_hostname" };
  const items6 = [SearchTokenTypes.FILTER_FILE_TYPE];
  obj[SearchTokenTypes.ANSWER_FILE_TYPE] = { regex: _require(items1[16]).GENERIC_REGEX, follows: items6, mutable: true, componentType: obj.ANSWER, queryKey: "attachment_extension" };
  const obj9 = { regex: null, key: null, plainText: null, componentType: null };
  const intl28 = _require(items1[12]).intl;
  const regExp5 = new RegExp("" + intl28.string(_require(items1[12]).t["5xtLRC"]) + ":", "i");
  obj9[0] = regExp5;
  const intl29 = _require(items1[12]).intl;
  obj9[1] = "" + intl29.string(_require(items1[12]).t["5xtLRC"]) + ":";
  const intl30 = _require(items1[12]).intl;
  obj9[2] = intl30.string(_require(items1[12]).t["5xtLRC"]);
  obj9[3] = obj.FILTER;
  obj[SearchTokenTypes.FILTER_FILE_NAME] = obj9;
  const obj8 = { regex: _require(items1[16]).GENERIC_REGEX, follows: items6, mutable: true, componentType: obj.ANSWER, queryKey: "attachment_extension" };
  const items7 = [SearchTokenTypes.FILTER_FILE_NAME];
  obj[SearchTokenTypes.ANSWER_FILE_NAME] = { regex: _require(items1[16]).GENERIC_REGEX, follows: items7, mutable: true, componentType: obj.ANSWER, queryKey: "attachment_filename" };
  const obj11 = { regex: null, componentType: null, key: null, plainText: null, getAutocompletions: null };
  const intl31 = _require(items1[12]).intl;
  const regExp6 = new RegExp("" + intl31.string(_require(items1[12]).t["qZ+7BA"]) + ":", "i");
  obj11[0] = regExp6;
  obj11[1] = obj.FILTER;
  const intl32 = _require(items1[12]).intl;
  obj11[2] = "" + intl32.string(_require(items1[12]).t["qZ+7BA"]) + ":";
  const intl33 = _require(items1[12]).intl;
  obj11[3] = intl33.string(_require(items1[12]).t["qZ+7BA"]);
  obj11[4] = function getAutocompletions(query) {
    query = query.query;
    let FILTER_BEFORE = constants.FILTER_BEFORE;
    FILTER_BEFORE = undefined;
    FILTER_BEFORE = query.toLocaleLowerCase();
    const tmp = callback3();
    const found = items(items1[11])(callback3()).filter((toLocaleLowerCase) => closure_1_1(closure_1_2[17])(closure_0, toLocaleLowerCase.toLocaleLowerCase()));
    const arr = items(items1[11])(callback3());
    const takeResult = found.take(query.maxResults);
    const iter = found.take(query.maxResults).map((text) => ({ text }));
    return found.take(query.maxResults).map((text) => ({ text })).value().map((text) => {
      obj = {};
      const merged = Object.assign(text);
      obj.group = closure_0;
      obj.key = "" + closure_0 + "-" + text.text;
      return obj;
    });
  };
  obj[SearchTokenTypes.FILTER_BEFORE] = obj11;
  const obj12 = { regex: null, componentType: null, key: null, plainText: null, getAutocompletions: null };
  const intl34 = _require(items1[12]).intl;
  const obj10 = { regex: _require(items1[16]).GENERIC_REGEX, follows: items7, mutable: true, componentType: obj.ANSWER, queryKey: "attachment_filename" };
  const intl35 = _require(items1[12]).intl;
  const regExp7 = new RegExp("" + "(" + intl34.string(_require(items1[12]).t.tIxkOo) + "|" + intl35.string(_require(items1[12]).t.h2NzSd) + ")" + ":", "i");
  obj12[0] = regExp7;
  obj12[1] = obj.FILTER;
  const intl36 = _require(items1[12]).intl;
  obj12[2] = "" + intl36.string(_require(items1[12]).t.h2NzSd) + ":";
  const intl37 = _require(items1[12]).intl;
  obj12[3] = intl37.string(_require(items1[12]).t.h2NzSd);
  obj12[4] = function getAutocompletions(query) {
    query = query.query;
    let FILTER_ON = constants.FILTER_ON;
    FILTER_ON = undefined;
    FILTER_ON = query.toLocaleLowerCase();
    const tmp = callback3();
    const found = items(items1[11])(callback3()).filter((toLocaleLowerCase) => closure_1_1(closure_1_2[17])(closure_0, toLocaleLowerCase.toLocaleLowerCase()));
    const arr = items(items1[11])(callback3());
    const takeResult = found.take(query.maxResults);
    const iter = found.take(query.maxResults).map((text) => ({ text }));
    return found.take(query.maxResults).map((text) => ({ text })).value().map((text) => {
      obj = {};
      const merged = Object.assign(text);
      obj.group = closure_0;
      obj.key = "" + closure_0 + "-" + text.text;
      return obj;
    });
  };
  obj[SearchTokenTypes.FILTER_ON] = obj12;
  const obj13 = { regex: null, componentType: null, key: null, plainText: null, getAutocompletions: null };
  const intl38 = _require(items1[12]).intl;
  const regExp8 = new RegExp("" + intl38.string(_require(items1[12]).t.KSDx7M) + ":", "i");
  obj13[0] = regExp8;
  obj13[1] = obj.FILTER;
  const intl39 = _require(items1[12]).intl;
  obj13[2] = "" + intl39.string(_require(items1[12]).t.KSDx7M) + ":";
  const intl40 = _require(items1[12]).intl;
  obj13[3] = intl40.string(_require(items1[12]).t.KSDx7M);
  obj13[4] = function getAutocompletions(query) {
    query = query.query;
    let FILTER_AFTER = constants.FILTER_AFTER;
    FILTER_AFTER = undefined;
    FILTER_AFTER = query.toLocaleLowerCase();
    const tmp = callback3();
    const found = items(items1[11])(callback3()).filter((toLocaleLowerCase) => closure_1_1(closure_1_2[17])(closure_0, toLocaleLowerCase.toLocaleLowerCase()));
    const arr = items(items1[11])(callback3());
    const takeResult = found.take(query.maxResults);
    const iter = found.take(query.maxResults).map((text) => ({ text }));
    return found.take(query.maxResults).map((text) => ({ text })).value().map((text) => {
      obj = {};
      const merged = Object.assign(text);
      obj.group = closure_0;
      obj.key = "" + closure_0 + "-" + text.text;
      return obj;
    });
  };
  obj[SearchTokenTypes.FILTER_AFTER] = obj13;
  const items8 = [SearchTokenTypes.FILTER_BEFORE];
  obj[SearchTokenTypes.ANSWER_BEFORE] = {
    regex: regExp,
    follows: items8,
    componentType: obj.ANSWER,
    mutable: true,
    validator(arg0) {
      return callback2(arg0, "before");
    }
  };
  const items9 = [SearchTokenTypes.FILTER_ON];
  obj[SearchTokenTypes.ANSWER_ON] = {
    regex: regExp,
    follows: items9,
    componentType: obj.ANSWER,
    mutable: true,
    validator(arg0) {
      return callback2(arg0, "on");
    }
  };
  const items10 = [SearchTokenTypes.FILTER_AFTER];
  obj[SearchTokenTypes.ANSWER_AFTER] = {
    regex: regExp,
    follows: items10,
    componentType: obj.ANSWER,
    mutable: true,
    validator(arg0) {
      return callback2(arg0, "after");
    }
  };
  const obj17 = { regex: null, componentType: null, key: null, plainText: null, validator: null, getAutocompletions: null };
  const intl41 = _require(items1[12]).intl;
  const regExp9 = new RegExp("" + intl41.string(_require(items1[12]).t.WNpFHa) + ":", "i");
  obj17[0] = regExp9;
  obj17[1] = obj.FILTER;
  const intl42 = _require(items1[12]).intl;
  obj17[2] = "" + intl42.string(_require(items1[12]).t.WNpFHa) + ":";
  const intl43 = _require(items1[12]).intl;
  obj17[3] = intl43.string(_require(items1[12]).t.WNpFHa);
  obj17[4] = function validator() {
    let selectedSearchContext = callback;
    if (callback == null) {
      selectedSearchContext = closure_1_12.getSelectedSearchContext();
    }
    let result = null != selectedSearchContext;
    if (result) {
      result = callback(items1[20]).isInChannelFilterSupported(selectedSearchContext);
      obj = callback(items1[20]);
    }
    return result;
  };
  obj17[5] = getChannelAutocompletions;
  obj[SearchTokenTypes.FILTER_IN] = obj17;
  const obj14 = {
    regex: regExp,
    follows: items8,
    componentType: obj.ANSWER,
    mutable: true,
    validator(arg0) {
      return callback2(arg0, "before");
    }
  };
  const obj15 = {
    regex: regExp,
    follows: items9,
    componentType: obj.ANSWER,
    mutable: true,
    validator(arg0) {
      return callback2(arg0, "on");
    }
  };
  const obj16 = {
    regex: regExp,
    follows: items10,
    componentType: obj.ANSWER,
    mutable: true,
    validator(arg0) {
      return callback2(arg0, "after");
    }
  };
  const stringResult = intl34.string(_require(items1[12]).t.tIxkOo);
  const items11 = [SearchTokenTypes.FILTER_IN];
  obj[SearchTokenTypes.ANSWER_IN] = {
    regex: _require(items1[16]).ANSWER_IN_REGEX,
    mutable: true,
    follows: items11,
    componentType: obj.ANSWER,
    validator(arg0) {
      let selectedSearchContext = closure_0;
      if (closure_0 == null) {
        selectedSearchContext = closure_1_12.getSelectedSearchContext();
      }
      let tmp3 = null != selectedSearchContext;
      if (tmp3) {
        tmp3 = closure_1_25(arg0, selectedSearchContext);
      }
      return tmp3;
    },
    queryKey: "channel_id"
  };
  const obj19 = { regex: null, componentType: null, key: null, plainText: null, getAutocompletions: null };
  const intl44 = _require(items1[12]).intl;
  const regExp10 = new RegExp("" + intl44.string(_require(items1[12]).t["0B74eY"]) + ":", "i");
  obj19[0] = regExp10;
  obj19[1] = obj.FILTER;
  const intl45 = _require(items1[12]).intl;
  obj19[2] = "" + intl45.string(_require(items1[12]).t["0B74eY"]) + ":";
  const intl46 = _require(items1[12]).intl;
  obj19[3] = intl46.string(_require(items1[12]).t["0B74eY"]);
  obj19[4] = function getAutocompletions() {
    items = [{ text: "true" }, { text: "false" }];
    return items;
  };
  obj[SearchTokenTypes.FILTER_PINNED] = obj19;
  const items12 = [SearchTokenTypes.FILTER_PINNED];
  obj[SearchTokenTypes.ANSWER_PINNED] = { regex: regExp1, componentType: obj.ANSWER, follows: items12, queryKey: "pinned", validator: isValidPinnedAutocomplete };
  const obj21 = { regex: null, componentType: null, key: null, plainText: null, getAutocompletions: null };
  const intl47 = _require(items1[12]).intl;
  const regExp11 = new RegExp("" + intl47.string(_require(items1[12]).t.us8IQi) + ":", "i");
  obj21[0] = regExp11;
  obj21[1] = obj.FILTER;
  const intl48 = _require(items1[12]).intl;
  obj21[2] = "" + intl48.string(_require(items1[12]).t.us8IQi) + ":";
  const intl49 = _require(items1[12]).intl;
  obj21[3] = intl49.string(_require(items1[12]).t.us8IQi);
  obj21[4] = function getAutocompletions(query) {
    query = query.query;
    closure_0 = undefined;
    closure_0 = query.toLocaleLowerCase();
    const found = items(items1[11])(items).filter((toLocaleLowerCase) => closure_1_1(closure_1_2[17])(closure_0, toLocaleLowerCase.toLocaleLowerCase()));
    const arr = items(items1[11])(items);
    const takeResult = found.take(query.maxResults);
    return found.take(query.maxResults).map((text) => ({ text })).value();
  };
  obj[SearchTokenTypes.FILTER_AUTHOR_TYPE] = obj21;
  const obj22 = { regex: null, follows: null, validator: null, componentType: null, queryKey: "author_type" };
  const obj18 = {
    regex: _require(items1[16]).ANSWER_IN_REGEX,
    mutable: true,
    follows: items11,
    componentType: obj.ANSWER,
    validator(arg0) {
      let selectedSearchContext = closure_0;
      if (closure_0 == null) {
        selectedSearchContext = closure_1_12.getSelectedSearchContext();
      }
      let tmp3 = null != selectedSearchContext;
      if (tmp3) {
        tmp3 = closure_1_25(arg0, selectedSearchContext);
      }
      return tmp3;
    },
    queryKey: "channel_id"
  };
  const obj20 = { regex: regExp1, componentType: obj.ANSWER, follows: items12, queryKey: "pinned", validator: isValidPinnedAutocomplete };
  obj22[0] = _require(items1[16]).makeRegexForOptionsWithNegation(items);
  const items13 = [SearchTokenTypes.FILTER_AUTHOR_TYPE];
  obj22[1] = items13;
  obj22[2] = isValidAuthorTypeAutocomplete;
  obj22[3] = obj.ANSWER;
  obj[SearchTokenTypes.ANSWER_AUTHOR_TYPE] = obj22;
  return obj;
}
({ GUILD_SELECTABLE_CHANNELS_KEY: c5, GUILD_VOCAL_CHANNELS_KEY: closure_6 } = comparator);
({ ME: closure_14, SearchTokenTypes } = ME);
({ SEARCH_DATE_FORMAT: closure_16, SearchTypes: closure_17, IS_SEARCH_FILTER_TOKEN: closure_18, ID_REGEX: closure_19 } = ME);
let regExp = new RegExp("(?:\\s*(([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})|([0-9]{4})-([0-9]{1,2})|\\d{4}|([^\\d\\s]+)))", "i");
let regExp1 = new RegExp("\\s*(true|false)", "i");
const re33 = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
let obj = { FILTER: "FILTER", ANSWER: "ANSWER" };
obj = {};
let closure_37 = { [SearchTokenTypes.FILTER_HAS]: SearchTokenTypes.ANSWER_HAS, [SearchTokenTypes.FILTER_AUTHOR_TYPE]: SearchTokenTypes.ANSWER_AUTHOR_TYPE, [SearchTokenTypes.FILTER_PINNED]: SearchTokenTypes.ANSWER_PINNED };
let result = require("set").fileFinishedImporting("modules/search/tokens/SearchTokens.tsx");

export default obj;
export { isValidUserAutocomplete };
export { isValidChannelAutocomplete };
export const getLocalizedHasAnswer = function getLocalizedHasAnswer(str) {
  let substr;
  const startsWithResult = str.startsWith("-");
  substr = str;
  if (startsWithResult) {
    substr = str.slice(1);
  }
  const entries = Object.entries(getHasMap());
  const found = entries.find((arg0) => {
    [, tmp] = arg0;
    return tmp === substr;
  });
  let first;
  if (found != null) {
    first = found[0];
  }
  if (first == null) {
    first = substr;
  }
  let combined = first;
  if (startsWithResult) {
    const _HermesInternal = HermesInternal;
    combined = "-" + first;
  }
  return combined;
};
export const getLocalizedAuthorTypeAnswer = function getLocalizedAuthorTypeAnswer(str) {
  obj = {};
  const intl = substr(1236).intl;
  obj[intl.string(substr(1236).t.tPZo4p)] = "user";
  const intl2 = substr(1236).intl;
  obj[intl2.string(substr(1236).t.JL7sRS)] = "bot";
  const intl3 = substr(1236).intl;
  obj[intl3.string(substr(1236).t.WjkIKU)] = "webhook";
  substr = undefined;
  const startsWithResult = str.startsWith("-");
  substr = str;
  if (startsWithResult) {
    substr = str.slice(1);
  }
  const entries = Object.entries(obj);
  const found = entries.find((arg0) => {
    [, tmp] = arg0;
    return tmp === substr;
  });
  let first;
  if (found != null) {
    first = found[0];
  }
  if (first == null) {
    first = substr;
  }
  let combined = first;
  if (startsWithResult) {
    const _HermesInternal = HermesInternal;
    combined = "-" + first;
  }
  return combined;
};
export const getRandomDateShortcut = function getRandomDateShortcut() {
  return applyDefault.sample(generateDateAutocompletions());
};
export { getUserAutocompletions };
export const ComponentTypes = obj;
export const buildCrossDMSearchTokensConfig = function buildCrossDMSearchTokensConfig() {
  return makeSearchTokenConfigs({ type: constants.DMS });
};
export const rebuildSearchTokenConfigs = function rebuildSearchTokenConfigs() {
  const merged = Object.assign(obj, makeSearchTokenConfigs());
};
export const isSearchFilterTokenType = function isSearchFilterTokenType(type) {
  return regex.test(type);
};
export const isMeAutcompleteAnswer = function isMeAutcompleteAnswer(str) {
  if (0 === str.length) {
    return false;
  } else {
    const replaced = str.toLowerCase().replace(/^@/, "");
    const intl = getSystemLocale.intl;
    str = str.toLowerCase();
    let startsWithResult = intl.string(getSystemLocale.t.Qf3ptv).startsWith(replaced);
    if (!startsWithResult) {
      const substr = closure_14.substring(1);
      startsWithResult = substr.startsWith(replaced);
    }
    return startsWithResult;
  }
};
export const isValidFilterAnswerForSubmit = function isValidFilterAnswerForSubmit(searchTokenType, trimmed) {
  if (null == table[searchTokenType]) {
    return true;
  } else {
    const _HermesInternal = HermesInternal;
    const items = ["filter:" + trimmed, trimmed];
    const token = new getMatch2.Token(items, tmp);
    if (SearchTokenTypes.ANSWER_HAS === tmp) {
      let tmp7Result = tmp7(11515);
      return tmp7Result.validateForMapWithNegation("has", getHasMap(), token);
    } else if (tmp15.ANSWER_AUTHOR_TYPE === tmp) {
      tmp7Result = tmp7(11515);
      obj = {};
      const intl = tmp7(1236).intl;
      obj[intl.string(tmp7(1236).t.tPZo4p)] = "user";
      const intl2 = tmp7(1236).intl;
      obj[intl2.string(tmp7(1236).t.JL7sRS)] = "bot";
      const intl3 = tmp7(1236).intl;
      obj[intl3.string(tmp7(1236).t.WjkIKU)] = "webhook";
      return tmp7Result.validateForMapWithNegation("author_type", obj, token);
    } else if (tmp15.ANSWER_PINNED === tmp) {
      const match = token.getMatch(1);
      if ("true" === match) {
        token.setData("pinned", true);
        let flag2 = true;
      } else {
        flag2 = "false" === match;
        if (flag2) {
          token.setData("pinned", false);
          flag2 = true;
        }
      }
      return flag2;
    } else {
      return false;
    }
  }
};
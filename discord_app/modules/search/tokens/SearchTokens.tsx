// === Module 11969: SearchTokens ===

// Module 11969 (SearchTokens)
import _modDef12 from "module_12" /* 12 */;
import intl50 from "intl" /* 1126 */;
import _modDef4461 from "module_4461" /* 4461 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import useChannelName from "useChannelName" /* 5043 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5621 */;
import SearchTokensUtils from "SearchTokensUtils" /* 11973 */;
import SearchTokenStreamerModeUtils from "SearchTokenStreamerModeUtils" /* 11974 */;
import QueryTokenizer from "QueryTokenizer" /* 11975 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4507 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import StreamerModeStore from "StreamerModeStore" /* 4723 */;
import UserStore from "UserStore" /* 1377 */;
import SearchAutocompleteStore from "SearchAutocompleteStore" /* 11970 */;
import SearchRecentMessageStore from "SearchRecentMessageStore" /* 11972 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channel, importDefault, record, set, set2;

let SearchTokenTypes;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let hasOwnProperty;
let metroRequire;
const f109943 = (item) => item.toLowerCase();
const f109944 = (item) => item.toLowerCase();
const f109945 = (item) => item.toString();
function getShortcuts() {
  let obj = {};
  const intl = intl50.intl;
  obj[intl.string(intl50.t.HYiVEQ)] = () => {
    const obj = _modDef4461();
    const startOfResult = obj.startOf("day");
    const addResult = startOfResult.add(0, "day");
    const items = [addResult, ];
    const cloneResult = addResult.clone();
    items[1] = cloneResult.add(1, "day");
    return items;
  };
  const intl2 = intl50.intl;
  obj[intl2.string(intl50.t.cu86KC)] = () => {
    const obj = _modDef4461();
    const startOfResult = obj.startOf("day");
    const addResult = startOfResult.add(-1, "day");
    const items = [addResult, ];
    const cloneResult = addResult.clone();
    items[1] = cloneResult.add(1, "day");
    return items;
  };
  const intl3 = intl50.intl;
  obj[intl3.string(intl50.t["FvBj/6"])] = () => {
    const obj = _modDef4461();
    const startOfResult = obj.startOf("week");
    const addResult = startOfResult.add(0, "week");
    const items = [addResult, ];
    const cloneResult = addResult.clone();
    items[1] = cloneResult.add(1, "week");
    return items;
  };
  const intl4 = intl50.intl;
  obj[intl4.string(intl50.t["20uWCw"])] = () => {
    const obj = _modDef4461();
    const startOfResult = obj.startOf("month");
    const addResult = startOfResult.add(0, "month");
    const items = [addResult, ];
    const cloneResult = addResult.clone();
    items[1] = cloneResult.add(1, "month");
    return items;
  };
  const intl5 = intl50.intl;
  obj[intl5.string(intl50.t["dXC/hn"])] = () => {
    const obj = _modDef4461();
    const startOfResult = obj.startOf("year");
    const addResult = startOfResult.add(0, "year");
    const items = [addResult, ];
    const cloneResult = addResult.clone();
    items[1] = cloneResult.add(1, "year");
    return items;
  };
  return obj;
}
function isValidUserAutocomplete(token) {
  const match = token.getMatch(1);
  let tmp2 = match;
  if (!regex2.test(match)) {
    let tmp7;
    if (match === authStore2) {
      const currentUser = UserStore.getCurrentUser();
      let tmp16 = null;
      if (null != currentUser) {
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        tmp16 = id;
      }
      tmp7 = tmp16;
    } else if (null != token.getMatch(4)) {
      const findByTagResult = UserStore.findByTag(token.getMatch(4));
      let tmp11 = null;
      if (null != findByTagResult) {
        let id1;
        if (findByTagResult != null) {
          id1 = findByTagResult.id;
        }
        tmp11 = id1;
      }
      tmp7 = tmp11;
    } else {
      const findByTag = UserStore.findByTag;
      const match1 = token.getMatch(2);
      const findByTagResult1 = findByTag(match1, token.getMatch(3));
      tmp7 = null;
      if (null != findByTagResult1) {
        let id2;
        if (findByTagResult1 != null) {
          id2 = findByTagResult1.id;
        }
        tmp7 = id2;
      }
    }
    tmp2 = tmp7;
  }
  let flag = null != tmp2;
  if (flag) {
    token.setData("userId", tmp2);
    flag = true;
  }
  return flag;
}
function dateValidator(getFullMatch, after) {
  let obj10;
  let obj9;
  const str = getFullMatch.getFullMatch();
  const str2 = str.trim();
  const formatted = str2.toLowerCase();
  const tmp2 = getShortcuts()[formatted];
  if (null != tmp2) {
    [obj9, obj10] = tmp2();
    _slicedToArray(tmp2(), 2);
  } else {
    const _Set3 = Set;
    const self7 = this;
    const self8 = this;
    const obj20 = _modDef4461;
    const monthsResult = obj20.months();
    set = new Set(monthsResult.map(f109943));
    if (set.has(formatted)) {
      const obj17 = _modDef4461(formatted, "MMMM");
      const localResult = obj17.local();
      const items = [localResult, ];
      const cloneResult = localResult.clone();
      items[1] = cloneResult.add(1, "month");
      [obj9, obj10] = items;
      _slicedToArray(items, 2);
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      const tmp26Result = _modDef4461;
      const weekdaysResult = tmp26Result.weekdays();
      const set1 = new Set(weekdaysResult.map(f109944));
      if (set1.has(formatted)) {
        const obj14 = _modDef4461(formatted, "dddd");
        const localResult1 = obj14.local();
        const items1 = [localResult1, ];
        const cloneResult1 = localResult1.clone();
        items1[1] = cloneResult1.add(1, "day");
        [obj9, obj10] = items1;
        _slicedToArray(items1, 2);
      } else {
        const _Date = Date;
        const self3 = this;
        const self4 = this;
        const _Set2 = Set;
        const date = new Date();
        const fullYear = date.getFullYear();
        const self5 = this;
        const self6 = this;
        const tmp26Result2 = _modDef12;
        const rangeResult = tmp26Result2.range(2015, fullYear + 1);
        set2 = new Set(rangeResult.map(f109945));
        if (set2.has(formatted)) {
          const obj11 = _modDef4461(formatted, "YYYY");
          const localResult2 = obj11.local();
          const items2 = [localResult2, ];
          const cloneResult2 = localResult2.clone();
          items2[1] = cloneResult2.add(1, "year");
          [obj9, obj10] = items2;
          _slicedToArray(items2, 2);
        } else {
          const obj6 = _modDef4461(formatted, authStore3);
          const localResult3 = obj6.local();
          const items3 = [localResult3, ];
          const cloneResult3 = localResult3.clone();
          items3[1] = cloneResult3.add(1, "day");
          [obj9, obj10] = items3;
          _slicedToArray(items3, 2);
        }
      }
    }
  }
  const isValidResult = obj9.isValid();
  let tmp19 = !isValidResult;
  if (isValidResult) {
    tmp19 = !obj10.isValid();
  }
  let flag = !tmp19;
  if (flag) {
    let tmp21 = obj9;
    let tmp22 = null;
    if ("before" !== after) {
      tmp21 = obj10;
      tmp22 = obj9;
      if ("after" === after) {
        tmp21 = null;
        tmp22 = obj10;
      }
    }
    getFullMatch.setData("start", tmp22);
    getFullMatch.setData("end", tmp21);
    flag = true;
  }
  return flag;
}
function isValidChannelAutocomplete(token, items) {
  let flag;
  const str = token.getMatch(1);
  if (regex2.test(str)) {
    items = [str];
    token.setData("channelIds", items);
    flag = true;
  } else {
    let replaced = str;
    const tmp = str.startsWith("\"") && str.endsWith("\"");
    if (tmp) {
      const substr = str.substring(1, str.length - 1);
      replaced = substr.replaceAll(/\\(.)/g, (arg0, arg1) => arg1);
    }
    obj2 = replaced(11971);
    if (obj2.isGuildLikeSearchContext(items)) {
      let allThreadsForGuild;
      const guildId = items.guildId;
      const obj3 = GuildChannelStore.getChannels(guildId)[closure_5];
      const combined = obj3.concat(GuildChannelStore.getChannels(guildId)[closure_6]);
      const textChannelNameDisambiguations = GuildChannelStore.getTextChannelNameDisambiguations(guildId);
      const obj4 = _modDef12;
      const chainResult = obj4.chain(combined);
      const mapped = chainResult.map((channel) => channel.channel);
      const concat = mapped.concat;
      if (null != guildId) {
        allThreadsForGuild = ChannelStore.getAllThreadsForGuild(guildId);
      } else {
        allThreadsForGuild = [];
      }
      const combined1 = concat(allThreadsForGuild);
      const iter = combined1.filter((item) => {
        let name;
        if (closure_1[item.id] != null) {
          name = tmp2.name;
        }
        if (name == null) {
          const obj = replaced(dependencyMap[13]);
          name = obj.computeChannelName(item, UserStore, RelationshipStore);
        }
        return replaced === name;
      });
      const valueResult = iter.value();
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
    } else {
      flag = items.type === constants.DMS && !StreamerModeStore.hidePersonalInformation;
      if (flag) {
        const _Object = Object;
        const values = Object.values(ChannelStore.getMutablePrivateChannels());
        const found = values.filter((isGroupDM) => {
          if (isGroupDM.isGroupDM()) {
            const obj = useChannelName;
            if (replaced === obj.computeChannelName(isGroupDM, UserStore, RelationshipStore)) {
              return true;
            }
          }
          if (isGroupDM.isDM()) {
            const user = UserStore.getUser(isGroupDM.getRecipientId());
            if (null == user) {
              return false;
            } else {
              obj2 = UserUtilsDefault;
              return replaced === obj2.getUserTag(user);
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
  }
  return flag;
}
function getHasMap() {
  const obj = {};
  const intl = intl50.intl;
  obj[intl.string(intl50.t.ZNR2fi)] = "link";
  const intl2 = intl50.intl;
  obj[intl2.string(intl50.t["20uQR3"])] = "embed";
  const intl3 = intl50.intl;
  obj[intl3.string(intl50.t.L4lxyE)] = "poll";
  const intl4 = intl50.intl;
  obj[intl4.string(intl50.t.nrpA5E)] = "snapshot";
  const intl5 = intl50.intl;
  obj[intl5.string(intl50.t["AV/v6i"])] = "file";
  const intl6 = intl50.intl;
  obj[intl6.string(intl50.t.XM9XGP)] = "video";
  const intl7 = intl50.intl;
  obj[intl7.string(intl50.t.TNLcpx)] = "image";
  const intl8 = intl50.intl;
  obj[intl8.string(intl50.t.F8Wf0e)] = "sound";
  const intl9 = intl50.intl;
  obj[intl9.string(intl50.t.PJgX2h)] = "sticker";
  return obj;
}
function isValidHasAutocomplete(token) {
  const obj = SearchTokensUtils;
  return obj.validateForMapWithNegation("has", getHasMap(), token);
}
function isValidAuthorTypeAutocomplete(arg0) {
  const obj = {};
  const prop = SearchTokensUtils.validateForMapWithNegation;
  SearchTokensUtils;
  const intl = intl50.intl;
  obj[intl.string(intl50.t.tPZo4p)] = "user";
  const intl2 = intl50.intl;
  obj[intl2.string(intl50.t.JL7sRS)] = "bot";
  const intl3 = intl50.intl;
  obj[intl3.string(intl50.t.WjkIKU)] = "webhook";
  return prop("author_type", obj, arg0);
}
function isValidPinnedAutocomplete(getMatch) {
  let flag;
  const match = getMatch.getMatch(1);
  if ("true" === match) {
    getMatch.setData("pinned", true);
    flag = true;
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
  const obj = _modDef4461;
  const monthsResult = obj.months();
  const items = [...from(new Set(monthsResult.map(f109943)))];
  const from2 = Array.from;
  new Set(monthsResult.map(f109943));
  obj2 = _modDef4461;
  const weekdaysResult = obj2.weekdays();
  const from3 = Array.from;
  const set1 = new Set(weekdaysResult.map(f109944));
  const arraySpreadResult = HermesBuiltin.arraySpread(items, from2(set1), tmp2);
  const date = new Date();
  const fullYear = date.getFullYear();
  const obj4 = _modDef12;
  const rangeResult = obj4.range(2015, fullYear + 1);
  set2 = new Set(rangeResult.map(f109945));
  const arraySpreadResult3 = HermesBuiltin.arraySpread(items, from3(set2), arraySpreadResult);
  HermesBuiltin.arraySpread(items, Object.keys(getShortcuts()), arraySpreadResult3);
  return items;
}
function getUserAutocompletions(tokens) {
  let maxResults;
  let query;
  let queryChannelUsersResult;
  let searchContext;
  let str2;
  ({ query, searchContext, maxResults } = tokens);
  tokens = tokens.tokens;
  let items2;
  let set1;
  let currentUser1;
  let c3;
  let obj = { query: str2, limit: maxResults, request: false, boosters: obj2.getBoosterMap(items2(currentUser1[19]).AutocompleterResultTypes.USER) };
  const str = query.trim();
  str2 = str.split("#")[0];
  let tmp2 = currentUser1;
  obj2 = items2(currentUser1[18]);
  type = searchContext.type;
  if (constants.GUILD !== type) {
    if (constants.GUILD_CHANNEL !== type) {
      if (constants.THREAD !== type) {
        if (constants.CHANNEL === type) {
          let obj3 = { channelId: searchContext.channelId };
          const queryChannelUsers = set1(tmp2[18]).queryChannelUsers;
          set1(tmp2[18]);
          const merged = Object.assign(obj);
          queryChannelUsersResult = queryChannelUsers(obj3);
        } else if (constants.DMS === type) {
          let items;
          if (tokens == null) {
            tokens = [];
          }
          if (null == tokens) {
            items = [];
          } else {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set();
            const items1 = [];
            let item = tokens.forEach((getData) => {
              const data = getData.getData("channelIds");
              if (null != data) {
                const item = data.forEach((item) => items1.push(item));
              }
            });
            items = [];
            const item1 = items1.forEach((item) => {
              channel = channel.getChannel(item);
              if (null != channel) {
                if (channel.isDM()) {
                  user = user.getUser(channel.getRecipientId());
                  let hasItem = null == user || set.has(user.id);
                  if (!hasItem) {
                    items.push(user);
                    set.add(user.id);
                  }
                } else if (channel.isGroupDM()) {
                  const recipients = channel.recipients;
                  item = recipients.forEach((item) => {
                    user = user.getUser(item);
                    const hasItem = null == user || set.has(user.id);
                    if (!hasItem) {
                      items.push(user);
                      set.add(user.id);
                    }
                  });
                }
              }
            });
          }
          if (items.length > 0) {
            const currentUser = UserStore.getCurrentUser();
            if (null != currentUser) {
              const arr = items.push(currentUser);
            }
            const obj4 = { users: items };
            const queryUsers = set1(tmp2[18]).queryUsers;
            set1(tmp2[18]);
            const merged1 = Object.assign(obj);
            queryChannelUsersResult = queryUsers(obj4);
          } else {
            const obj5 = {};
            const queryAllUsers = set1(tmp2[18]).queryAllUsers;
            set1(tmp2[18]);
            const merged2 = Object.assign(obj);
            queryChannelUsersResult = queryAllUsers(obj5);
          }
        } else {
          return [];
        }
      }
      currentUser1 = UserStore.getCurrentUser();
      const str3 = str2.toLowerCase();
      const replaced = str3.replace(/^@/, "");
      let tmp32 = null != currentUser1 && str2.length > 0;
      if (tmp32) {
        const intl = tmp(tmp2[12]).intl;
        const stringResult = intl.string(items2(tmp2[12]).t.Qf3ptv);
        let startsWithResult = stringResult.startsWith(replaced);
        if (!startsWithResult) {
          const substr = text.substr(1);
          startsWithResult = substr.startsWith(replaced);
        }
        tmp32 = startsWithResult;
      }
      c3 = tmp32;
      const found = queryChannelUsersResult.filter((record) => {
        record = record.record;
        let isBlockedOrIgnoredResult = RelationshipStore.isBlockedOrIgnored(record.id);
        if (!isBlockedOrIgnoredResult) {
          let tmp2 = c3;
          if (tmp2) {
            let id1;
            const id = record.id;
            if (currentUser1 != null) {
              id1 = currentUser1.id;
            }
            tmp2 = id === id1;
          }
          isBlockedOrIgnoredResult = tmp2;
        }
        return !isBlockedOrIgnoredResult;
      });
      const mapped = found.map((record) => {
        record = record.record;
        const obj = { text: obj2.getUserTag(record), user: record };
        obj2 = set1(currentUser1[14]);
        return obj;
      });
      if (tmp32) {
        const obj6 = { text, user: currentUser1 };
        mapped.unshift(obj6);
      }
      return mapped;
    }
  }
  if (0 === str2.length) {
    items2 = [];
    const _Set2 = Set;
    const self3 = this;
    const self4 = this;
    set1 = new Set();
    const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId(searchContext.guildId);
    const obj9 = set1(tmp2[18]);
    const recentlyTalked = obj9.getRecentlyTalked(currentlySelectedChannelId, maxResults);
    const item2 = recentlyTalked.forEach((record) => {
      record = record.record;
      const hasItem = null == record || record.isNonUserBot() || set1.has(record.id) || RelationshipStore.isBlockedOrIgnored(record.id);
      if (!hasItem) {
        const push = items2.push;
        const obj = { user: record, text: obj2.getUserTag(record) };
        obj2 = UserUtilsDefault;
        push(obj);
        set1.add(record.id);
      }
    });
    const recentMessageAuthorIds = SearchRecentMessageStore.getRecentMessageAuthorIds(searchContext.guildId);
    const item3 = recentMessageAuthorIds.forEach((item) => {
      let obj3;
      user = UserStore.getUser(item);
      const hasItem = null == user || user.isNonUserBot() || set1.has(user.id) || RelationshipStore.isBlockedOrIgnored(user.id);
      if (!hasItem) {
        const push = items2.push;
        const obj = { user, text: obj3.getUserTag(user) };
        obj3 = UserUtilsDefault;
        push(obj);
        set1.add(user.id);
      }
    });
    return items2.slice(0, maxResults);
  } else {
    const obj7 = { guildId: searchContext.guildId };
    const queryGuildUsers = set1(tmp2[18]).queryGuildUsers;
    set1(tmp2[18]);
    const merged3 = Object.assign(obj);
    queryChannelUsersResult = queryGuildUsers(obj7);
  }
}
function getChannelAutocompletions(arg0) {
  let closure_0;
  let closure_1;
  let maxResults;
  let query;
  let searchContext;
  let str2;
  let tmpResult;
  let tmpResult4;
  let tmpResult5;
  let tmpResult6;
  ({ query, searchContext, maxResults } = arg0);
  const str = query.trim();
  if (str.startsWith("\"")) {
    let substr3;
    if (str.endsWith("\"")) {
      const substr = str.substring(1, str.length - 1);
      str2 = substr.replaceAll(/\\(.)/g, (arg0, arg1) => arg1);
    }
    let substr1 = str2;
    if ("#" === str2[0]) {
      substr1 = str2.substring(1);
    }
    const tmp = _require;
    const obj3 = require("isGuildLikeSearchContext");
    if (obj3.isGuildLikeSearchContext(searchContext)) {
      const guildId = searchContext.guildId;
      _require = undefined;
      importDefault = undefined;
      let obj = { query: substr1, type, guildId, limit: Infinity, allowEmptyQueries: true, allowSnowflake: true, includeAllThreads: true, boosters: tmpResult.getBoosterMap(tmp(9496).AutocompleterResultTypes.TEXT_CHANNEL) };
      const queryChannels = AutocompleteUtilsDefault.queryChannels;
      AutocompleteUtilsDefault;
      tmpResult = tmp(5621);
      const concat = queryChannels(obj).concat;
      queryChannels(obj);
      obj2 = { query: substr1, type: type2, guildId, limit: Infinity, allowEmptyQueries: true, allowSnowflake: true, boosters: tmpResult4.getBoosterMap(tmp(9496).AutocompleterResultTypes.VOICE_CHANNEL) };
      const queryChannels2 = AutocompleteUtilsDefault.queryChannels;
      AutocompleteUtilsDefault;
      tmpResult4 = tmp(5621);
      const combined = concat(queryChannels2(obj2));
      const mapped = combined.map((record) => record.record);
      const tmp9 = importDefault;
      if (0 === substr1.length) {
        _require = SelectedChannelStore.getChannelId(guildId);
        const found = mapped.find((id) => id.id === closure_0);
        if (null != found) {
          mapped.splice(mapped.indexOf(found), 1);
          mapped.unshift(found);
        }
      }
      importDefault = GuildChannelStore.getTextChannelNameDisambiguations(guildId);
      const obj14 = tmp9(12)(mapped);
      const takeResult = obj14.take(maxResults);
      const iter2 = takeResult.map((channel) => {
        let name;
        if (closure_1[channel.id] != null) {
          name = tmp.name;
        }
        if (name == null) {
          const obj = useChannelName;
          name = obj.computeChannelName(channel, UserStore, RelationshipStore);
        }
        obj2 = { text: "" + name, channel, key: channel.id };
        return obj2;
      });
      substr3 = iter2.value();
    } else {
      if (searchContext.type === constants.DMS) {
        if (!StreamerModeStore.hidePersonalInformation) {
          const obj4 = { query: substr1, limit: maxResults, fuzzy: true, boosters: tmpResult5.getBoosterMap(tmp(9496).AutocompleterResultTypes.GROUP_DM) };
          const queryGroupDMs = AutocompleteUtilsDefault.queryGroupDMs;
          AutocompleteUtilsDefault;
          tmpResult5 = tmp(5621);
          const queryGroupDMsResult = queryGroupDMs(obj4);
          const obj5 = { query: substr1, limit: maxResults, boosters: tmpResult6.getBoosterMap(tmp(9496).AutocompleterResultTypes.USER) };
          const queryDMChannels = AutocompleteUtilsDefault.queryDMChannels;
          AutocompleteUtilsDefault;
          tmpResult6 = tmp(5621);
          const queryDMChannelsResult = queryDMChannels(obj5);
          const tmp8 = _modDef12;
          const tmp8Result = tmp8(queryGroupDMsResult.concat(queryDMChannelsResult));
          const sorted = tmp8Result.sort(tmp(9496).sortByMatchScore);
          const mapped1 = sorted.map((record) => {
            let id;
            record = record.record;
            const obj = { text: record.comparator, channel: record, key: id };
            id = undefined;
            if (record != null) {
              id = record.id;
            }
            return obj;
          });
          const iter = mapped1.filter((text) => null != text.text && null != text.channel && null != text.key);
          const valueResult2 = iter.value();
          substr3 = valueResult2.slice(0, maxResults);
        }
      }
      substr3 = [];
    }
    return substr3;
  }
  str2 = str;
  if (str.startsWith("\"")) {
    const substr2 = str.substring(1);
    str2 = substr2.replaceAll(/\\(.)/g, (arg0, arg1) => arg1);
  }
}
function makeSearchTokenConfigs(arg0) {
  let intl14;
  let intl15;
  let intl17;
  let intl18;
  let intl20;
  let intl21;
  let intl23;
  let intl24;
  let intl26;
  let intl27;
  let intl29;
  let intl30;
  let intl32;
  let intl33;
  let intl36;
  let intl37;
  let intl39;
  let intl40;
  let intl42;
  let intl43;
  let intl45;
  let intl46;
  let intl48;
  let intl49;
  let items1;
  let items10;
  let items11;
  let items12;
  let items13;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj27;
  let obj8;
  let regExp10;
  let regExp11;
  let regExp2;
  let regExp3;
  let regExp4;
  let regExp5;
  let regExp6;
  let regExp7;
  let regExp8;
  let regExp9;
  const f109955 = (text) => ({ text });
  _require = arg0;
  const intl = require("intl").intl;
  let items = [intl.string(require("intl").t.tPZo4p), , ];
  const intl2 = require("intl").intl;
  items[1] = intl2.string(require("intl").t.JL7sRS);
  const intl3 = require("intl").intl;
  items[2] = intl3.string(require("intl").t.WjkIKU);
  const intl4 = require("intl").intl;
  items1 = [, , , , , , , , ];
  items1[0] = intl4.string(require("intl").t.TNLcpx);
  const intl5 = require("intl").intl;
  items1[1] = intl5.string(require("intl").t.XM9XGP);
  const intl6 = require("intl").intl;
  items1[2] = intl6.string(require("intl").t.ZNR2fi);
  const intl7 = require("intl").intl;
  items1[3] = intl7.string(require("intl").t["AV/v6i"]);
  const intl8 = require("intl").intl;
  items1[4] = intl8.string(require("intl").t["20uQR3"]);
  const intl9 = require("intl").intl;
  items1[5] = intl9.string(require("intl").t.F8Wf0e);
  const intl10 = require("intl").intl;
  items1[6] = intl10.string(require("intl").t.L4lxyE);
  const intl11 = require("intl").intl;
  items1[7] = intl11.string(require("intl").t.PJgX2h);
  const intl12 = require("intl").intl;
  items1[8] = intl12.string(require("intl").t.nrpA5E);
  let obj = {};
  const FILTER_FROM = SearchTokenTypes.FILTER_FROM;
  obj2 = {
    regex: regExp,
    componentType: obj.FILTER,
    key: "" + intl14.string(require("intl").t["1TUdFo"]) + ":",
    plainText: intl15.string(require("intl").t["1TUdFo"]),
    validator() {
      const obj = closure_0(items1[20]);
      return obj.isFromUserFilterSupported();
    },
    getAutocompletions: getUserAutocompletions
  };
  const intl13 = require("intl").intl;
  regExp = new RegExp("" + intl13.string(require("intl").t["1TUdFo"]) + ":", "i");
  intl14 = require("intl").intl;
  intl15 = require("intl").intl;
  obj[FILTER_FROM] = obj2;
  const obj3 = { follows: items2, regex: regex3, validator: isValidUserAutocomplete, mutable: true, componentType: obj.ANSWER, queryKey: "author_id" };
  items2 = [SearchTokenTypes.FILTER_FROM];
  obj[SearchTokenTypes.ANSWER_USERNAME_FROM] = obj3;
  const FILTER_MENTIONS = SearchTokenTypes.FILTER_MENTIONS;
  const obj4 = {
    regex: regExp1,
    componentType: obj.FILTER,
    key: "" + intl17.string(require("intl").t["i96lO+"]) + ":",
    plainText: intl18.string(require("intl").t["i96lO+"]),
    validator() {
      const obj = closure_0(items1[20]);
      return obj.isMentionsUserFilterSupported();
    },
    getAutocompletions: getUserAutocompletions
  };
  const intl16 = require("intl").intl;
  regExp1 = new RegExp("" + intl16.string(require("intl").t["i96lO+"]) + ":", "i");
  intl17 = require("intl").intl;
  intl18 = require("intl").intl;
  obj[FILTER_MENTIONS] = obj4;
  const obj5 = { follows: items3, regex: regex3, validator: isValidUserAutocomplete, mutable: true, componentType: obj.ANSWER, queryKey: "mentions" };
  items3 = [SearchTokenTypes.FILTER_MENTIONS];
  obj[SearchTokenTypes.ANSWER_USERNAME_MENTIONS] = obj5;
  const FILTER_HAS = SearchTokenTypes.FILTER_HAS;
  const obj6 = {
    regex: regExp2,
    componentType: obj.FILTER,
    key: "" + intl20.string(require("intl").t.CqCvir) + ":",
    plainText: intl21.string(require("intl").t.CqCvir),
    getAutocompletions(query) {
      query = query.query;
      const maxResults = query.maxResults;
      closure_0 = query.toLocaleLowerCase();
      const arr = _modDef12(items1);
      const found = arr.filter((toLocaleLowerCase) => {
        const tmp = items(items1[17]);
        return tmp(closure_0, toLocaleLowerCase.toLocaleLowerCase());
      });
      const takeResult = found.take(maxResults);
      const iter = takeResult.map(f109955);
      return iter.value();
    }
  };
  const intl19 = require("intl").intl;
  regExp2 = new RegExp("" + intl19.string(require("intl").t.CqCvir) + ":", "i");
  intl20 = require("intl").intl;
  intl21 = require("intl").intl;
  obj[FILTER_HAS] = obj6;
  const ANSWER_HAS = SearchTokenTypes.ANSWER_HAS;
  const obj7 = { regex: obj8.makeRegexForOptionsWithNegation(items1), follows: items4, validator: isValidHasAutocomplete, componentType: obj.ANSWER, queryKey: "has" };
  items4 = [SearchTokenTypes.FILTER_HAS];
  obj[ANSWER_HAS] = obj7;
  obj8 = require("SearchTokensUtils");
  const FILTER_LINK_FROM = SearchTokenTypes.FILTER_LINK_FROM;
  const obj9 = { regex: regExp3, key: "" + intl23.string(require("intl").t.RpRAZD) + ":", plainText: intl24.string(require("intl").t.RpRAZD), componentType: obj.FILTER };
  const intl22 = require("intl").intl;
  regExp3 = new RegExp("" + intl22.string(require("intl").t.RpRAZD) + ":", "i");
  intl23 = require("intl").intl;
  intl24 = require("intl").intl;
  obj[FILTER_LINK_FROM] = obj9;
  const obj10 = { regex: require("SearchTokensUtils").GENERIC_REGEX, follows: items5, mutable: true, componentType: obj.ANSWER, queryKey: "link_hostname" };
  items5 = [SearchTokenTypes.FILTER_LINK_FROM];
  obj[SearchTokenTypes.ANSWER_LINK_FROM] = obj10;
  const FILTER_FILE_TYPE = SearchTokenTypes.FILTER_FILE_TYPE;
  const obj11 = { regex: regExp4, key: "" + intl26.string(require("intl").t.TMNjFm) + ":", plainText: intl27.string(require("intl").t.TMNjFm), componentType: obj.FILTER };
  const intl25 = require("intl").intl;
  regExp4 = new RegExp("" + intl25.string(require("intl").t.TMNjFm) + ":", "i");
  intl26 = require("intl").intl;
  intl27 = require("intl").intl;
  obj[FILTER_FILE_TYPE] = obj11;
  const obj12 = { regex: require("SearchTokensUtils").GENERIC_REGEX, follows: items6, mutable: true, componentType: obj.ANSWER, queryKey: "attachment_extension" };
  items6 = [SearchTokenTypes.FILTER_FILE_TYPE];
  obj[SearchTokenTypes.ANSWER_FILE_TYPE] = obj12;
  const FILTER_FILE_NAME = SearchTokenTypes.FILTER_FILE_NAME;
  const obj13 = { regex: regExp5, key: "" + intl29.string(require("intl").t["5xtLRC"]) + ":", plainText: intl30.string(require("intl").t["5xtLRC"]), componentType: obj.FILTER };
  const intl28 = require("intl").intl;
  regExp5 = new RegExp("" + intl28.string(require("intl").t["5xtLRC"]) + ":", "i");
  intl29 = require("intl").intl;
  intl30 = require("intl").intl;
  obj[FILTER_FILE_NAME] = obj13;
  const obj14 = { regex: require("SearchTokensUtils").GENERIC_REGEX, follows: items7, mutable: true, componentType: obj.ANSWER, queryKey: "attachment_filename" };
  items7 = [SearchTokenTypes.FILTER_FILE_NAME];
  obj[SearchTokenTypes.ANSWER_FILE_NAME] = obj14;
  let FILTER_BEFORE = SearchTokenTypes.FILTER_BEFORE;
  const obj15 = {
    regex: regExp6,
    componentType: obj.FILTER,
    key: "" + intl32.string(require("intl").t["qZ+7BA"]) + ":",
    plainText: intl33.string(require("intl").t["qZ+7BA"]),
    getAutocompletions(query) {
      query = query.query;
      const FILTER_BEFORE = constants.FILTER_BEFORE;
      const maxResults = query.maxResults;
      const tmp = closure_30();
      closure_0 = query.toLocaleLowerCase();
      const arr = items(items1[11])(tmp);
      const found = arr.filter((toLocaleLowerCase) => {
        const tmp = items(items1[17]);
        return tmp(closure_0, toLocaleLowerCase.toLocaleLowerCase());
      });
      const takeResult = found.take(maxResults);
      const iter = takeResult.map(f109955);
      const valueResult = iter.value();
      return valueResult.map((text) => {
        const obj = { group: FILTER_AFTER, key: "" + FILTER_AFTER + "-" + text.text };
        const merged = Object.assign(text);
        return obj;
      });
    }
  };
  const intl31 = require("intl").intl;
  regExp6 = new RegExp("" + intl31.string(require("intl").t["qZ+7BA"]) + ":", "i");
  intl32 = require("intl").intl;
  intl33 = require("intl").intl;
  obj[FILTER_BEFORE] = obj15;
  let FILTER_ON = SearchTokenTypes.FILTER_ON;
  const obj16 = {
    regex: regExp7,
    componentType: obj.FILTER,
    key: "" + intl36.string(require("intl").t.h2NzSd) + ":",
    plainText: intl37.string(require("intl").t.h2NzSd),
    getAutocompletions(query) {
      query = query.query;
      const FILTER_ON = constants.FILTER_ON;
      const maxResults = query.maxResults;
      const tmp = closure_30();
      closure_0 = query.toLocaleLowerCase();
      const arr = items(items1[11])(tmp);
      const found = arr.filter((toLocaleLowerCase) => {
        const tmp = items(items1[17]);
        return tmp(closure_0, toLocaleLowerCase.toLocaleLowerCase());
      });
      const takeResult = found.take(maxResults);
      const iter = takeResult.map(f109955);
      const valueResult = iter.value();
      return valueResult.map((text) => {
        const obj = { group: FILTER_AFTER, key: "" + FILTER_AFTER + "-" + text.text };
        const merged = Object.assign(text);
        return obj;
      });
    }
  };
  const intl34 = require("intl").intl;
  const stringResult = intl34.string(require("intl").t.tIxkOo);
  const intl35 = require("intl").intl;
  regExp7 = new RegExp("" + "(" + stringResult + "|" + intl35.string(require("intl").t.h2NzSd) + ")" + ":", "i");
  intl36 = require("intl").intl;
  intl37 = require("intl").intl;
  obj[FILTER_ON] = obj16;
  let FILTER_AFTER = SearchTokenTypes.FILTER_AFTER;
  const obj17 = {
    regex: regExp8,
    componentType: obj.FILTER,
    key: "" + intl39.string(require("intl").t.KSDx7M) + ":",
    plainText: intl40.string(require("intl").t.KSDx7M),
    getAutocompletions(query) {
      query = query.query;
      const FILTER_AFTER = constants.FILTER_AFTER;
      const maxResults = query.maxResults;
      const tmp = closure_30();
      closure_0 = query.toLocaleLowerCase();
      const arr = items(items1[11])(tmp);
      const found = arr.filter((toLocaleLowerCase) => {
        const tmp = items(items1[17]);
        return tmp(closure_0, toLocaleLowerCase.toLocaleLowerCase());
      });
      const takeResult = found.take(maxResults);
      const iter = takeResult.map(f109955);
      const valueResult = iter.value();
      return valueResult.map((text) => {
        const obj = { group: FILTER_AFTER, key: "" + FILTER_AFTER + "-" + text.text };
        const merged = Object.assign(text);
        return obj;
      });
    }
  };
  const intl38 = require("intl").intl;
  regExp8 = new RegExp("" + intl38.string(require("intl").t.KSDx7M) + ":", "i");
  intl39 = require("intl").intl;
  intl40 = require("intl").intl;
  obj[FILTER_AFTER] = obj17;
  const obj18 = {
    regex: regExp,
    follows: items8,
    componentType: obj.ANSWER,
    mutable: true,
    validator(getFullMatch) {
      return dateValidator(getFullMatch, "before");
    }
  };
  items8 = [SearchTokenTypes.FILTER_BEFORE];
  obj[SearchTokenTypes.ANSWER_BEFORE] = obj18;
  const obj19 = {
    regex: regExp,
    follows: items9,
    componentType: obj.ANSWER,
    mutable: true,
    validator(getFullMatch) {
      return dateValidator(getFullMatch, "on");
    }
  };
  items9 = [SearchTokenTypes.FILTER_ON];
  obj[SearchTokenTypes.ANSWER_ON] = obj19;
  const obj20 = {
    regex: regExp,
    follows: items10,
    componentType: obj.ANSWER,
    mutable: true,
    validator(getFullMatch) {
      return dateValidator(getFullMatch, "after");
    }
  };
  items10 = [SearchTokenTypes.FILTER_AFTER];
  obj[SearchTokenTypes.ANSWER_AFTER] = obj20;
  const FILTER_IN = SearchTokenTypes.FILTER_IN;
  const obj21 = {
    regex: regExp9,
    componentType: obj.FILTER,
    key: "" + intl42.string(require("intl").t.WNpFHa) + ":",
    plainText: intl43.string(require("intl").t.WNpFHa),
    validator() {
      let selectedSearchContext = closure_0;
      if (closure_0 == null) {
        selectedSearchContext = SearchAutocompleteStore.getSelectedSearchContext();
      }
      let result = null != selectedSearchContext;
      if (result) {
        const obj = SearchTokenStreamerModeUtils;
        result = obj.isInChannelFilterSupported(selectedSearchContext);
      }
      return result;
    },
    getAutocompletions: getChannelAutocompletions
  };
  const intl41 = require("intl").intl;
  regExp9 = new RegExp("" + intl41.string(require("intl").t.WNpFHa) + ":", "i");
  intl42 = require("intl").intl;
  intl43 = require("intl").intl;
  obj[FILTER_IN] = obj21;
  const obj22 = {
    regex: require("SearchTokensUtils").ANSWER_IN_REGEX,
    mutable: true,
    follows: items11,
    componentType: obj.ANSWER,
    validator(token) {
      let selectedSearchContext = closure_0;
      if (closure_0 == null) {
        selectedSearchContext = SearchAutocompleteStore.getSelectedSearchContext();
      }
      const tmp3 = null != selectedSearchContext && isValidChannelAutocomplete(token, selectedSearchContext);
      return tmp3;
    },
    queryKey: "channel_id"
  };
  items11 = [SearchTokenTypes.FILTER_IN];
  obj[SearchTokenTypes.ANSWER_IN] = obj22;
  const FILTER_PINNED = SearchTokenTypes.FILTER_PINNED;
  const obj23 = {
    regex: regExp10,
    componentType: obj.FILTER,
    key: "" + intl45.string(require("intl").t["0B74eY"]) + ":",
    plainText: intl46.string(require("intl").t["0B74eY"]),
    getAutocompletions() {
      items = [{ text: "true" }, { text: "false" }];
      return items;
    }
  };
  const intl44 = require("intl").intl;
  regExp10 = new RegExp("" + intl44.string(require("intl").t["0B74eY"]) + ":", "i");
  intl45 = require("intl").intl;
  intl46 = require("intl").intl;
  obj[FILTER_PINNED] = obj23;
  const obj24 = { regex: regExp1, componentType: obj.ANSWER, follows: items12, queryKey: "pinned", validator: isValidPinnedAutocomplete };
  items12 = [SearchTokenTypes.FILTER_PINNED];
  obj[SearchTokenTypes.ANSWER_PINNED] = obj24;
  const FILTER_AUTHOR_TYPE = SearchTokenTypes.FILTER_AUTHOR_TYPE;
  const obj25 = {
    regex: regExp11,
    componentType: obj.FILTER,
    key: "" + intl48.string(require("intl").t.us8IQi) + ":",
    plainText: intl49.string(require("intl").t.us8IQi),
    getAutocompletions(query) {
      query = query.query;
      const maxResults = query.maxResults;
      closure_0 = query.toLocaleLowerCase();
      const arr = _modDef12(items);
      const found = arr.filter((toLocaleLowerCase) => {
        const tmp = items(items1[17]);
        return tmp(closure_0, toLocaleLowerCase.toLocaleLowerCase());
      });
      const takeResult = found.take(maxResults);
      const iter = takeResult.map(f109955);
      return iter.value();
    }
  };
  const intl47 = require("intl").intl;
  regExp11 = new RegExp("" + intl47.string(require("intl").t.us8IQi) + ":", "i");
  intl48 = require("intl").intl;
  intl49 = require("intl").intl;
  obj[FILTER_AUTHOR_TYPE] = obj25;
  const ANSWER_AUTHOR_TYPE = SearchTokenTypes.ANSWER_AUTHOR_TYPE;
  const obj26 = { regex: obj27.makeRegexForOptionsWithNegation(items), follows: items13, validator: isValidAuthorTypeAutocomplete, componentType: obj.ANSWER, queryKey: "author_type" };
  items13 = [SearchTokenTypes.FILTER_AUTHOR_TYPE];
  obj[ANSWER_AUTHOR_TYPE] = obj26;
  obj27 = require("SearchTokensUtils");
  return obj;
}
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: hasOwnProperty, GUILD_VOCAL_CHANNELS_KEY: metroRequire } = GuildChannelStore);
GuildChannelStore = GuildChannelStore_mod;
({ ME: closure_14, SearchTokenTypes } = Constants);
({ SEARCH_DATE_FORMAT: closure_16, SearchTypes: closure_17, IS_SEARCH_FILTER_TOKEN: closure_18, ID_REGEX: closure_19 } = Constants);
let regExp = new RegExp("(?:\\s*(([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})|([0-9]{4})-([0-9]{1,2})|\\d{4}|([^\\d\\s]+)))", "i");
let regExp1 = new RegExp("\\s*(true|false)", "i");
const re33 = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
const ComponentTypes = { FILTER: "FILTER", ANSWER: "ANSWER" };
let obj2 = {};
let closure_37 = { [SearchTokenTypes.FILTER_HAS]: SearchTokenTypes.ANSWER_HAS, [SearchTokenTypes.FILTER_AUTHOR_TYPE]: SearchTokenTypes.ANSWER_AUTHOR_TYPE, [SearchTokenTypes.FILTER_PINNED]: SearchTokenTypes.ANSWER_PINNED };
let result = size.fileFinishedImporting("modules/search/tokens/SearchTokens.tsx");

export default obj2;
export { isValidUserAutocomplete };
export { isValidChannelAutocomplete };
export const getLocalizedHasAnswer = function getLocalizedHasAnswer(str) {
  const tmp = getHasMap();
  const startsWithResult = str.startsWith("-");
  let substr = str;
  if (startsWithResult) {
    substr = str.slice(1);
  }
  const entries = Object.entries(tmp);
  const found = entries.find((item) => {
    let tmp;
    [, tmp] = item;
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
  const obj = {};
  const intl = intl50.intl;
  obj[intl.string(intl50.t.tPZo4p)] = "user";
  const intl2 = intl50.intl;
  obj[intl2.string(intl50.t.JL7sRS)] = "bot";
  const intl3 = intl50.intl;
  obj[intl3.string(intl50.t.WjkIKU)] = "webhook";
  const startsWithResult = str.startsWith("-");
  let substr = str;
  if (startsWithResult) {
    substr = str.slice(1);
  }
  const entries = Object.entries(obj);
  const found = entries.find((item) => {
    let tmp;
    [, tmp] = item;
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
  const obj = _modDef12;
  return obj.sample(generateDateAutocompletions());
};
export { getUserAutocompletions };
export { ComponentTypes };
export const buildCrossDMSearchTokensConfig = function buildCrossDMSearchTokensConfig() {
  const obj = { type: constants.DMS };
  return makeSearchTokenConfigs(obj);
};
export const rebuildSearchTokenConfigs = function rebuildSearchTokenConfigs() {
  const merged = Object.assign(obj2, makeSearchTokenConfigs());
};
export const isSearchFilterTokenType = function isSearchFilterTokenType(type) {
  return regex.test(type);
};
export const isMeAutcompleteAnswer = function isMeAutcompleteAnswer(str) {
  if (0 === str.length) {
    return false;
  } else {
    str = str.toLowerCase();
    const replaced = str.replace(/^@/, "");
    const intl = intl50.intl;
    const stringResult = intl.string(intl50.t.Qf3ptv);
    let startsWithResult = stringResult.startsWith(replaced);
    if (!startsWithResult) {
      const substr = text.substring(1);
      startsWithResult = substr.startsWith(replaced);
    }
    return startsWithResult;
  }
};
export const isValidFilterAnswerForSubmit = function isValidFilterAnswerForSubmit(searchTokenType, trimmed) {
  if (null == closure_37[searchTokenType]) {
    return true;
  } else {
    const _HermesInternal = HermesInternal;
    const Token = QueryTokenizer.Token;
    const items = ["filter:" + trimmed, trimmed];
    const self = this;
    const self2 = this;
    const token = new Token(items, tmp);
    if (SearchTokenTypes.ANSWER_HAS === closure_37[searchTokenType]) {
      const tmp8Result = SearchTokensUtils;
      return tmp8Result.validateForMapWithNegation("has", getHasMap(), token);
    } else if (SearchTokenTypes.ANSWER_AUTHOR_TYPE === closure_37[searchTokenType]) {
      const obj = {};
      const prop = SearchTokensUtils.validateForMapWithNegation;
      SearchTokensUtils;
      const intl = intl50.intl;
      obj[intl.string(intl50.t.tPZo4p)] = "user";
      const intl2 = intl50.intl;
      obj[intl2.string(intl50.t.JL7sRS)] = "bot";
      const intl3 = intl50.intl;
      obj[intl3.string(intl50.t.WjkIKU)] = "webhook";
      return prop("author_type", obj, token);
    } else if (SearchTokenTypes.ANSWER_PINNED === closure_37[searchTokenType]) {
      let flag2;
      const match = token.getMatch(1);
      if ("true" === match) {
        token.setData("pinned", true);
        flag2 = true;
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
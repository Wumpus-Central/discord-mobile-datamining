// discord_app/modules/search/tokens/SearchTokens.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import util from "../../../intl/index.native.tsx";
import _modDef4421 from "../../../../_runtime/metro/04421__.js";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import useChannelName from "../../channel/useChannelName.tsx";
import AutocompleteUtilsDefault from "../../../utils/AutocompleteUtils.tsx";
import SearchTokensUtils from "SearchTokensUtils.tsx";
import SearchTokenStreamerModeUtils from "SearchTokenStreamerModeUtils.tsx";
import QueryTokenizer from "../../../lib/QueryTokenizer.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildChannelStore_mod from "../../../stores/GuildChannelStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import StreamerModeStore from "../../../stores/StreamerModeStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import SearchAutocompleteStore from "../SearchAutocompleteStore.tsx";
import SearchRecentMessageStore from "../SearchRecentMessageStore.tsx";

require = fn;
function getShortcuts() {
  let obj = {};
  const intl = util.intl;
  obj[intl.string(util.t.HYiVEQ)] = () => {
    const obj = _modDef4421();
    const addResult = _modDef4421().startOf("day").add(0, "day");
    const items = [addResult];
    const startOfResult = _modDef4421().startOf("day");
    items[1] = addResult.clone().add(1, "day");
    return items;
  };
  const intl2 = util.intl;
  obj[intl2.string(util.t.cu86KC)] = () => {
    const obj = _modDef4421();
    const addResult = _modDef4421().startOf("day").add(-1, "day");
    const items = [addResult];
    const startOfResult = _modDef4421().startOf("day");
    items[1] = addResult.clone().add(1, "day");
    return items;
  };
  const intl3 = util.intl;
  obj[intl3.string(util.t["FvBj/6"])] = () => {
    const obj = _modDef4421();
    const addResult = _modDef4421().startOf("week").add(0, "week");
    const items = [addResult];
    const startOfResult = _modDef4421().startOf("week");
    items[1] = addResult.clone().add(1, "week");
    return items;
  };
  const intl4 = util.intl;
  obj[intl4.string(util.t["20uWCw"])] = () => {
    const obj = _modDef4421();
    const addResult = _modDef4421().startOf("month").add(0, "month");
    const items = [addResult];
    const startOfResult = _modDef4421().startOf("month");
    items[1] = addResult.clone().add(1, "month");
    return items;
  };
  const intl5 = util.intl;
  obj[intl5.string(util.t["dXC/hn"])] = () => {
    const obj = _modDef4421();
    const addResult = _modDef4421().startOf("year").add(0, "year");
    const items = [addResult];
    const startOfResult = _modDef4421().startOf("year");
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
  } else if (match === text) {
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
    }
  } else if (null != token.getMatch(4)) {
    const findByTagResult = UserStore.findByTag(token.getMatch(4));
    if (null != findByTagResult) {
      let id1;
      if (findByTagResult != null) {
        id1 = findByTagResult.id;
      }
    }
  } else {
    const match1 = token.getMatch(2);
    const findByTagResult1 = UserStore.findByTag(match1, token.getMatch(3));
    if (null != findByTagResult1) {
      let id2;
      if (findByTagResult1 != null) {
        id2 = findByTagResult1.id;
      }
    }
  }
}
function dateValidator(getFullMatch, after) {
  const str = getFullMatch.getFullMatch();
  const formatted = getFullMatch.getFullMatch().trim().toLowerCase();
  const tmp2 = getShortcuts()[formatted];
  if (null != tmp2) {
    [obj9, obj10] = tmp2();
    const tmp23 = _slicedToArray(tmp2(), 2);
  } else {
    const _Set3 = Set;
    const set = new Set(_modDef4421.months().map((item) => item.toLowerCase()));
    if (set.has(formatted)) {
      const localResult = _modDef4421(formatted, "MMMM").local();
      const items = [localResult];
      const obj17 = _modDef4421(formatted, "MMMM");
      items[1] = localResult.clone().add(1, "month");
      const cloneResult = localResult.clone();
      [obj9, obj10] = items;
      const tmp21 = _slicedToArray(items, 2);
    } else {
      const _Set = Set;
      const tmp32Result = _modDef4421;
      const set1 = new Set(_modDef4421.weekdays().map((item) => item.toLowerCase()));
      if (set1.has(formatted)) {
        const localResult1 = _modDef4421(formatted, "dddd").local();
        const items1 = [localResult1];
        const obj14 = _modDef4421(formatted, "dddd");
        items1[1] = localResult1.clone().add(1, "day");
        const cloneResult1 = localResult1.clone();
        [obj9, obj10] = items1;
        const tmp19 = _slicedToArray(items1, 2);
      } else {
        const _Date = Date;
        const date = new Date();
        const _Set2 = Set;
        const fullYear = date.getFullYear();
        const tmp32Result2 = _modDef12;
        const set2 = new Set(_modDef12.range(2015, fullYear + 1).map((item) => item.toString()));
        if (set2.has(formatted)) {
          const localResult2 = _modDef4421(formatted, "YYYY").local();
          const items2 = [localResult2];
          const obj11 = _modDef4421(formatted, "YYYY");
          items2[1] = localResult2.clone().add(1, "year");
          const cloneResult2 = localResult2.clone();
          [obj9, obj10] = items2;
          const tmp17 = _slicedToArray(items2, 2);
        } else {
          const localResult3 = _modDef4421(formatted, value2).local();
          const items3 = [localResult3];
          const obj6 = _modDef4421(formatted, value2);
          items3[1] = localResult3.clone().add(1, "day");
          const cloneResult3 = localResult3.clone();
          [obj9, obj10] = items3;
          const tmp15 = _slicedToArray(items3, 2);
        }
        const rangeResult = _modDef12.range(2015, fullYear + 1);
      }
      const weekdaysResult = _modDef4421.weekdays();
    }
    const monthsResult = _modDef4421.months();
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
    if ("before" !== after) {
      tmp27 = obj10;
      tmp28 = obj9;
      if ("after" === after) {
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
function isValidChannelAutocomplete(token, items) {
  const str = token.getMatch(1);
  if (regex2.test(str)) {
    items = [str];
    token.setData("channelIds", items);
    let flag = true;
  } else {
    let replaced = str;
    if (tmp) {
      const substr = str.substring(1, str.length - 1);
      replaced = substr.replaceAll(/\\(.)/g, (arg0, arg1) => arg1);
    }
    tmp = str.startsWith('"') && str.endsWith('"');
    if (obj2.isGuildLikeSearchContext(items)) {
      const guildId = items.guildId;
      closure_129_0 = replaced;
      const combined = GuildChannelStore.getChannels(guildId)[closure_5].concat(
        GuildChannelStore.getChannels(guildId)[closure_6],
      );
      const textChannelNameDisambiguations = GuildChannelStore.getTextChannelNameDisambiguations(guildId);
      const obj3 = GuildChannelStore.getChannels(guildId)[closure_5];
      const mapped = _modDef12.chain(combined).map((channel) => channel.channel);
      if (null != guildId) {
        let allThreadsForGuild = ChannelStore.getAllThreadsForGuild(guildId);
      } else {
        allThreadsForGuild = [];
      }
      const combined1 = mapped.concat(allThreadsForGuild);
      const chainResult = _modDef12.chain(combined);
      const valueResult = combined1
        .filter((item) => {
          let name;
          if (importDefault[item.id] != null) {
            name = tmp2.name;
          }
          if (name == null) {
            name = useChannelName.computeChannelName(item, UserStore, RelationshipStore);
          }
          return replaced === name;
        })
        .value();
      let length;
      if (valueResult != null) {
        length = valueResult.length;
      }
      let flag3 = length > 0;
      if (flag3) {
        token.setData(
          "channelIds",
          valueResult.map((id) => id.id),
        );
        flag3 = true;
      }
      flag = flag3;
      const iter = combined1.filter((item) => {
        let name;
        if (importDefault[item.id] != null) {
          name = tmp2.name;
        }
        if (name == null) {
          name = useChannelName.computeChannelName(item, UserStore, RelationshipStore);
        }
        return replaced === name;
      });
    } else {
      flag = items.type === constants.DMS;
      if (flag) {
        flag = !StreamerModeStore.hidePersonalInformation;
      }
      if (flag) {
        const _Object = Object;
        const values = Object.values(ChannelStore.getMutablePrivateChannels());
        const found = values.filter((isGroupDM) => {
          if (isGroupDM.isGroupDM()) {
            if (replaced === obj.computeChannelName(isGroupDM, UserStore, RelationshipStore)) {
              return true;
            }
            obj = useChannelName;
          }
          if (isGroupDM.isDM()) {
            const user = UserStore.getUser(isGroupDM.getRecipientId());
            if (null == user) {
              return false;
            } else {
              return replaced === UserUtilsDefault.getUserTag(user);
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
          token.setData(
            "channelIds",
            found.map((id) => id.id),
          );
          flag2 = true;
        }
        flag = flag2;
      }
    }
    obj2 = replaced(11823);
  }
  return flag;
}
function getHasMap() {
  const obj = {};
  const intl = util.intl;
  obj[intl.string(util.t.ZNR2fi)] = "link";
  const intl2 = util.intl;
  obj[intl2.string(util.t["20uQR3"])] = "embed";
  const intl3 = util.intl;
  obj[intl3.string(util.t.L4lxyE)] = "poll";
  const intl4 = util.intl;
  obj[intl4.string(util.t.nrpA5E)] = "snapshot";
  const intl5 = util.intl;
  obj[intl5.string(util.t["AV/v6i"])] = "file";
  const intl6 = util.intl;
  obj[intl6.string(util.t.XM9XGP)] = "video";
  const intl7 = util.intl;
  obj[intl7.string(util.t.TNLcpx)] = "image";
  const intl8 = util.intl;
  obj[intl8.string(util.t.F8Wf0e)] = "sound";
  const intl9 = util.intl;
  obj[intl9.string(util.t.PJgX2h)] = "sticker";
  return obj;
}
function isValidHasAutocomplete(token) {
  return SearchTokensUtils.validateForMapWithNegation("has", getHasMap(), token);
}
function isValidAuthorTypeAutocomplete(token) {
  obj2 = {};
  const intl = util.intl;
  obj2[intl.string(util.t.tPZo4p)] = "user";
  const intl2 = util.intl;
  obj2[intl2.string(util.t.JL7sRS)] = "bot";
  const intl3 = util.intl;
  obj2[intl3.string(util.t.WjkIKU)] = "webhook";
  return SearchTokensUtils.validateForMapWithNegation("author_type", obj2, token);
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
  const monthsResult = _modDef4421.months();
  const items = [...Array.from(new Set(_modDef4421.months().map((item) => item.toLowerCase())))];
  const set = new Set(_modDef4421.months().map((item) => item.toLowerCase()));
  const weekdaysResult = _modDef4421.weekdays();
  const set1 = new Set(_modDef4421.weekdays().map((item) => item.toLowerCase()));
  const arraySpreadResult = HermesBuiltin.arraySpread(
    Array.from(new Set(_modDef4421.weekdays().map((item) => item.toLowerCase()))),
    tmp2,
  );
  const fullYear = new Date().getFullYear();
  const date = new Date();
  const rangeResult = _modDef12.range(2015, fullYear + 1);
  const set2 = new Set(_modDef12.range(2015, fullYear + 1).map((item) => item.toString()));
  HermesBuiltin.arraySpread(
    Object.keys(getShortcuts()),
    HermesBuiltin.arraySpread(
      Array.from(new Set(_modDef12.range(2015, fullYear + 1).map((item) => item.toString()))),
      arraySpreadResult,
    ),
  );
  return items;
}
function getUserAutocompletions(tokens) {
  ({ query, searchContext, maxResults } = tokens);
  tokens = tokens.tokens;
  let items2;
  let set1;
  let currentUser1;
  c3 = undefined;
  let obj = { query: null, limit: null, request: false, boosters: null };
  const str2 = query.trim().split("#")[0];
  obj.query = str2;
  obj.limit = maxResults;
  const str = query.trim();
  obj.boosters = items2(currentUser1[18]).getBoosterMap(items2(currentUser1[19]).AutocompleterResultTypes.USER);
  type = searchContext.type;
  if (constants.GUILD !== type) {
    if (constants.GUILD_CHANNEL !== type) {
      if (constants.THREAD !== type) {
        if (constants.CHANNEL === type) {
          const obj4 = {};
          const merged = Object.assign(obj);
          obj4.channelId = searchContext.channelId;
          let queryChannelUsersResult = set1(tmp2[18]).queryChannelUsers(obj4);
          const obj7 = set1(tmp2[18]);
        } else if (constants.DMS === type) {
          if (tokens == null) {
            tokens = [];
          }
          if (null == tokens) {
            let items = [];
          } else {
            const _Set = Set;
            const set = new Set();
            closure_129_0 = set;
            const items1 = [];
            closure_129_1 = items1;
            let item = tokens.forEach((getData) => {
              const data = getData.getData("channelIds");
              if (null != data) {
                const item = data.forEach((item) => set1.push(item));
              }
            });
            items = [];
            closure_129_2 = items;
            const item1 = items1.forEach((item) => {
              const channel = ChannelStore.getChannel(item);
              if (null != channel) {
                if (channel.isDM()) {
                  user = UserStore.getUser(channel.getRecipientId());
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
                  item = recipients.forEach((item) => {
                    user = user.getUser(item);
                    let hasItem = null == user;
                    if (!hasItem) {
                      hasItem = set.has(user.id);
                    }
                    if (!hasItem) {
                      currentUser1.push(user);
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
              items.push(currentUser);
            }
            const obj6 = {};
            const merged1 = Object.assign(obj);
            obj6.users = items;
            queryChannelUsersResult = set1(tmp2[18]).queryUsers(obj6);
            const obj5 = set1(tmp2[18]);
          } else {
            const obj8 = {};
            const merged2 = Object.assign(obj);
            queryChannelUsersResult = set1(tmp2[18]).queryAllUsers(obj8);
            let obj3 = set1(tmp2[18]);
          }
        } else {
          return [];
        }
      }
      currentUser1 = UserStore.getCurrentUser();
      const replaced = str2.toLowerCase().replace(/^@/, "");
      let tmp31 = null != currentUser1;
      if (tmp31) {
        tmp31 = str2.length > 0;
      }
      if (tmp31) {
        const intl = tmp(tmp2[12]).intl;
        let startsWithResult = intl.string(tmp(tmp2[12]).t.Qf3ptv).startsWith(replaced);
        if (!startsWithResult) {
          const substr = text.substr(1);
          startsWithResult = substr.startsWith(replaced);
        }
        tmp31 = startsWithResult;
        const stringResult = intl.string(tmp(tmp2[12]).t.Qf3ptv);
      }
      c3 = tmp31;
      const found = queryChannelUsersResult.filter((record) => {
        record = record.record;
        let isBlockedOrIgnoredResult = RelationshipStore.isBlockedOrIgnored(record.id);
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
        const obj = { text: set1(currentUser1[14]).getUserTag(record), user: record };
        return obj;
      });
      if (tmp31) {
        const obj9 = { text, user: currentUser1 };
        mapped.unshift(obj9);
      }
      return mapped;
    }
  }
  if (0 === str2.length) {
    items2 = [];
    const _Set2 = Set;
    set1 = new Set();
    const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId(searchContext.guildId);
    const recentlyTalked = set1(tmp2[18]).getRecentlyTalked(currentlySelectedChannelId, maxResults);
    const item2 = recentlyTalked.forEach((record) => {
      record = record.record;
      let hasItem = null == record || record.isNonUserBot();
      if (!hasItem) {
        hasItem = set1.has(record.id);
      }
      if (!hasItem) {
        hasItem = RelationshipStore.isBlockedOrIgnored(record.id);
      }
      if (!hasItem) {
        const obj = { user: record, text: UserUtilsDefault.getUserTag(record) };
        items2.push(obj);
        set1.add(record.id);
      }
    });
    const recentMessageAuthorIds = SearchRecentMessageStore.getRecentMessageAuthorIds(searchContext.guildId);
    const item3 = recentMessageAuthorIds.forEach((item) => {
      user = UserStore.getUser(item);
      let hasItem = null == user || user.isNonUserBot();
      if (!hasItem) {
        hasItem = set1.has(user.id);
      }
      if (!hasItem) {
        hasItem = RelationshipStore.isBlockedOrIgnored(user.id);
      }
      if (!hasItem) {
        const obj = { user, text: UserUtilsDefault.getUserTag(user) };
        items2.push(obj);
        set1.add(user.id);
      }
    });
    return items2.slice(0, maxResults);
  } else {
    const obj10 = {};
    const merged3 = Object.assign(obj);
    obj10.guildId = searchContext.guildId;
    queryChannelUsersResult = set1(tmp2[18]).queryGuildUsers(obj10);
    const obj13 = set1(tmp2[18]);
  }
  obj2 = items2(currentUser1[18]);
}
function getChannelAutocompletions(arg0) {
  ({ query, searchContext, maxResults } = arg0);
  const str = query.trim();
  if (str.startsWith('"')) {
    if (str.endsWith('"')) {
      const substr = str.substring(1, str.length - 1);
      let str2 = substr.replaceAll(/\\(.)/g, (arg0, arg1) => arg1);
    }
    let substr1 = str2;
    if ("#" === str2[0]) {
      substr1 = str2.substring(1);
    }
    if (obj3.isGuildLikeSearchContext(searchContext)) {
      const guildId = searchContext.guildId;
      _require = undefined;
      importDefault = undefined;
      let obj = {
        query: substr1,
        type,
        guildId,
        limit: Infinity,
        allowEmptyQueries: true,
        allowSnowflake: true,
        includeAllThreads: true,
        boosters: null,
      };
      const obj12 = AutocompleteUtilsDefault;
      const tmp7 = importDefault;
      obj.boosters = tmp(5754).getBoosterMap(tmp(9290).AutocompleterResultTypes.TEXT_CHANNEL);
      const tmpResult = tmp(5754);
      const queryChannelsResult = obj12.queryChannels(obj);
      obj2 = {
        query: substr1,
        type: type2,
        guildId,
        limit: Infinity,
        allowEmptyQueries: true,
        allowSnowflake: true,
        boosters: null,
      };
      const obj16 = AutocompleteUtilsDefault;
      obj2.boosters = tmp(5754).getBoosterMap(tmp(9290).AutocompleterResultTypes.VOICE_CHANNEL);
      const combined = queryChannelsResult.concat(obj16.queryChannels(obj2));
      const mapped = combined.map((record) => record.record);
      if (0 === substr1.length) {
        _require = SelectedChannelStore.getChannelId(guildId);
        const found = mapped.find((id) => id.id === closure_0);
        if (null != found) {
          mapped.splice(mapped.indexOf(found), 1);
          mapped.unshift(found);
        }
      }
      importDefault = GuildChannelStore.getTextChannelNameDisambiguations(guildId);
      const tmpResult4 = tmp(5754);
      const obj19 = tmp7(12)(mapped);
      const takeResult = tmp7(12)(mapped).take(maxResults);
      let substr3 = tmp7(12)(mapped)
        .take(maxResults)
        .map((channel) => {
          let name;
          if (closure_1[channel.id] != null) {
            name = tmp.name;
          }
          if (name == null) {
            name = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
          }
          return { text: "" + name, channel, key: channel.id };
        })
        .value();
      const iter2 = tmp7(12)(mapped)
        .take(maxResults)
        .map((channel) => {
          let name;
          if (closure_1[channel.id] != null) {
            name = tmp.name;
          }
          if (name == null) {
            name = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
          }
          return { text: "" + name, channel, key: channel.id };
        });
    } else {
      if (searchContext.type === constants.DMS) {
        if (!StreamerModeStore.hidePersonalInformation) {
          const obj5 = { query: substr1, limit: maxResults, fuzzy: true, boosters: null };
          const obj4 = AutocompleteUtilsDefault;
          obj5.boosters = tmp(5754).getBoosterMap(tmp(9290).AutocompleterResultTypes.GROUP_DM);
          const tmpResult5 = tmp(5754);
          const queryGroupDMsResult = obj4.queryGroupDMs(obj5);
          const obj6 = { query: substr1, limit: maxResults, boosters: null };
          const obj8 = AutocompleteUtilsDefault;
          obj6.boosters = tmp(5754).getBoosterMap(tmp(9290).AutocompleterResultTypes.USER);
          const tmpResult6 = tmp(5754);
          const queryDMChannelsResult = obj8.queryDMChannels(obj6);
          const sorted = _modDef12(queryGroupDMsResult.concat(queryDMChannelsResult)).sort(tmp(9290).sortByMatchScore);
          const mapped1 = sorted.map((record) => {
            record = record.record;
            const obj = { text: record.comparator, channel: record, key: null };
            let id;
            if (record != null) {
              id = record.id;
            }
            obj.key = id;
            return obj;
          });
          const tmp6Result = _modDef12(queryGroupDMsResult.concat(queryDMChannelsResult));
          const iter = mapped1.filter((text) => null != text.text && null != text.channel && null != text.key);
          substr3 = mapped1
            .filter((text) => null != text.text && null != text.channel && null != text.key)
            .value()
            .slice(0, maxResults);
          const valueResult2 = mapped1
            .filter((text) => null != text.text && null != text.channel && null != text.key)
            .value();
        }
      }
      substr3 = [];
    }
    return substr3;
  }
  str2 = str;
  if (str.startsWith('"')) {
    const substr2 = str.substring(1);
    str2 = substr2.replaceAll(/\\(.)/g, (arg0, arg1) => arg1);
  }
}
function makeSearchTokenConfigs(arg0) {
  _require = arg0;
  const intl = require("util").intl;
  let items = [intl.string(require("util").t.tPZo4p), ,];
  const intl2 = require("util").intl;
  items[1] = intl2.string(require("util").t.JL7sRS);
  const intl3 = require("util").intl;
  items[2] = intl3.string(require("util").t.WjkIKU);
  const intl4 = require("util").intl;
  items1 = [, , , , , , , ,];
  items1[0] = intl4.string(require("util").t.TNLcpx);
  const intl5 = require("util").intl;
  items1[1] = intl5.string(require("util").t.XM9XGP);
  const intl6 = require("util").intl;
  items1[2] = intl6.string(require("util").t.ZNR2fi);
  const intl7 = require("util").intl;
  items1[3] = intl7.string(require("util").t["AV/v6i"]);
  const intl8 = require("util").intl;
  items1[4] = intl8.string(require("util").t["20uQR3"]);
  const intl9 = require("util").intl;
  items1[5] = intl9.string(require("util").t.F8Wf0e);
  const intl10 = require("util").intl;
  items1[6] = intl10.string(require("util").t.L4lxyE);
  const intl11 = require("util").intl;
  items1[7] = intl11.string(require("util").t.PJgX2h);
  const intl12 = require("util").intl;
  items1[8] = intl12.string(require("util").t.nrpA5E);
  let obj = {};
  obj2 = { regex: null, componentType: null, key: null, plainText: null, validator: null, getAutocompletions: null };
  const intl13 = require("util").intl;
  regExp = new RegExp("" + intl13.string(require("util").t["1TUdFo"]) + ":", "i");
  obj2.regex = regExp;
  obj2.componentType = obj.FILTER;
  const intl14 = require("util").intl;
  obj2.key = "" + intl14.string(require("util").t["1TUdFo"]) + ":";
  const intl15 = require("util").intl;
  obj2.plainText = intl15.string(require("util").t["1TUdFo"]);
  obj2.validator = function validator() {
    return closure_0(items1[20]).isFromUserFilterSupported();
  };
  obj2.getAutocompletions = getUserAutocompletions;
  obj[SearchTokenTypes.FILTER_FROM] = obj2;
  const obj3 = {
    follows: null,
    regex: regex3,
    validator: isValidUserAutocomplete,
    mutable: true,
    componentType: obj.ANSWER,
    queryKey: "author_id",
  };
  const items2 = [SearchTokenTypes.FILTER_FROM];
  obj3.follows = items2;
  obj[SearchTokenTypes.ANSWER_USERNAME_FROM] = obj3;
  const obj4 = {
    regex: null,
    componentType: null,
    key: null,
    plainText: null,
    validator: null,
    getAutocompletions: null,
  };
  const intl16 = require("util").intl;
  regExp1 = new RegExp("" + intl16.string(require("util").t["i96lO+"]) + ":", "i");
  obj4.regex = regExp1;
  obj4.componentType = obj.FILTER;
  const intl17 = require("util").intl;
  obj4.key = "" + intl17.string(require("util").t["i96lO+"]) + ":";
  const intl18 = require("util").intl;
  obj4.plainText = intl18.string(require("util").t["i96lO+"]);
  obj4.validator = function validator() {
    return closure_0(items1[20]).isMentionsUserFilterSupported();
  };
  obj4.getAutocompletions = getUserAutocompletions;
  obj[SearchTokenTypes.FILTER_MENTIONS] = obj4;
  const obj5 = {
    follows: null,
    regex: regex3,
    validator: isValidUserAutocomplete,
    mutable: true,
    componentType: obj.ANSWER,
    queryKey: "mentions",
  };
  const items3 = [SearchTokenTypes.FILTER_MENTIONS];
  obj5.follows = items3;
  obj[SearchTokenTypes.ANSWER_USERNAME_MENTIONS] = obj5;
  const obj6 = { regex: null, componentType: null, key: null, plainText: null, getAutocompletions: null };
  const intl19 = require("util").intl;
  const regExp2 = new RegExp("" + intl19.string(require("util").t.CqCvir) + ":", "i");
  obj6.regex = regExp2;
  obj6.componentType = obj.FILTER;
  const intl20 = require("util").intl;
  obj6.key = "" + intl20.string(require("util").t.CqCvir) + ":";
  const intl21 = require("util").intl;
  obj6.plainText = intl21.string(require("util").t.CqCvir);
  obj6.getAutocompletions = function getAutocompletions(query) {
    query = query.query;
    closure_0 = query.toLocaleLowerCase();
    const found = _modDef12(items1).filter((toLocaleLowerCase) =>
      items(items1[17])(closure_0, toLocaleLowerCase.toLocaleLowerCase()),
    );
    const arr = _modDef12(items1);
    const takeResult = found.take(query.maxResults);
    return found
      .take(query.maxResults)
      .map((text) => ({ text }))
      .value();
  };
  obj[SearchTokenTypes.FILTER_HAS] = obj6;
  const obj7 = {
    regex: require("SearchTokensUtils").makeRegexForOptionsWithNegation(items1),
    follows: null,
    validator: isValidHasAutocomplete,
    componentType: obj.ANSWER,
    queryKey: "has",
  };
  const items4 = [SearchTokenTypes.FILTER_HAS];
  obj7.follows = items4;
  obj[SearchTokenTypes.ANSWER_HAS] = obj7;
  const obj9 = { regex: null, key: null, plainText: null, componentType: null };
  const intl22 = require("util").intl;
  const regExp3 = new RegExp("" + intl22.string(require("util").t.RpRAZD) + ":", "i");
  obj9.regex = regExp3;
  const intl23 = require("util").intl;
  obj9.key = "" + intl23.string(require("util").t.RpRAZD) + ":";
  const intl24 = require("util").intl;
  obj9.plainText = intl24.string(require("util").t.RpRAZD);
  obj9.componentType = obj.FILTER;
  obj[SearchTokenTypes.FILTER_LINK_FROM] = obj9;
  const obj10 = {
    regex: require("SearchTokensUtils").GENERIC_REGEX,
    follows: null,
    mutable: true,
    componentType: obj.ANSWER,
    queryKey: "link_hostname",
  };
  const items5 = [SearchTokenTypes.FILTER_LINK_FROM];
  obj10.follows = items5;
  obj[SearchTokenTypes.ANSWER_LINK_FROM] = obj10;
  const obj11 = { regex: null, key: null, plainText: null, componentType: null };
  const intl25 = require("util").intl;
  const regExp4 = new RegExp("" + intl25.string(require("util").t.TMNjFm) + ":", "i");
  obj11.regex = regExp4;
  const intl26 = require("util").intl;
  obj11.key = "" + intl26.string(require("util").t.TMNjFm) + ":";
  const intl27 = require("util").intl;
  obj11.plainText = intl27.string(require("util").t.TMNjFm);
  obj11.componentType = obj.FILTER;
  obj[SearchTokenTypes.FILTER_FILE_TYPE] = obj11;
  const obj12 = {
    regex: require("SearchTokensUtils").GENERIC_REGEX,
    follows: null,
    mutable: true,
    componentType: obj.ANSWER,
    queryKey: "attachment_extension",
  };
  const items6 = [SearchTokenTypes.FILTER_FILE_TYPE];
  obj12.follows = items6;
  obj[SearchTokenTypes.ANSWER_FILE_TYPE] = obj12;
  const obj13 = { regex: null, key: null, plainText: null, componentType: null };
  const intl28 = require("util").intl;
  const regExp5 = new RegExp("" + intl28.string(require("util").t["5xtLRC"]) + ":", "i");
  obj13.regex = regExp5;
  const intl29 = require("util").intl;
  obj13.key = "" + intl29.string(require("util").t["5xtLRC"]) + ":";
  const intl30 = require("util").intl;
  obj13.plainText = intl30.string(require("util").t["5xtLRC"]);
  obj13.componentType = obj.FILTER;
  obj[SearchTokenTypes.FILTER_FILE_NAME] = obj13;
  const obj14 = {
    regex: require("SearchTokensUtils").GENERIC_REGEX,
    follows: null,
    mutable: true,
    componentType: obj.ANSWER,
    queryKey: "attachment_filename",
  };
  const items7 = [SearchTokenTypes.FILTER_FILE_NAME];
  obj14.follows = items7;
  obj[SearchTokenTypes.ANSWER_FILE_NAME] = obj14;
  const obj15 = { regex: null, componentType: null, key: null, plainText: null, getAutocompletions: null };
  const intl31 = require("util").intl;
  const regExp6 = new RegExp("" + intl31.string(require("util").t["qZ+7BA"]) + ":", "i");
  obj15.regex = regExp6;
  obj15.componentType = obj.FILTER;
  const intl32 = require("util").intl;
  obj15.key = "" + intl32.string(require("util").t["qZ+7BA"]) + ":";
  const intl33 = require("util").intl;
  obj15.plainText = intl33.string(require("util").t["qZ+7BA"]);
  obj15.getAutocompletions = function getAutocompletions(query) {
    query = query.query;
    const FILTER_BEFORE = query.toLocaleLowerCase();
    const tmp = closure_30();
    const found = items(items1[11])(closure_30()).filter((toLocaleLowerCase) =>
      items(items1[17])(closure_0, toLocaleLowerCase.toLocaleLowerCase()),
    );
    const arr = items(items1[11])(closure_30());
    const takeResult = found.take(query.maxResults);
    const iter = found.take(query.maxResults).map((text) => ({ text }));
    return found
      .take(query.maxResults)
      .map((text) => ({ text }))
      .value()
      .map((text) => {
        const obj = {};
        const merged = Object.assign(text);
        obj.group = group;
        obj.key = "" + group + "-" + text.text;
        return obj;
      });
  };
  obj[SearchTokenTypes.FILTER_BEFORE] = obj15;
  const obj16 = { regex: null, componentType: null, key: null, plainText: null, getAutocompletions: null };
  const intl34 = require("util").intl;
  const obj8 = require("SearchTokensUtils");
  const intl35 = require("util").intl;
  const regExp7 = new RegExp(
    "" + "(" + intl34.string(require("util").t.tIxkOo) + "|" + intl35.string(require("util").t.h2NzSd) + ")" + ":",
    "i",
  );
  obj16.regex = regExp7;
  obj16.componentType = obj.FILTER;
  const intl36 = require("util").intl;
  obj16.key = "" + intl36.string(require("util").t.h2NzSd) + ":";
  const intl37 = require("util").intl;
  obj16.plainText = intl37.string(require("util").t.h2NzSd);
  obj16.getAutocompletions = function getAutocompletions(query) {
    query = query.query;
    const FILTER_ON = query.toLocaleLowerCase();
    const tmp = closure_30();
    const found = items(items1[11])(closure_30()).filter((toLocaleLowerCase) =>
      items(items1[17])(closure_0, toLocaleLowerCase.toLocaleLowerCase()),
    );
    const arr = items(items1[11])(closure_30());
    const takeResult = found.take(query.maxResults);
    const iter = found.take(query.maxResults).map((text) => ({ text }));
    return found
      .take(query.maxResults)
      .map((text) => ({ text }))
      .value()
      .map((text) => {
        const obj = {};
        const merged = Object.assign(text);
        obj.group = group;
        obj.key = "" + group + "-" + text.text;
        return obj;
      });
  };
  obj[SearchTokenTypes.FILTER_ON] = obj16;
  const obj17 = { regex: null, componentType: null, key: null, plainText: null, getAutocompletions: null };
  const intl38 = require("util").intl;
  const regExp8 = new RegExp("" + intl38.string(require("util").t.KSDx7M) + ":", "i");
  obj17.regex = regExp8;
  obj17.componentType = obj.FILTER;
  const intl39 = require("util").intl;
  obj17.key = "" + intl39.string(require("util").t.KSDx7M) + ":";
  const intl40 = require("util").intl;
  obj17.plainText = intl40.string(require("util").t.KSDx7M);
  obj17.getAutocompletions = function getAutocompletions(query) {
    query = query.query;
    const group = query.toLocaleLowerCase();
    const tmp = closure_30();
    const found = items(items1[11])(closure_30()).filter((toLocaleLowerCase) =>
      items(items1[17])(closure_0, toLocaleLowerCase.toLocaleLowerCase()),
    );
    const arr = items(items1[11])(closure_30());
    const takeResult = found.take(query.maxResults);
    const iter = found.take(query.maxResults).map((text) => ({ text }));
    return found
      .take(query.maxResults)
      .map((text) => ({ text }))
      .value()
      .map((text) => {
        const obj = {};
        const merged = Object.assign(text);
        obj.group = group;
        obj.key = "" + group + "-" + text.text;
        return obj;
      });
  };
  obj[SearchTokenTypes.FILTER_AFTER] = obj17;
  const obj18 = {
    regex: regExp,
    follows: null,
    componentType: obj.ANSWER,
    mutable: true,
    validator(getFullMatch) {
      return dateValidator(getFullMatch, "before");
    },
  };
  const items8 = [SearchTokenTypes.FILTER_BEFORE];
  obj18.follows = items8;
  obj[SearchTokenTypes.ANSWER_BEFORE] = obj18;
  const obj19 = {
    regex: regExp,
    follows: null,
    componentType: obj.ANSWER,
    mutable: true,
    validator(getFullMatch) {
      return dateValidator(getFullMatch, "on");
    },
  };
  const items9 = [SearchTokenTypes.FILTER_ON];
  obj19.follows = items9;
  obj[SearchTokenTypes.ANSWER_ON] = obj19;
  const obj20 = {
    regex: regExp,
    follows: null,
    componentType: obj.ANSWER,
    mutable: true,
    validator(getFullMatch) {
      return dateValidator(getFullMatch, "after");
    },
  };
  const items10 = [SearchTokenTypes.FILTER_AFTER];
  obj20.follows = items10;
  obj[SearchTokenTypes.ANSWER_AFTER] = obj20;
  const obj21 = {
    regex: null,
    componentType: null,
    key: null,
    plainText: null,
    validator: null,
    getAutocompletions: null,
  };
  const intl41 = require("util").intl;
  const regExp9 = new RegExp("" + intl41.string(require("util").t.WNpFHa) + ":", "i");
  obj21.regex = regExp9;
  obj21.componentType = obj.FILTER;
  const intl42 = require("util").intl;
  obj21.key = "" + intl42.string(require("util").t.WNpFHa) + ":";
  const intl43 = require("util").intl;
  obj21.plainText = intl43.string(require("util").t.WNpFHa);
  obj21.validator = function validator() {
    let selectedSearchContext = closure_0;
    if (closure_0 == null) {
      selectedSearchContext = SearchAutocompleteStore.getSelectedSearchContext();
    }
    let result = null != selectedSearchContext;
    if (result) {
      result = SearchTokenStreamerModeUtils.isInChannelFilterSupported(selectedSearchContext);
    }
    return result;
  };
  obj21.getAutocompletions = getChannelAutocompletions;
  obj[SearchTokenTypes.FILTER_IN] = obj21;
  const obj22 = {
    regex: require("SearchTokensUtils").ANSWER_IN_REGEX,
    mutable: true,
    follows: null,
    componentType: obj.ANSWER,
    validator(token) {
      let selectedSearchContext = closure_0;
      if (closure_0 == null) {
        selectedSearchContext = SearchAutocompleteStore.getSelectedSearchContext();
      }
      let tmp3 = null != selectedSearchContext;
      if (tmp3) {
        tmp3 = isValidChannelAutocomplete(token, selectedSearchContext);
      }
      return tmp3;
    },
    queryKey: "channel_id",
  };
  const items11 = [SearchTokenTypes.FILTER_IN];
  obj22.follows = items11;
  obj[SearchTokenTypes.ANSWER_IN] = obj22;
  const obj23 = { regex: null, componentType: null, key: null, plainText: null, getAutocompletions: null };
  const intl44 = require("util").intl;
  const regExp10 = new RegExp("" + intl44.string(require("util").t["0B74eY"]) + ":", "i");
  obj23.regex = regExp10;
  obj23.componentType = obj.FILTER;
  const intl45 = require("util").intl;
  obj23.key = "" + intl45.string(require("util").t["0B74eY"]) + ":";
  const intl46 = require("util").intl;
  obj23.plainText = intl46.string(require("util").t["0B74eY"]);
  obj23.getAutocompletions = function getAutocompletions() {
    items = [{ text: "true" }, { text: "false" }];
    return items;
  };
  obj[SearchTokenTypes.FILTER_PINNED] = obj23;
  const obj24 = {
    regex: regExp1,
    componentType: obj.ANSWER,
    follows: null,
    queryKey: "pinned",
    validator: isValidPinnedAutocomplete,
  };
  const items12 = [SearchTokenTypes.FILTER_PINNED];
  obj24.follows = items12;
  obj[SearchTokenTypes.ANSWER_PINNED] = obj24;
  const obj25 = { regex: null, componentType: null, key: null, plainText: null, getAutocompletions: null };
  const intl47 = require("util").intl;
  const regExp11 = new RegExp("" + intl47.string(require("util").t.us8IQi) + ":", "i");
  obj25.regex = regExp11;
  obj25.componentType = obj.FILTER;
  const intl48 = require("util").intl;
  obj25.key = "" + intl48.string(require("util").t.us8IQi) + ":";
  const intl49 = require("util").intl;
  obj25.plainText = intl49.string(require("util").t.us8IQi);
  obj25.getAutocompletions = function getAutocompletions(query) {
    query = query.query;
    closure_0 = query.toLocaleLowerCase();
    const found = _modDef12(items).filter((toLocaleLowerCase) =>
      items(items1[17])(closure_0, toLocaleLowerCase.toLocaleLowerCase()),
    );
    const arr = _modDef12(items);
    const takeResult = found.take(query.maxResults);
    return found
      .take(query.maxResults)
      .map((text) => ({ text }))
      .value();
  };
  obj[SearchTokenTypes.FILTER_AUTHOR_TYPE] = obj25;
  const obj26 = { regex: null, follows: null, validator: null, componentType: null, queryKey: "author_type" };
  const stringResult = intl34.string(require("util").t.tIxkOo);
  obj26.regex = require("SearchTokensUtils").makeRegexForOptionsWithNegation(items);
  const items13 = [SearchTokenTypes.FILTER_AUTHOR_TYPE];
  obj26.follows = items13;
  obj26.validator = isValidAuthorTypeAutocomplete;
  obj26.componentType = obj.ANSWER;
  obj[SearchTokenTypes.ANSWER_AUTHOR_TYPE] = obj26;
  return obj;
}
let GuildChannelStore = fn(4467);
({ GUILD_SELECTABLE_CHANNELS_KEY: hasOwnProperty, GUILD_VOCAL_CHANNELS_KEY: metroRequire } = GuildChannelStore);
let GuildChannelStore = GuildChannelStore_mod;
const Constants = fn(1074);
({ ME: closure_14, SearchTokenTypes } = Constants);
({
  SEARCH_DATE_FORMAT: closure_16,
  SearchTypes: closure_17,
  IS_SEARCH_FILTER_TOKEN: closure_18,
  ID_REGEX: closure_19,
} = Constants);
let regExp = new RegExp(
  "(?:\\s*(([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})|([0-9]{4})-([0-9]{1,2})|\\d{4}|([^\\d\\s]+)))",
  "i",
);
let regExp1 = new RegExp("\\s*(true|false)", "i");
const re33 = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
const ComponentTypes = { FILTER: "FILTER", ANSWER: "ANSWER" };
let obj2 = {};
let closure_37 = {
  [SearchTokenTypes.FILTER_HAS]: SearchTokenTypes.ANSWER_HAS,
  [SearchTokenTypes.FILTER_AUTHOR_TYPE]: SearchTokenTypes.ANSWER_AUTHOR_TYPE,
  [SearchTokenTypes.FILTER_PINNED]: SearchTokenTypes.ANSWER_PINNED,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/tokens/SearchTokens.tsx");

export default obj2;
export { isValidUserAutocomplete };
export { isValidChannelAutocomplete };
export const getLocalizedHasAnswer = function getLocalizedHasAnswer(str) {
  const startsWithResult = str.startsWith("-");
  let substr = str;
  if (startsWithResult) {
    substr = str.slice(1);
  }
  const entries = Object.entries(getHasMap());
  const found = entries.find((item) => {
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
  const intl = util.intl;
  obj[intl.string(util.t.tPZo4p)] = "user";
  const intl2 = util.intl;
  obj[intl2.string(util.t.JL7sRS)] = "bot";
  const intl3 = util.intl;
  obj[intl3.string(util.t.WjkIKU)] = "webhook";
  const startsWithResult = str.startsWith("-");
  let substr = str;
  if (startsWithResult) {
    substr = str.slice(1);
  }
  const entries = Object.entries(obj);
  const found = entries.find((item) => {
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
  return _modDef12.sample(generateDateAutocompletions());
};
export { getUserAutocompletions };
export { ComponentTypes };
export const buildCrossDMSearchTokensConfig = function buildCrossDMSearchTokensConfig() {
  return makeSearchTokenConfigs({ type: constants.DMS });
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
    const intl = util.intl;
    let startsWithResult = intl.string(util.t.Qf3ptv).startsWith(replaced);
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
    const items = ["filter:" + trimmed, trimmed];
    const token = new QueryTokenizer.Token(items, tmp);
    if (SearchTokenTypes.ANSWER_HAS === tmp) {
      return SearchTokensUtils.validateForMapWithNegation("has", getHasMap(), token);
    } else if (SearchTokenTypes.ANSWER_AUTHOR_TYPE === tmp) {
      const obj = {};
      const intl = util.intl;
      obj[intl.string(util.t.tPZo4p)] = "user";
      const intl2 = util.intl;
      obj[intl2.string(util.t.JL7sRS)] = "bot";
      const intl3 = util.intl;
      obj[intl3.string(util.t.WjkIKU)] = "webhook";
      return SearchTokensUtils.validateForMapWithNegation("author_type", obj, token);
    } else if (SearchTokenTypes.ANSWER_PINNED === tmp) {
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

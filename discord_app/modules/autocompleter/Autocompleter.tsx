// discord_app/modules/autocompleter/Autocompleter.tsx
import handleUserUpdate from "handleUserUpdate";
import fromPath from "fromPath";
import { GUILD_VOCAL_CHANNELS_KEY } from "comparator";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import mergeGuildAvatar from "mergeGuildAvatar";
import { t } from "../../../_runtime/04060_t.js";
import { NOOP } from "../../utils/AutocompleteUtils.tsx";
import { getGuildNameSuggestion } from "../../utils/GuildUtils.tsx";
import { isNullOrEmpty } from "../../utils/StringUtils.tsx";
import { CodedLinkType } from "../coded_links/CodedLink.tsx";
import { getPathsFromURL } from "../coded_links/findCodedLinks.tsx";
import { queryGamesAutocomplete } from "../games/autocomplete/queryGamesAutocomplete.tsx";
import { getTransformedUser } from "UserSearchManager.tsx";

const require = arg1;
function getAutocompleterBoosterMap(USER, options) {
  if (options.frecencyBoosters) {
    let boosterMap = NOOP.getBoosterMap(USER);
    const obj2 = NOOP;
  } else {
    boosterMap = {};
  }
  return boosterMap;
}
require("HeaderRecord").AutocompleterResultTypes;
let closure_9 = Object.freeze({});
let result = require("comparator").fileFinishedImporting("modules/autocompleter/Autocompleter.tsx");
class Autocompleter {
  constructor(arg0, arg1) {
    num = importDefault;
    if (importDefault === undefined) {
      num = 100;
    }
    tmp = importAll;
    if (importAll === undefined) {
      tmp = getAutocompleterBoosterMap;
    }
    num2 = module;
    if (module === undefined) {
      num2 = 0;
    }
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.query = "";
    obj.options = getAutocompleterBoosterMap;
    obj.results = [];
    obj._userResults = [];
    obj._groupDMResults = [];
    obj._textChannelResults = [];
    obj._voiceChannelResults = [];
    obj._guildResults = [];
    obj._applicationResults = [];
    obj._gameProfileResults = [];
    obj._linkResults = [];
    obj._inAppNavigations = [];
    obj._userBlacklist = null;
    obj._refetched = false;
    obj.parseUserResults = function parseUserResults(results) {
      let comparator;
      let obj;
      let score;
      results = results.results;
      if (obj._include(outer1_8.USER)) {
        obj._userResults = [];
        const iter = results[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          ({ score, comparator } = nextResult);
          let tmp9 = outer1_7;
          let user = outer1_7.getUser(nextResult.id);
          if (null != user) {
            let tmp12 = obj;
            let tmp13 = obj;
            let _userResults = obj._userResults;
            obj = { type: null, record: null, score: null, comparator: null };
            let tmp14 = outer1_8;
            obj[0] = outer1_8.USER;
            let tmp15 = user;
            obj[1] = tmp11;
            let tmp16 = obj;
            let tmp17 = outer1_2;
            let obj2 = obj(outer1_2[6]);
            let tmp18 = score;
            obj[2] = obj2.calculateScore(score);
            let tmp19 = comparator;
            obj[3] = tmp19;
            let arr = _userResults.push(obj);
          }
          continue;
        }
        const result = obj._willRefetchIfSingleCategoryResults();
        let tmp23 = !result;
        if (!result) {
          tmp23 = obj3._userResults.length > obj3._limit;
        }
        if (tmp23) {
          obj3._userResults.length = obj3._limit;
        }
        if (result) {
          const result1 = obj3.refetchIfSingleCategoryResults();
        }
        obj.updateAllResults();
      }
    };
    obj.updateAllResults = function updateAllResults() {
      clearTimeout(obj._asyncTimeout);
      const items = [];
      HermesBuiltin.arraySpread(obj._inAppNavigations, HermesBuiltin.arraySpread(obj._linkResults, HermesBuiltin.arraySpread(obj._gameProfileResults, HermesBuiltin.arraySpread(obj._guildResults, HermesBuiltin.arraySpread(obj._voiceChannelResults, HermesBuiltin.arraySpread(obj._textChannelResults, HermesBuiltin.arraySpread(obj._groupDMResults, HermesBuiltin.arraySpread(obj._userResults, 0))))))));
      const tmp2 = outer1_1(outer1_2[16]);
      const tmp2Result = outer1_1(outer1_2[16])(items);
      const uniqByResult = outer1_1(outer1_2[16])(items).uniqBy((type) => "" + type.type + "-" + type.record.id);
      obj.results = outer1_1(outer1_2[16])(items).uniqBy((type) => "" + type.type + "-" + type.record.id).sort(outer1_1(outer1_2[17])).value();
      obj.onResultsChange(obj.results, obj.query);
    };
    obj.onResultsChange = global;
    setOptionsResult = obj.setOptions(tmp, true);
    obj._limit = num;
    obj._refetchForSingleCategoryLimit = num2;
    searchContext = obj.createSearchContext();
    setResultTypesResult = obj.setResultTypes(arg1);
    return obj;
  }
}
const prototype = Autocompleter.prototype;
prototype["createSearchContext"] = function createSearchContext() {
  const self = this;
  if (null == this.userSearchContext) {
    self.userSearchContext = getTransformedUser.getUserSearchContext(self.parseUserResults, self._limit);
    const obj = getTransformedUser;
  }
};
prototype["setLimit"] = function setLimit(_limit) {
  const self = this;
  const userSearchContext = this.userSearchContext;
  this._limit = _limit;
  if (null != userSearchContext) {
    userSearchContext.setLimit(_limit);
  }
  if (self._userResults.length > self._limit) {
    self._userResults.length = self._limit;
  }
  if (self._groupDMResults.length > self._limit) {
    self._groupDMResults.length = self._limit;
  }
  if (self._textChannelResults.length > self._limit) {
    self._textChannelResults.length = self._limit;
  }
  if (self._voiceChannelResults.length > self._limit) {
    self._voiceChannelResults.length = self._limit;
  }
  if (self._guildResults.length > self._limit) {
    self._guildResults.length = self._limit;
  }
  if (self._applicationResults.length > self._limit) {
    self._applicationResults.length = self._limit;
  }
  if (self._gameProfileResults.length > self._limit) {
    self._gameProfileResults.length = self._limit;
  }
  if (self._linkResults.length > self._limit) {
    self._linkResults.length = self._limit;
  }
  if (self._inAppNavigations.length > self._limit) {
    self._inAppNavigations.length = self._limit;
  }
};
prototype["setRefetchForSingleCategoryLimit"] = function setRefetchForSingleCategoryLimit(_refetchForSingleCategoryLimit) {
  this._refetchForSingleCategoryLimit = _refetchForSingleCategoryLimit;
};
prototype["setResultTypes"] = function setResultTypes(items1) {
  let set = null;
  if (null != items1) {
    const _Set = Set;
    set = new Set(items1);
  }
  const self = this;
  this.resultTypes = set;
  self._userResults = this._include(AutocompleterResultTypes.USER) ? self._userResults : [];
  self._groupDMResults = self._include(AutocompleterResultTypes.GROUP_DM) ? self._groupDMResults : [];
  self._textChannelResults = self._include(AutocompleterResultTypes.TEXT_CHANNEL) ? self._textChannelResults : [];
  self._voiceChannelResults = self._include(AutocompleterResultTypes.VOICE_CHANNEL) ? self._voiceChannelResults : [];
  self._guildResults = self._include(AutocompleterResultTypes.GUILD) ? self._guildResults : [];
  self._applicationResults = self._include(AutocompleterResultTypes.APPLICATION) ? self._applicationResults : [];
  self._gameProfileResults = self._include(AutocompleterResultTypes.GAME_PROFILE) ? self._gameProfileResults : [];
  self._linkResults = self._include(AutocompleterResultTypes.LINK) ? self._linkResults : [];
  self._inAppNavigations = self._include(AutocompleterResultTypes.IN_APP_NAVIGATION) ? self._inAppNavigations : [];
};
prototype["_include"] = function _include(USER) {
  let hasItem = null == this.resultTypes;
  if (!hasItem) {
    const resultTypes = tmp.resultTypes;
    hasItem = resultTypes.has(USER);
  }
  return hasItem;
};
prototype["_isAsyncSearch"] = function _isAsyncSearch() {
  let _includeResult = this._include(AutocompleterResultTypes.USER);
  if (_includeResult) {
    const options = this.options;
    let thread;
    if (options != null) {
      const userFilters = options.userFilters;
      if (userFilters != null) {
        thread = userFilters.thread;
      }
    }
    _includeResult = null != thread;
  }
  return _includeResult;
};
prototype["setOptions"] = function setOptions(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const self = this;
  let tmp = arg0;
  if (flag) {
    const obj = {};
    const merged = Object.assign(self.options);
    const merged1 = Object.assign(arg0);
    tmp = obj;
  }
  self.options = tmp;
  if (null != self.options.blacklist) {
    const _Array = Array;
    const mapped = Array.from(self.options.blacklist).map((str) => {
      str = "";
      if (str.startsWith("user:")) {
        str = str.replace("user:", "");
      }
      return str;
    });
    self._userBlacklist = mapped.filter((arg0) => "" !== arg0);
    const arr = Array.from(self.options.blacklist);
  } else {
    self._userBlacklist = null;
  }
};
prototype["_willRefetchIfSingleCategoryResults"] = function _willRefetchIfSingleCategoryResults() {
  const self = this;
  let _refetched = this._refetched;
  if (!_refetched) {
    _refetched = self._refetchForSingleCategoryLimit <= 5;
  }
  let tmp = !_refetched;
  if (!_refetched) {
    let tmp3 = null == self.options.voiceChannelGuildFilter && null == self.options.userFilters;
    if (tmp3) {
      const items = [, , , , , , , , ];
      ({ _userResults: arr[0], _groupDMResults: arr[1], _textChannelResults: arr[2], _voiceChannelResults: arr[3], _guildResults: arr[4], _applicationResults: arr[5], _gameProfileResults: arr[6], _linkResults: arr[7], _inAppNavigations: arr[8] } = self);
      tmp3 = 1 === items.filter((arg0) => arg0.length > 0).length;
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype["refetchIfSingleCategoryResults"] = function refetchIfSingleCategoryResults() {
  const self = this;
  if (this._willRefetchIfSingleCategoryResults()) {
    self._refetched = true;
    const query = self.query;
    if (self._userResults.length > 0) {
      self.queryUsers(query, null, self._refetchForSingleCategoryLimit);
    } else if (self._groupDMResults.length > 0) {
      self._groupDMResults = self.queryGroupDMs(query, self._refetchForSingleCategoryLimit);
    } else if (self._textChannelResults.length > 0) {
      self._textChannelResults = self.queryTextChannels(query, self._refetchForSingleCategoryLimit);
    } else if (self._voiceChannelResults.length > 0) {
      self._voiceChannelResults = self.queryVoiceChannels(query, self._refetchForSingleCategoryLimit);
    } else if (self._guildResults.length > 0) {
      self._guildResults = self.queryGuilds(query, self._refetchForSingleCategoryLimit);
    } else if (self._applicationResults.length > 0) {
      self._applicationResults = self.queryApplications(query, self._refetchForSingleCategoryLimit);
    } else if (self._gameProfileResults.length > 0) {
      self._gameProfileResults = self.queryGameProfiles(query, self._refetchForSingleCategoryLimit);
    } else if (self._linkResults.length > 0) {
      self._linkResults = self.queryLink(query, self._refetchForSingleCategoryLimit);
    } else if (self._inAppNavigations.length > 0) {
      self._inAppNavigations = self.queryInAppNavigations(query, self._refetchForSingleCategoryLimit);
    }
  }
};
prototype["search"] = function search(query) {
  let self = this;
  self = this;
  let closure_1 = query;
  const _require = arg1;
  this.query = query;
  this._refetched = false;
  if ("" === query.trim()) {
    self.clear();
    self.updateAllResults();
  } else {
    if (self.options.frecencyBoosters) {
      const FrecencyUserSettingsActionCreators = _require(self[8]).FrecencyUserSettingsActionCreators;
      let ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    } else {
      ifNecessary = Promise.resolve();
    }
    ifNecessary.finally(() => {
      self.queryUsers(closure_1, closure_0, self._limit);
      self._groupDMResults = self.queryGroupDMs(closure_1, self._limit);
      self._textChannelResults = self.queryTextChannels(closure_1, self._limit);
      self._voiceChannelResults = self.queryVoiceChannels(closure_1, self._limit);
      self._guildResults = self.queryGuilds(closure_1, self._limit);
      self._applicationResults = self.queryApplications(closure_1, self._limit);
      self._gameProfileResults = self.queryGameProfiles(closure_1, self._limit);
      self._inAppNavigations = self.queryInAppNavigations(closure_1, self._limit);
      if (self._isAsyncSearch()) {
        const _clearTimeout = clearTimeout;
        clearTimeout(obj._asyncTimeout);
        const _setTimeout = setTimeout;
        obj._asyncTimeout = setTimeout(obj.updateAllResults, 300);
      } else if (!obj._include(outer1_8.USER)) {
        obj.updateAllResults();
      }
    });
  }
};
prototype["clear"] = function clear() {
  const self = this;
  const userSearchContext = this.userSearchContext;
  if (null != userSearchContext) {
    userSearchContext.clearQuery();
  }
  self.results = [];
  self._userResults = [];
  self._groupDMResults = [];
  self._textChannelResults = [];
  self._voiceChannelResults = [];
  self._guildResults = [];
  self._applicationResults = [];
  self._gameProfileResults = [];
  self._linkResults = [];
  self._inAppNavigations = [];
};
prototype["clean"] = function clean() {
  this.clear();
  this.destroy();
  this.query = "";
  this.updateAllResults();
};
prototype["pause"] = function pause() {
  const userSearchContext = this.userSearchContext;
  if (userSearchContext != null) {
    const unsubscribe = userSearchContext.unsubscribe;
    if (unsubscribe != null) {
      unsubscribe();
    }
  }
};
prototype["resume"] = function resume() {
  const userSearchContext = this.userSearchContext;
  if (userSearchContext != null) {
    const subscribe = userSearchContext.subscribe;
    if (subscribe != null) {
      const subscription = subscribe();
    }
  }
};
prototype["destroy"] = function destroy() {
  const userSearchContext = this.userSearchContext;
  if (null != userSearchContext) {
    userSearchContext.destroy();
    tmp.userSearchContext = null;
  }
};
prototype["queryTextChannels"] = function queryTextChannels(closure_1, _limit) {
  const self = this;
  if (this._include(AutocompleterResultTypes.TEXT_CHANNEL)) {
    if (self.options.frecencyBoosters) {
      let boosterMap = blacklist(5199).getBoosterMap(tmp);
      const obj2 = blacklist(5199);
    } else {
      boosterMap = {};
    }
    const options = self.options;
    blacklist = options.blacklist;
    let fn;
    if (null != blacklist) {
      fn = (id) => !blacklist.has("channel:" + id.id);
    }
    const obj = { query: null, guildId: null, limit: null, fuzzy: true, allowSnowflake: null, filter: null, boosters: null };
    obj[0] = closure_1;
    obj[2] = _limit;
    obj[4] = options.allowSnowflake;
    obj[5] = fn;
    obj[6] = boosterMap;
    return NOOP.queryChannels(obj);
  } else {
    return [];
  }
};
prototype["queryVoiceChannels"] = function queryVoiceChannels(closure_1, _limit) {
  let allowSnowflake;
  let voiceChannelGuildFilter;
  const self = this;
  if (this._include(AutocompleterResultTypes.VOICE_CHANNEL)) {
    ({ allowSnowflake, voiceChannelGuildFilter } = self.options);
    if (self.options.frecencyBoosters) {
      let boosterMap = NOOP.getBoosterMap(tmp);
      const obj2 = NOOP;
    } else {
      boosterMap = {};
    }
    const obj = { query: null, guildId: null, limit: null, fuzzy: true, type: null, allowSnowflake: null, boosters: null };
    obj[0] = closure_1;
    obj[1] = voiceChannelGuildFilter;
    obj[2] = _limit;
    obj[4] = GUILD_VOCAL_CHANNELS_KEY;
    obj[5] = allowSnowflake;
    obj[6] = boosterMap;
    return NOOP.queryChannels(obj);
  } else {
    return [];
  }
};
prototype["queryGuilds"] = function queryGuilds(arg0, arg1) {
  const self = this;
  if (this._include(AutocompleterResultTypes.GUILD)) {
    if (self.options.frecencyBoosters) {
      let boosterMap = blacklist(5199).getBoosterMap(tmp);
      const obj2 = blacklist(5199);
    } else {
      boosterMap = {};
    }
    const options = self.options;
    blacklist = options.blacklist;
    let fn;
    if (null != blacklist) {
      fn = (id) => !blacklist.has("guild:" + id.id);
    }
    const obj = { query: null, limit: null, fuzzy: true, filter: null, boosters: null, allowSnowflake: null };
    obj[0] = arg0;
    obj[1] = arg1;
    obj[3] = fn;
    obj[4] = boosterMap;
    obj[5] = options.allowSnowflake;
    return NOOP.queryGuilds(obj);
  } else {
    return [];
  }
};
prototype["queryUsers"] = function queryUsers(arg0, arg1, arg2) {
  const self = this;
  const userSearchContext = this.userSearchContext;
  if (null != userSearchContext) {
    if (self._include(AutocompleterResultTypes.USER)) {
      const options = self.options;
      const userFilters = options.userFilters;
      const tmp2 = getAutocompleterBoosterMap(tmp25.USER, self.options);
      let thread;
      if (userFilters != null) {
        thread = userFilters.thread;
      }
      if (null == thread) {
        if (undefined !== arg1) {
          const members = getGuildNameSuggestion.requestMembers(arg1, arg0, 100);
          const obj4 = getGuildNameSuggestion;
        }
        userSearchContext.setLimit(arg2);
        let obj = { query: null, filters: null, blacklist: null, boosters: null };
        obj[0] = arg0;
        obj[1] = userFilters;
        obj[2] = self._userBlacklist;
        obj[3] = tmp2;
        userSearchContext.setQuery(obj);
      } else {
        memberListSections = memberListSections.getMemberListSections(userFilters.thread);
        const items = [];
        for (const key10017 in memberListSections) {
          let tmp29 = key10017;
          let tmp30 = memberListSections[key10017];
          let userIds = tmp30.userIds;
          let tmp31 = userIds;
          let tmp6 = userIds;
          for (const item10019 of userIds) {
            let tmp7 = item10019;
            let friends;
            if (userFilters != null) {
              friends = userFilters.friends;
            }
            if (friends) {
              let tmp9 = friend;
              let tmp10 = item10019;
              friends = !friend.isFriend(tmp7);
            }
            if (!friends) {
              let _userBlacklist = self._userBlacklist;
              let hasItem;
              if (_userBlacklist != null) {
                let tmp12 = item10019;
                hasItem = _userBlacklist.includes(tmp7);
              }
              friends = hasItem;
            }
            if (!friends) {
              obj = { userId: null, nick: null };
              let tmp13 = item10019;
              obj[0] = tmp7;
              let tmp14 = tmp30.usersById[tmp7];
              let displayName;
              if (tmp14 != null) {
                displayName = tmp14.displayName;
              }
              obj[1] = displayName;
              let arr = items.push(obj);
            }
            continue;
          }
        }
        obj = { query: null, users: null, limit: null, boosters: null, allowSnowflake: null };
        obj[0] = arg0;
        obj[1] = items;
        obj[2] = arg2;
        obj[3] = tmp2;
        obj[4] = options.allowSnowflake;
        self._userResults = NOOP.queryUsers(obj);
        const obj2 = NOOP;
      }
    }
    tmp25 = AutocompleterResultTypes;
  }
};
prototype["queryGroupDMs"] = function queryGroupDMs(arg0, arg1) {
  const self = this;
  if (this._include(AutocompleterResultTypes.GROUP_DM)) {
    const blacklist = self.options.blacklist;
    if (self.options.frecencyBoosters) {
      let boosterMap = blacklist(5199).getBoosterMap(tmp);
      const obj2 = blacklist(5199);
    } else {
      boosterMap = {};
    }
    let fn;
    if (null != blacklist) {
      fn = (id) => !blacklist.has("channel:" + id.id);
    }
    const obj = { query: null, limit: null, fuzzy: true, filter: null, boosters: null };
    obj[0] = arg0;
    obj[1] = arg1;
    obj[3] = fn;
    obj[4] = boosterMap;
    return NOOP.queryGroupDMs(obj);
  } else {
    return [];
  }
};
prototype["queryApplications"] = function queryApplications(arg0, arg1) {
  if (this._include(AutocompleterResultTypes.APPLICATION)) {
    let obj = NOOP;
    obj = { query: null, limit: null, fuzzy: true };
    obj[0] = arg0;
    obj[1] = arg1;
    let queryApplicationsResult = obj.queryApplications(obj);
  } else {
    queryApplicationsResult = [];
  }
  return queryApplicationsResult;
};
prototype["queryGameProfiles"] = function queryGameProfiles(query, _limit) {
  if (this._include(AutocompleterResultTypes.GAME_PROFILE)) {
    let result = _queryGamesAutocomplete.queryGamesAutocomplete(query);
    if (result == null) {
      result = [];
    }
    _require = query.toLocaleLowerCase();
    const substr = result.slice(0, _limit);
    return substr.map((name) => {
      const obj = { type: outer1_8.GAME_PROFILE, record: name, score: null, comparator: null, sortable: null };
      const obj2 = callback(outer1_2[6]);
      obj[2] = obj2.calculateScore(callback(outer1_2[6]).getGameProfileMatchTier(name.name, callback, arg1));
      ({ name: obj[3], name } = name);
      obj[4] = name.toLocaleLowerCase();
      return obj;
    });
  } else {
    return [];
  }
};
prototype["refreshGameProfiles"] = function refreshGameProfiles() {
  const self = this;
  const isNullOrEmptyResult = isNullOrEmpty.isNullOrEmpty(this.query.trim());
  let _includeResult = !isNullOrEmptyResult;
  if (!isNullOrEmptyResult) {
    _includeResult = self._include(AutocompleterResultTypes.GAME_PROFILE);
  }
  if (_includeResult) {
    self._gameProfileResults = self.queryGameProfiles(self.query, self._limit);
    self.updateAllResults();
  }
};
prototype["queryLink"] = function queryLink(query, _refetchForSingleCategoryLimit) {
  let hostname;
  let pathname;
  if (this._include(AutocompleterResultTypes.LINK)) {
    let obj = getPathsFromURL;
    const findCodedLinkResult = obj.findCodedLink(query);
    let type;
    if (findCodedLinkResult != null) {
      type = findCodedLinkResult.type;
    }
    if (type === CodedLinkType.CodedLinkType.INVITE) {
      obj = { type: null, record: null, score: null };
      obj[0] = tmp.LINK;
      obj[1] = fromPath.fromInviteCode(findCodedLinkResult.code);
      let tmp3Result = tmp3(5199);
      obj[2] = tmp3Result.calculateScore(11);
      const items = [obj];
      return items;
    } else {
      const sanitizeUrlResult = t.sanitizeUrl(query);
      try {
        const _URL = URL;
        const uRL = new URL(sanitizeUrlResult);
        ({ pathname, hostname } = uRL);
        let str = "";
        if (undefined !== hostname) {
          str = hostname;
        }
        let tmp17Result = tmp17(1486);
        let isDiscordHostnameResult = tmp17Result.isDiscordHostname(str);
        if (!isDiscordHostnameResult) {
          const _window = window;
          isDiscordHostnameResult = window.location.host === uRL.host;
        }
        if (null !== pathname) {
          if (isDiscordHostnameResult) {
            tmp17Result = tmp17(1486);
            if (tmp17Result.isAppRoute(pathname)) {
              obj = { type: null, record: null, score: null };
              obj[0] = tmp.LINK;
              obj[1] = fromPath.fromPath(pathname);
              tmp3Result = tmp3(5199);
              obj[2] = tmp3Result.calculateScore(11);
              const items1 = [obj];
              let items2 = items1;
            }
            return items2;
          }
        }
        items2 = [];
      } catch (err) {
        return [];
      }
      const obj8 = t;
    }
  } else {
    return [];
  }
};
prototype["queryInAppNavigations"] = function queryInAppNavigations(arg0, arg1) {
  if (this._include(AutocompleterResultTypes.IN_APP_NAVIGATION)) {
    let obj = NOOP;
    obj = { query: null, limit: null, fuzzy: true };
    obj[0] = arg0;
    obj[1] = arg1;
    let result = obj.queryInAppNavigations(obj);
  } else {
    result = [];
  }
  return result;
};

export default Autocompleter;
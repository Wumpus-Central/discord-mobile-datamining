// === Module 7594: getAutocompleterBoosterMap ===

// Module 7594 (getAutocompleterBoosterMap)
import applyDefault from "apply" /* 12 */;
import isDiscordProxiedAssetUrlDefault from "isDiscordProxiedAssetUrl" /* 1487 */;
import isNullOrEmpty from "isNullOrEmpty" /* 1903 */;
import tDefault from "t" /* 4092 */;
import trimTrailingPunctuation from "trimTrailingPunctuation" /* 4358 */;
import CodedLinkType from "CodedLinkType" /* 4363 */;
import NOOP from "NOOP" /* 6714 */;
import NOOPDefault from "NOOP" /* 6714 */;
import sortByMatchScoreDefault from "sortByMatchScore" /* 6776 */;
import getGuildNameSuggestionDefault from "getGuildNameSuggestion" /* 6777 */;
import getTransformedUserDefault from "getTransformedUser" /* 7597 */;
import handleUserUpdate from "handleUserUpdate" /* 7595 */;
import fromPath from "fromPath" /* 7596 */;
import { GUILD_VOCAL_CHANNELS_KEY } from "comparator" /* 1980 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

require = fn;
function getAutocompleterBoosterMap(USER, options) {
  if (options.frecencyBoosters) {
    let boosterMap = NOOP.getBoosterMap(USER);
  } else {
    boosterMap = {};
  }
  return boosterMap;
}
require("HeaderRecord").AutocompleterResultTypes;
let closure_9 = Object.freeze({});
let result = require("obj132").fileFinishedImporting("modules/autocompleter/Autocompleter.tsx");
class Autocompleter {
  constructor(arg0, arg1) {
    num = importDefault;
    if (importDefault === undefined) {
      num = 100;
    }
    tmp = importAll;
    if (importAll === undefined) {
      tmp = closure_9;
    }
    num2 = module;
    if (module === undefined) {
      num2 = 0;
    }
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.query = "";
    obj.options = closure_9;
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
      results = results.results;
      if (obj._include(AutocompleterResultTypes.USER)) {
        tmp2._userResults = [];
        const iter = results[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          ({ score, comparator } = nextResult);
          let user = closure_1_7.getUser(nextResult.id);
          if (null != user) {
            let _userResults = obj._userResults;
            obj = { type: null, record: null, score: null, comparator: null };
            obj[0] = AutocompleterResultTypes.USER;
            obj[1] = tmp11;
            let obj2 = obj(dependencyMap[6]);
            obj[2] = obj2.calculateScore(score);
            obj[3] = comparator;
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
      tmp2 = obj;
    };
    obj.updateAllResults = function updateAllResults() {
      clearTimeout(obj._asyncTimeout);
      const items = [];
      HermesBuiltin.arraySpread(obj._inAppNavigations, HermesBuiltin.arraySpread(obj._linkResults, HermesBuiltin.arraySpread(obj._gameProfileResults, HermesBuiltin.arraySpread(obj._guildResults, HermesBuiltin.arraySpread(obj._voiceChannelResults, HermesBuiltin.arraySpread(obj._textChannelResults, HermesBuiltin.arraySpread(obj._groupDMResults, HermesBuiltin.arraySpread(obj._userResults, 0))))))));
      const tmp2Result = applyDefault(items);
      const uniqByResult = applyDefault(items).uniqBy((type) => "" + type.type + "-" + type.record.id);
      obj.results = applyDefault(items).uniqBy((type) => "" + type.type + "-" + type.record.id).sort(sortByMatchScoreDefault).value();
      obj.onResultsChange(obj.results, obj.query);
    };
    obj.onResultsChange = global;
    setOptionsResult = obj.setOptions(tmp, true);
    obj._limit = num;
    obj._refetchForSingleCategoryLimit = num2;
    searchContext = obj.createSearchContext();
    setResultTypesResult = obj.setResultTypes(fn);
    return obj;
  }
}
const prototype = Autocompleter.prototype;
prototype["createSearchContext"] = function createSearchContext() {
  const self = this;
  if (null == this.userSearchContext) {
    self.userSearchContext = getTransformedUserDefault.getUserSearchContext(self.parseUserResults, self._limit);
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
    const mapped = Array.from(self.options.blacklist).map((item, index) => {
      let str = "";
      if (item.startsWith("user:")) {
        str = item.replace("user:", "");
      }
      return str;
    });
    self._userBlacklist = mapped.filter((item, index) => "" !== item);
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
      tmp3 = 1 === items.filter((item, index) => item.length > 0).length;
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
  const self = this;
  closure_1 = query;
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
        clearTimeout(self._asyncTimeout);
        const _setTimeout = setTimeout;
        self._asyncTimeout = setTimeout(self.updateAllResults, 300);
      } else if (!self._include(AutocompleterResultTypes.USER)) {
        self.updateAllResults();
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
      let boosterMap = blacklist(6714).getBoosterMap(tmp);
      const obj2 = blacklist(6714);
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
    return NOOPDefault.queryChannels(obj);
  } else {
    return [];
  }
};
prototype["queryVoiceChannels"] = function queryVoiceChannels(closure_1, _limit) {
  const self = this;
  if (this._include(AutocompleterResultTypes.VOICE_CHANNEL)) {
    ({ allowSnowflake, voiceChannelGuildFilter } = self.options);
    if (self.options.frecencyBoosters) {
      let boosterMap = NOOP.getBoosterMap(tmp);
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
    return NOOPDefault.queryChannels(obj);
  } else {
    return [];
  }
};
prototype["queryGuilds"] = function queryGuilds(arg0, arg1) {
  const self = this;
  if (this._include(AutocompleterResultTypes.GUILD)) {
    if (self.options.frecencyBoosters) {
      let boosterMap = blacklist(6714).getBoosterMap(tmp);
      const obj2 = blacklist(6714);
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
    return NOOPDefault.queryGuilds(obj);
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
      const tmp2 = getAutocompleterBoosterMap(AutocompleterResultTypes.USER, self.options);
      let thread;
      if (userFilters != null) {
        thread = userFilters.thread;
      }
      if (null == thread) {
        if (undefined !== arg1) {
          const members = getGuildNameSuggestionDefault.requestMembers(arg1, arg0, 100);
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
          let tmp30 = memberListSections[key10017];
          let userIds = tmp30.userIds;
          for (const item10019 of userIds) {
            let friends;
            if (userFilters != null) {
              friends = userFilters.friends;
            }
            if (friends) {
              friends = !friend.isFriend(item10019);
            }
            if (!friends) {
              let _userBlacklist = self._userBlacklist;
              let hasItem;
              if (_userBlacklist != null) {
                hasItem = _userBlacklist.includes(item10019);
              }
              friends = hasItem;
            }
            if (!friends) {
              obj = { userId: null, nick: null };
              obj[0] = item10019;
              let tmp14 = tmp30.usersById[item10019];
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
        self._userResults = NOOPDefault.queryUsers(obj);
      }
    }
  }
};
prototype["queryGroupDMs"] = function queryGroupDMs(arg0, arg1) {
  const self = this;
  if (this._include(AutocompleterResultTypes.GROUP_DM)) {
    const blacklist = self.options.blacklist;
    if (self.options.frecencyBoosters) {
      let boosterMap = blacklist(6714).getBoosterMap(tmp);
      const obj2 = blacklist(6714);
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
    return NOOPDefault.queryGroupDMs(obj);
  } else {
    return [];
  }
};
prototype["queryApplications"] = function queryApplications(arg0, arg1) {
  if (this._include(AutocompleterResultTypes.APPLICATION)) {
    const obj = { query: null, limit: null, fuzzy: true };
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
    let result = _require(7599).queryGamesAutocomplete(query);
    if (result == null) {
      result = [];
    }
    _require = query.toLocaleLowerCase();
    const substr = result.slice(0, _limit);
    return substr.map((item, index) => {
      const obj = { type: AutocompleterResultTypes.GAME_PROFILE, record: item, score: null, comparator: null, sortable: null };
      const obj2 = callback(dependencyMap[6]);
      obj[2] = obj2.calculateScore(callback(dependencyMap[6]).getGameProfileMatchTier(item.name, callback, index));
      ({ name: obj[3], name } = item);
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
  if (this._include(AutocompleterResultTypes.LINK)) {
    let obj = trimTrailingPunctuation;
    const findCodedLinkResult = obj.findCodedLink(query);
    let type;
    if (findCodedLinkResult != null) {
      type = findCodedLinkResult.type;
    }
    if (type === CodedLinkType.CodedLinkType.INVITE) {
      obj = { type: null, record: null, score: null };
      obj[0] = AutocompleterResultTypes.LINK;
      obj[1] = closure_4.fromInviteCode(findCodedLinkResult.code);
      let tmp3Result = NOOP;
      obj[2] = tmp3Result.calculateScore(11);
      const items = [obj];
      return items;
    } else {
      const sanitizeUrlResult = tDefault.sanitizeUrl(query);
      try {
        const _URL = URL;
        const uRL = new URL(sanitizeUrlResult);
        ({ pathname, hostname } = uRL);
        let str = "";
        if (undefined !== hostname) {
          str = hostname;
        }
        let tmp17Result = isDiscordProxiedAssetUrlDefault;
        let isDiscordHostnameResult = tmp17Result.isDiscordHostname(str);
        if (!isDiscordHostnameResult) {
          const _window = window;
          isDiscordHostnameResult = window.location.host === uRL.host;
        }
        if (null !== pathname) {
          if (isDiscordHostnameResult) {
            tmp17Result = isDiscordProxiedAssetUrlDefault;
            if (tmp17Result.isAppRoute(pathname)) {
              obj = { type: null, record: null, score: null };
              obj[0] = AutocompleterResultTypes.LINK;
              obj[1] = closure_4.fromPath(pathname);
              tmp3Result = NOOP;
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
    }
  } else {
    return [];
  }
};
prototype["queryInAppNavigations"] = function queryInAppNavigations(arg0, arg1) {
  if (this._include(AutocompleterResultTypes.IN_APP_NAVIGATION)) {
    const obj = { query: null, limit: null, fuzzy: true };
    obj[0] = arg0;
    obj[1] = arg1;
    let result = obj.queryInAppNavigations(obj);
  } else {
    result = [];
  }
  return result;
};

export default Autocompleter;
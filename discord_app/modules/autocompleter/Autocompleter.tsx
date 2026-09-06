// discord_app/modules/autocompleter/Autocompleter.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import StringUtils from "../../utils/StringUtils.tsx";
import _modDef4257 from "../../../_runtime/metro/04257__.js";
import findCodedLinks from "../coded_links/findCodedLinks.tsx";
import CodedLink from "../coded_links/CodedLink.tsx";
import AutocompleteUtils from "../../utils/AutocompleteUtils.tsx";
import autocompleter_sortByMatchScoreDefault from "sortByMatchScore.tsx";
import GuildUtilsDefault from "../../utils/GuildUtils.tsx";
import UserSearchManagerDefault from "UserSearchManager.tsx";
import ThreadMemberListStore from "../threads/ThreadMemberListStore.tsx";
import LinkRecord from "../../records/LinkRecord.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const AutocompleteUtilsDefault = AutocompleteUtils;

require = fn;
function getAutocompleterBoosterMap(USER, options) {
  if (options.frecencyBoosters) {
    let boosterMap = AutocompleteUtils.getBoosterMap(USER);
  } else {
    boosterMap = {};
  }
  return boosterMap;
}
const GUILD_VOCAL_CHANNELS_KEY = fn(2012).GUILD_VOCAL_CHANNELS_KEY;
fn(5515).AutocompleterResultTypes;
const React7 = Object.freeze({});
const size = fn(2);
let result = size.fileFinishedImporting("modules/autocompleter/Autocompleter.tsx");
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
        obj._userResults = [];
        const iter = results[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          ({ score, comparator } = nextResult);
          let user = UserStore.getUser(nextResult.id);
          if (null != user) {
            let _userResults = obj._userResults;
            obj = { type: null, record: null, score: null, comparator: null };
            obj.type = AutocompleterResultTypes.USER;
            obj.record = tmp11;
            let obj2 = AutocompleteUtils;
            obj.score = obj2.calculateScore(score);
            let tmp19 = comparator;
            obj.comparator = tmp19;
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
      HermesBuiltin.arraySpread(
        obj._inAppNavigations,
        HermesBuiltin.arraySpread(
          obj._linkResults,
          HermesBuiltin.arraySpread(
            obj._gameProfileResults,
            HermesBuiltin.arraySpread(
              obj._guildResults,
              HermesBuiltin.arraySpread(
                obj._voiceChannelResults,
                HermesBuiltin.arraySpread(
                  obj._textChannelResults,
                  HermesBuiltin.arraySpread(obj._groupDMResults, HermesBuiltin.arraySpread(obj._userResults, 0)),
                ),
              ),
            ),
          ),
        ),
      );
      const tmp2Result = _modDef12(items);
      const uniqByResult = _modDef12(items).uniqBy((type) => "" + type.type + "-" + type.record.id);
      obj.results = _modDef12(items)
        .uniqBy((type) => "" + type.type + "-" + type.record.id)
        .sort(autocompleter_sortByMatchScoreDefault)
        .value();
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
    self.userSearchContext = UserSearchManagerDefault.getUserSearchContext(self.parseUserResults, self._limit);
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
prototype["setRefetchForSingleCategoryLimit"] = function setRefetchForSingleCategoryLimit(
  _refetchForSingleCategoryLimit,
) {
  this._refetchForSingleCategoryLimit = _refetchForSingleCategoryLimit;
};
prototype["setResultTypes"] = function setResultTypes(items) {
  let set = null;
  if (null != items) {
    const _Set = Set;
    set = new Set(items);
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
    options = this.options;
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
    const mapped = Array.from(self.options.blacklist).map((item) => {
      let str = "";
      if (item.startsWith("user:")) {
        str = item.replace("user:", "");
      }
      return str;
    });
    self._userBlacklist = mapped.filter((item) => "" !== item);
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
      const items = [, , , , , , , ,];
      ({
        _userResults: arr[0],
        _groupDMResults: arr[1],
        _textChannelResults: arr[2],
        _voiceChannelResults: arr[3],
        _guildResults: arr[4],
        _applicationResults: arr[5],
        _gameProfileResults: arr[6],
        _linkResults: arr[7],
        _inAppNavigations: arr[8],
      } = self);
      tmp3 = 1 === items.filter((item) => item.length > 0).length;
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
prototype["search"] = function search(query, arg1) {
  const self = this;
  closure_1 = query;
  _require = arg1;
  this.query = query;
  this._refetched = false;
  if ("" === query.trim()) {
    self.clear();
    self.updateAllResults();
  } else {
    if (self.options.frecencyBoosters) {
      const FrecencyUserSettingsActionCreators =
        require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
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
      } else if (!obj._include(AutocompleterResultTypes.USER)) {
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
prototype["queryTextChannels"] = function queryTextChannels(query, _limit) {
  const self = this;
  if (this._include(AutocompleterResultTypes.TEXT_CHANNEL)) {
    if (self.options.frecencyBoosters) {
      let boosterMap = AutocompleteUtils.getBoosterMap(tmp);
    } else {
      boosterMap = {};
    }
    options = self.options;
    const blacklist = options.blacklist;
    let fn;
    if (null != blacklist) {
      fn = (id) => !blacklist.has("channel:" + id.id);
    }
    const obj = {
      query,
      guildId: null,
      limit: _limit,
      fuzzy: true,
      allowSnowflake: options.allowSnowflake,
      filter: fn,
      boosters: boosterMap,
    };
    return AutocompleteUtilsDefault.queryChannels(obj);
  } else {
    return [];
  }
};
prototype["queryVoiceChannels"] = function queryVoiceChannels(query, _limit) {
  const self = this;
  if (this._include(AutocompleterResultTypes.VOICE_CHANNEL)) {
    ({ allowSnowflake, voiceChannelGuildFilter } = self.options);
    if (self.options.frecencyBoosters) {
      let boosterMap = AutocompleteUtils.getBoosterMap(tmp);
    } else {
      boosterMap = {};
    }
    const obj = {
      query,
      guildId: voiceChannelGuildFilter,
      limit: _limit,
      fuzzy: true,
      type: GUILD_VOCAL_CHANNELS_KEY,
      allowSnowflake,
      boosters: boosterMap,
    };
    return AutocompleteUtilsDefault.queryChannels(obj);
  } else {
    return [];
  }
};
prototype["queryGuilds"] = function queryGuilds(query, limit) {
  const self = this;
  if (this._include(AutocompleterResultTypes.GUILD)) {
    if (self.options.frecencyBoosters) {
      let boosterMap = AutocompleteUtils.getBoosterMap(tmp);
    } else {
      boosterMap = {};
    }
    options = self.options;
    const blacklist = options.blacklist;
    let fn;
    if (null != blacklist) {
      fn = (id) => !blacklist.has("guild:" + id.id);
    }
    const obj = { query, limit, fuzzy: true, filter: fn, boosters: boosterMap, allowSnowflake: options.allowSnowflake };
    return AutocompleteUtilsDefault.queryGuilds(obj);
  } else {
    return [];
  }
};
prototype["queryUsers"] = function queryUsers(query, arg1, limit) {
  const self = this;
  const userSearchContext = this.userSearchContext;
  if (null != userSearchContext) {
    if (self._include(AutocompleterResultTypes.USER)) {
      options = self.options;
      const userFilters = options.userFilters;
      const tmp2 = getAutocompleterBoosterMap(tmp25.USER, self.options);
      let thread;
      if (userFilters != null) {
        thread = userFilters.thread;
      }
      if (null == thread) {
        if (undefined !== arg1) {
          const members = GuildUtilsDefault.requestMembers(arg1, query, 100);
        }
        userSearchContext.setLimit(limit);
        let obj = { query, filters: userFilters, blacklist: self._userBlacklist, boosters: tmp2 };
        userSearchContext.setQuery(obj);
      } else {
        const memberListSections = ThreadMemberListStore.getMemberListSections(userFilters.thread);
        const items = [];
        for (const key10017 in memberListSections) {
          let tmp30 = memberListSections[key10017];
          let userIds = tmp30.userIds;
          for (const item10019 of userIds) {
            let tmp7 = item10019;
            let friends;
            if (userFilters != null) {
              friends = userFilters.friends;
            }
            if (friends) {
              friends = !RelationshipStore.isFriend(tmp7);
            }
            if (!friends) {
              let _userBlacklist = self._userBlacklist;
              let hasItem;
              if (_userBlacklist != null) {
                hasItem = _userBlacklist.includes(tmp7);
              }
              friends = hasItem;
            }
            if (!friends) {
              obj = { userId: null, nick: null };
              obj.userId = tmp7;
              let tmp14 = tmp30.usersById[tmp7];
              let displayName;
              if (tmp14 != null) {
                displayName = tmp14.displayName;
              }
              obj.nick = displayName;
              let arr = items.push(obj);
            }
            continue;
          }
        }
        obj = { query, users: items, limit, boosters: tmp2, allowSnowflake: options.allowSnowflake };
        self._userResults = AutocompleteUtilsDefault.queryUsers(obj);
      }
    }
    tmp25 = AutocompleterResultTypes;
  }
};
prototype["queryGroupDMs"] = function queryGroupDMs(query, limit) {
  const self = this;
  if (this._include(AutocompleterResultTypes.GROUP_DM)) {
    const blacklist = self.options.blacklist;
    if (self.options.frecencyBoosters) {
      let boosterMap = AutocompleteUtils.getBoosterMap(tmp);
    } else {
      boosterMap = {};
    }
    let fn;
    if (null != blacklist) {
      fn = (id) => !blacklist.has("channel:" + id.id);
    }
    const obj = { query, limit, fuzzy: true, filter: fn, boosters: boosterMap };
    return AutocompleteUtilsDefault.queryGroupDMs(obj);
  } else {
    return [];
  }
};
prototype["queryApplications"] = function queryApplications(query, limit) {
  if (this._include(AutocompleterResultTypes.APPLICATION)) {
    const obj = { query, limit, fuzzy: true };
    let queryApplicationsResult = obj.queryApplications(obj);
  } else {
    queryApplicationsResult = [];
  }
  return queryApplicationsResult;
};
prototype["queryGameProfiles"] = function queryGameProfiles(query, _limit) {
  if (this._include(AutocompleterResultTypes.GAME_PROFILE)) {
    let result = require("queryGamesAutocomplete").queryGamesAutocomplete(query);
    if (result == null) {
      result = [];
    }
    _require = query.toLocaleLowerCase();
    const substr = result.slice(0, _limit);
    return substr.map((record, index) => {
      const obj = {
        type: AutocompleterResultTypes.GAME_PROFILE,
        record,
        score: null,
        comparator: null,
        sortable: null,
      };
      const obj2 = AutocompleteUtils;
      obj.score = obj2.calculateScore(AutocompleteUtils.getGameProfileMatchTier(record.name, closure_0, index));
      ({ name: obj.comparator, name } = record);
      obj.sortable = name.toLocaleLowerCase();
      return obj;
    });
  } else {
    return [];
  }
};
prototype["refreshGameProfiles"] = function refreshGameProfiles() {
  const self = this;
  const isNullOrEmptyResult = StringUtils.isNullOrEmpty(this.query.trim());
  let _includeResult = !isNullOrEmptyResult;
  if (!isNullOrEmptyResult) {
    _includeResult = self._include(AutocompleterResultTypes.GAME_PROFILE);
  }
  if (_includeResult) {
    self._gameProfileResults = self.queryGameProfiles(self.query, self._limit);
    self.updateAllResults();
  }
};
prototype["queryLink"] = function queryLink(query) {
  if (this._include(AutocompleterResultTypes.LINK)) {
    let obj = findCodedLinks;
    const findCodedLinkResult = obj.findCodedLink(query);
    let type;
    if (findCodedLinkResult != null) {
      type = findCodedLinkResult.type;
    }
    if (type === CodedLink.CodedLinkType.INVITE) {
      obj = { type: tmp.LINK, record: LinkRecord.fromInviteCode(findCodedLinkResult.code), score: null };
      let tmp3Result = tmp3(5442);
      obj.score = tmp3Result.calculateScore(11);
      const items = [obj];
      return items;
    } else {
      const sanitizeUrlResult = _modDef4257.sanitizeUrl(query);
      try {
        const _URL = URL;
        const uRL = new URL(sanitizeUrlResult);
        ({ pathname, hostname } = uRL);
        let str = "";
        if (undefined !== hostname) {
          str = hostname;
        }
        let tmp17Result = tmp17(1365);
        let isDiscordHostnameResult = tmp17Result.isDiscordHostname(str);
        if (!isDiscordHostnameResult) {
          const _window = window;
          isDiscordHostnameResult = window.location.host === uRL.host;
        }
        if (null !== pathname) {
          if (isDiscordHostnameResult) {
            tmp17Result = tmp17(1365);
            if (tmp17Result.isAppRoute(pathname)) {
              obj = { type: tmp.LINK, record: LinkRecord.fromPath(pathname), score: null };
              tmp3Result = tmp3(5442);
              obj.score = tmp3Result.calculateScore(11);
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
prototype["queryInAppNavigations"] = function queryInAppNavigations(query, limit) {
  if (this._include(AutocompleterResultTypes.IN_APP_NAVIGATION)) {
    const obj = { query, limit, fuzzy: true };
    let result = obj.queryInAppNavigations(obj);
  } else {
    result = [];
  }
  return result;
};

export default Autocompleter;

// === Module 9510: Autocompleter ===

// Module 9510 (Autocompleter)
import _modDef12 from "module_12" /* 12 */;
import URLUtilsDefault from "URLUtils" /* 1371 */;
import _modDef1936 from "module_1936" /* 1936 */;
import StringUtils from "StringUtils" /* 2018 */;
import GuildChannelStore from "GuildChannelStore" /* 4513 */;
import findCodedLinks from "findCodedLinks" /* 4876 */;
import CodedLink from "CodedLink" /* 4881 */;
import AutocompleteUtils from "AutocompleteUtils" /* 5628 */;
import autocompleter_AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 5707 */;
import sortByMatchScoreDefault from "sortByMatchScore" /* 5710 */;
import GuildUtilsDefault from "GuildUtils" /* 5711 */;
import UserSearchManagerDefault from "UserSearchManager" /* 9513 */;
import ThreadMemberListStore from "ThreadMemberListStore" /* 9511 */;
import LinkRecord from "LinkRecord" /* 9512 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const AutocompleteUtilsDefault = AutocompleteUtils;
let _require, set;

function getAutocompleterBoosterMap(USER, options) {
  let boosterMap;
  if (options.frecencyBoosters) {
    const obj2 = AutocompleteUtils;
    boosterMap = obj2.getBoosterMap(USER);
  } else {
    boosterMap = {};
  }
  return boosterMap;
}
const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore.GUILD_VOCAL_CHANNELS_KEY;
const AutocompleterResultTypes = autocompleter_AutocompleterConstants.AutocompleterResultTypes;
const React4 = Object.freeze({});
let result = size.fileFinishedImporting("modules/autocompleter/Autocompleter.tsx");
class Autocompleter {
  constructor(onResultsChange, resultTypes) {
    let num = arg2;
    if (arg2 === undefined) {
      num = 100;
    }
    let tmp = arg3;
    if (arg3 === undefined) {
      tmp = options;
    }
    let num2 = arg4;
    if (arg4 === undefined) {
      num2 = 0;
    }
    let obj = Object.create(new.target.prototype);
    obj.query = "";
    obj.options = options;
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
      let obj2;
      let score;
      results = results.results;
      const tmp2 = obj;
      if (obj._include(AutocompleterResultTypes.USER)) {
        tmp2._userResults = [];
        const iter = results[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          ({ score, comparator } = nextResult);
          let user = UserStore.getUser(nextResult.id);
          if (null != user) {
            let _userResults = obj._userResults;
            obj = { type: AutocompleterResultTypes.USER, record: tmp11, score: obj2.calculateScore(score), comparator };
            let push = _userResults.push;
            obj2 = AutocompleteUtils;
            let arr = push(obj);
          }
          continue;
        }
        const result = obj._willRefetchIfSingleCategoryResults();
        const tmp23 = !result && obj3._userResults.length > obj3._limit;
        if (tmp23) {
          obj._userResults.length = obj._limit;
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
      const tmp3 = _modDef12;
      HermesBuiltin.arraySpread(items, obj._inAppNavigations, HermesBuiltin.arraySpread(items, obj._linkResults, HermesBuiltin.arraySpread(items, obj._gameProfileResults, HermesBuiltin.arraySpread(items, obj._guildResults, HermesBuiltin.arraySpread(items, obj._voiceChannelResults, HermesBuiltin.arraySpread(items, obj._textChannelResults, HermesBuiltin.arraySpread(items, obj._groupDMResults, HermesBuiltin.arraySpread(items, obj._userResults, 0))))))));
      const tmp3Result = tmp3(items);
      const uniqByResult = tmp3Result.uniqBy((type) => "" + type.type + "-" + type.record.id);
      const iter = uniqByResult.sort(sortByMatchScoreDefault);
      obj.results = iter.value();
      obj.onResultsChange(obj.results, obj.query);
    };
    obj.onResultsChange = onResultsChange;
    obj.setOptions(tmp, true);
    obj._limit = num;
    obj._refetchForSingleCategoryLimit = num2;
    const searchContext = obj.createSearchContext();
    obj.setResultTypes(resultTypes);
    return obj;
  }
  createSearchContext() {
    const self = this;
    if (null == this.userSearchContext) {
      const obj = UserSearchManagerDefault;
      self.userSearchContext = obj.getUserSearchContext(self.parseUserResults, self._limit);
    }
  }
  setLimit(_limit) {
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
  }
  setRefetchForSingleCategoryLimit(_refetchForSingleCategoryLimit) {
    this._refetchForSingleCategoryLimit = _refetchForSingleCategoryLimit;
  }
  setResultTypes(resultTypes) {
    set = null;
    if (null != resultTypes) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(resultTypes);
    }
    const self3 = this;
    this.resultTypes = set;
    self3._userResults = this._include(AutocompleterResultTypes.USER) ? self3._userResults : [];
    self3._groupDMResults = self3._include(AutocompleterResultTypes.GROUP_DM) ? self3._groupDMResults : [];
    self3._textChannelResults = self3._include(AutocompleterResultTypes.TEXT_CHANNEL) ? self3._textChannelResults : [];
    self3._voiceChannelResults = self3._include(AutocompleterResultTypes.VOICE_CHANNEL) ? self3._voiceChannelResults : [];
    self3._guildResults = self3._include(AutocompleterResultTypes.GUILD) ? self3._guildResults : [];
    self3._applicationResults = self3._include(AutocompleterResultTypes.APPLICATION) ? self3._applicationResults : [];
    self3._gameProfileResults = self3._include(AutocompleterResultTypes.GAME_PROFILE) ? self3._gameProfileResults : [];
    self3._linkResults = self3._include(AutocompleterResultTypes.LINK) ? self3._linkResults : [];
    self3._inAppNavigations = self3._include(AutocompleterResultTypes.IN_APP_NAVIGATION) ? self3._inAppNavigations : [];
  }
  _include(USER) {
    let hasItem = null == this.resultTypes;
    if (!hasItem) {
      const resultTypes = tmp.resultTypes;
      hasItem = resultTypes.has(USER);
    }
    return hasItem;
  }
  _isAsyncSearch() {
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
  }
  setOptions(arg0) {
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
      const arr = Array.from(self.options.blacklist);
      const mapped = arr.map((item) => {
        let str = "";
        if (item.startsWith("user:")) {
          str = item.replace("user:", "");
        }
        return str;
      });
      self._userBlacklist = mapped.filter((item) => "" !== item);
    } else {
      self._userBlacklist = null;
    }
  }
  _willRefetchIfSingleCategoryResults() {
    const self = this;
    const _refetched = this._refetched || self._refetchForSingleCategoryLimit <= 5;
    let tmp = !_refetched;
    if (tmp) {
      let tmp3 = null == self.options.voiceChannelGuildFilter && null == self.options.userFilters;
      if (tmp3) {
        const items = [, , , , , , , , ];
        ({ _userResults: arr[0], _groupDMResults: arr[1], _textChannelResults: arr[2], _voiceChannelResults: arr[3], _guildResults: arr[4], _applicationResults: arr[5], _gameProfileResults: arr[6], _linkResults: arr[7], _inAppNavigations: arr[8] } = self);
        tmp3 = 1 === items.filter((item) => item.length > 0).length;
      }
      tmp = tmp3;
    }
    return tmp;
  }
  refetchIfSingleCategoryResults() {
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
  }
  search(query, arg1) {
    let closure_0;
    const self = this;
    let closure_1 = query;
    _require = arg1;
    this.query = query;
    this._refetched = false;
    if ("" === query.trim()) {
      self.clear();
      self.updateAllResults();
    } else {
      let ifNecessary;
      if (self.options.frecencyBoosters) {
        const FrecencyUserSettingsActionCreators = require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
        ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
      } else {
        ifNecessary = Promise.resolve();
      }
      ifNecessary.finally(() => {
        self.queryUsers(query, closure_0, self._limit);
        self._groupDMResults = self.queryGroupDMs(query, self._limit);
        self._textChannelResults = self.queryTextChannels(query, self._limit);
        self._voiceChannelResults = self.queryVoiceChannels(query, self._limit);
        self._guildResults = self.queryGuilds(query, self._limit);
        self._applicationResults = self.queryApplications(query, self._limit);
        self._gameProfileResults = self.queryGameProfiles(query, self._limit);
        self._inAppNavigations = self.queryInAppNavigations(query, self._limit);
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
  }
  clear() {
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
  }
  clean() {
    this.clear();
    this.destroy();
    this.query = "";
    this.updateAllResults();
  }
  pause() {
    const userSearchContext = this.userSearchContext;
    if (userSearchContext != null) {
      const unsubscribe = userSearchContext.unsubscribe;
      if (unsubscribe != null) {
        unsubscribe();
      }
    }
  }
  resume() {
    const userSearchContext = this.userSearchContext;
    if (userSearchContext != null) {
      const subscribe = userSearchContext.subscribe;
      if (subscribe != null) {
        const subscription = subscribe();
      }
    }
  }
  destroy() {
    const userSearchContext = this.userSearchContext;
    if (null != userSearchContext) {
      userSearchContext.destroy();
      tmp.userSearchContext = null;
    }
  }
  queryTextChannels(query, _limit) {
    const self = this;
    if (this._include(AutocompleterResultTypes.TEXT_CHANNEL)) {
      let boosterMap;
      if (self.options.frecencyBoosters) {
        const obj2 = AutocompleteUtils;
        boosterMap = obj2.getBoosterMap(tmp);
      } else {
        boosterMap = {};
      }
      options = self.options;
      const blacklist = options.blacklist;
      let fn;
      const allowSnowflake = options.allowSnowflake;
      if (null != blacklist) {
        fn = (id) => !blacklist.has("channel:" + id.id);
      }
      const obj = { query, guildId: null, limit: _limit, fuzzy: true, allowSnowflake, filter: fn, boosters: boosterMap };
      const obj3 = AutocompleteUtilsDefault;
      return obj3.queryChannels(obj);
    } else {
      return [];
    }
  }
  queryVoiceChannels(query, _limit) {
    let allowSnowflake;
    let voiceChannelGuildFilter;
    const self = this;
    if (this._include(AutocompleterResultTypes.VOICE_CHANNEL)) {
      let boosterMap;
      ({ allowSnowflake, voiceChannelGuildFilter } = self.options);
      if (self.options.frecencyBoosters) {
        const obj2 = AutocompleteUtils;
        boosterMap = obj2.getBoosterMap(tmp);
      } else {
        boosterMap = {};
      }
      const obj = { query, guildId: voiceChannelGuildFilter, limit: _limit, fuzzy: true, type: GUILD_VOCAL_CHANNELS_KEY, allowSnowflake, boosters: boosterMap };
      const obj3 = AutocompleteUtilsDefault;
      return obj3.queryChannels(obj);
    } else {
      return [];
    }
  }
  queryGuilds(query, limit) {
    const self = this;
    if (this._include(AutocompleterResultTypes.GUILD)) {
      let boosterMap;
      if (self.options.frecencyBoosters) {
        const obj2 = AutocompleteUtils;
        boosterMap = obj2.getBoosterMap(tmp);
      } else {
        boosterMap = {};
      }
      options = self.options;
      const blacklist = options.blacklist;
      let fn;
      const allowSnowflake = options.allowSnowflake;
      if (null != blacklist) {
        fn = (id) => !blacklist.has("guild:" + id.id);
      }
      const obj = { query, limit, fuzzy: true, filter: fn, boosters: boosterMap, allowSnowflake };
      const obj3 = AutocompleteUtilsDefault;
      return obj3.queryGuilds(obj);
    } else {
      return [];
    }
  }
  queryUsers(query, arg1, limit) {
    const self = this;
    const userSearchContext = this.userSearchContext;
    if (null != userSearchContext) {
      if (self._include(AutocompleterResultTypes.USER)) {
        options = self.options;
        const userFilters = options.userFilters;
        const allowSnowflake = options.allowSnowflake;
        const tmp2 = getAutocompleterBoosterMap(AutocompleterResultTypes.USER, self.options);
        let thread;
        if (userFilters != null) {
          thread = userFilters.thread;
        }
        if (null == thread) {
          if (undefined !== arg1) {
            const obj4 = GuildUtilsDefault;
            const members = obj4.requestMembers(arg1, query, 100);
          }
          userSearchContext.setLimit(limit);
          const obj3 = { query, filters: userFilters, blacklist: self._userBlacklist, boosters: tmp2 };
          userSearchContext.setQuery(obj3);
        } else {
          const memberListSections = ThreadMemberListStore.getMemberListSections(userFilters.thread);
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
                friends = !RelationshipStore.isFriend(item10019);
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
                let obj = { userId: item10019, nick: displayName };
                let tmp14 = tmp30.usersById[item10019];
                let displayName;
                let push = items.push;
                if (tmp14 != null) {
                  displayName = tmp14.displayName;
                }
                let arr = push(obj);
              }
              continue;
            }
          }
          const obj5 = { query, users: items, limit, boosters: tmp2, allowSnowflake };
          const obj2 = AutocompleteUtilsDefault;
          self._userResults = obj2.queryUsers(obj5);
        }
      }
    }
  }
  queryGroupDMs(query, limit) {
    const self = this;
    if (this._include(AutocompleterResultTypes.GROUP_DM)) {
      let boosterMap;
      const blacklist = self.options.blacklist;
      if (self.options.frecencyBoosters) {
        const obj2 = AutocompleteUtils;
        boosterMap = obj2.getBoosterMap(tmp);
      } else {
        boosterMap = {};
      }
      let fn;
      if (null != blacklist) {
        fn = (id) => !blacklist.has("channel:" + id.id);
      }
      const obj = { query, limit, fuzzy: true, filter: fn, boosters: boosterMap };
      const obj3 = AutocompleteUtilsDefault;
      return obj3.queryGroupDMs(obj);
    } else {
      return [];
    }
  }
  queryApplications(query, limit) {
    let queryApplicationsResult;
    if (this._include(AutocompleterResultTypes.APPLICATION)) {
      const obj2 = { query, limit, fuzzy: true };
      const obj = AutocompleteUtilsDefault;
      queryApplicationsResult = obj.queryApplications(obj2);
    } else {
      queryApplicationsResult = [];
    }
    return queryApplicationsResult;
  }
  queryGameProfiles(query, _limit) {
    let closure_0;
    if (this._include(AutocompleterResultTypes.GAME_PROFILE)) {
      let obj = require("queryGamesAutocomplete");
      let result = obj.queryGamesAutocomplete(query);
      if (result == null) {
        result = [];
      }
      _require = query.toLocaleLowerCase();
      const substr = result.slice(0, _limit);
      return substr.map((record, index) => {
        let calculateScore;
        let name;
        let obj2;
        const obj = { type: AutocompleterResultTypes.GAME_PROFILE, record, score: calculateScore(obj2.getGameProfileMatchTier(record.name, closure_0, index)), comparator: null, sortable: name.toLocaleLowerCase() };
        calculateScore = AutocompleteUtils.calculateScore;
        AutocompleteUtils;
        ({ name: obj.comparator, name } = record);
        obj2 = AutocompleteUtils;
        return obj;
      });
    } else {
      return [];
    }
  }
  refreshGameProfiles() {
    const self = this;
    const obj = StringUtils;
    let _includeResult = !obj.isNullOrEmpty(str.trim());
    obj.isNullOrEmpty(this.query.trim());
    if (_includeResult) {
      _includeResult = self._include(AutocompleterResultTypes.GAME_PROFILE);
    }
    if (_includeResult) {
      self._gameProfileResults = self.queryGameProfiles(self.query, self._limit);
      self.updateAllResults();
    }
  }
  queryLink(query) {
    let hostname;
    let pathname;
    let tmp3Result;
    let tmp3Result2;
    if (this._include(AutocompleterResultTypes.LINK)) {
      const obj = findCodedLinks;
      const findCodedLinkResult = obj.findCodedLink(query);
      let type;
      if (findCodedLinkResult != null) {
        type = findCodedLinkResult.type;
      }
      if (type === CodedLink.CodedLinkType.INVITE) {
        const obj2 = { type: AutocompleterResultTypes.LINK, record: LinkRecord.fromInviteCode(findCodedLinkResult.code), score: tmp3Result.calculateScore(11) };
        const items = [obj2];
        tmp3Result = AutocompleteUtils;
        return items;
      } else {
        const obj8 = _modDef1936;
        const sanitizeUrlResult = obj8.sanitizeUrl(query);
        try {
          const _URL = URL;
          const self = this;
          const self2 = this;
          const uRL = new URL(sanitizeUrlResult);
          ({ pathname, hostname } = uRL);
          let str = "";
          if (undefined !== hostname) {
            str = hostname;
          }
          const host = uRL.host;
          const tmp15Result = URLUtilsDefault;
          let isDiscordHostnameResult = tmp15Result.isDiscordHostname(str);
          if (!isDiscordHostnameResult) {
            const _window = window;
            isDiscordHostnameResult = window.location.host === host;
          }
          if (null !== pathname) {
            if (isDiscordHostnameResult) {
              let items2;
              const tmp15Result2 = URLUtilsDefault;
              if (tmp15Result2.isAppRoute(pathname)) {
                const obj3 = { type: AutocompleterResultTypes.LINK, record: LinkRecord.fromPath(pathname), score: tmp3Result2.calculateScore(11) };
                const items1 = [obj3];
                items2 = items1;
                tmp3Result2 = AutocompleteUtils;
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
  }
  queryInAppNavigations(query, limit) {
    let result;
    if (this._include(AutocompleterResultTypes.IN_APP_NAVIGATION)) {
      const obj2 = { query, limit, fuzzy: true };
      const obj = AutocompleteUtilsDefault;
      result = obj.queryInAppNavigations(obj2);
    } else {
      result = [];
    }
    return result;
  }
}
const prototype = Autocompleter.prototype;

export default Autocompleter;
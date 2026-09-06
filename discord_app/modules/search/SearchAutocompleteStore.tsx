// === Module 12342: SearchAutocompleteStore ===

// Module 12342 (SearchAutocompleteStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import _modDef4679 from "module_4679" /* 4679 */;
import AutocompleteUtils from "AutocompleteUtils" /* 5442 */;
import GuildUtilsDefault from "GuildUtils" /* 5519 */;
import UserSearchManagerDefault from "UserSearchManager" /* 9839 */;
import SearchUtils from "SearchUtils" /* 12340 */;
import SearchTokens from "SearchTokens" /* 12341 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import StreamerModeStore from "StreamerModeStore" /* 4405 */;
import UserStore from "UserStore" /* 1371 */;

const SearchTokensDefault = SearchTokens;

require = fn;
function handleUserSearchResults(searchContext, results) {
  let obj = SearchUtils;
  const searchContextId = obj.getSearchContextId(searchContext);
  map1.get(searchContextId);
  value = map.get(searchContextId);
  if (null != value) {
    if (null != value) {
      mode = value.mode;
      let tmp8 = mode.type === constants.FILTER;
      if (tmp8) {
        const filter = mode.filter;
        let tmp6 = null != filter;
        if (tmp6) {
          tmp6 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
          const tmp7 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
        }
        tmp8 = tmp6;
      }
      if (tmp8) {
        let num = 3;
        if (value.mode.type === constants.FILTER) {
          num = 10;
        }
        value.results = (function fixUserResults(results, arg1) {
          const items = [];
          const iter = results[Symbol.iterator]();
          while (iter !== undefined) {
            if (items.length >= arg1) {
              iter.return();
              break;
            } else {
              user = user.getUser(tmp2.id);
              let obj3 = user;
              if (null != user) {
                if (!obj3.isNonUserBot()) {
                  let obj = UserUtilsDefault;
                  let userTag = obj.getUserTag(obj3);
                  if (null != userTag) {
                    obj = { text: null, user: null };
                    obj.text = tmp8;
                    obj.user = obj3;
                    let arr = items.push(obj);
                  }
                }
              }
              continue;
            }
            return items;
          }
          const nextResult = iter.next();
        })(results.results, num);
        ({ mode, tokens } = value);
        ({ query, cursorScope } = value);
        let tmp10 = getAutocompleteList(searchContext, mode, tokens);
        const searchContextId1 = SearchUtils.getSearchContextId(searchContext);
        let value1 = map1.get(searchContextId1);
        if (value1 == null) {
          obj = { results: [], context: UserSearchManagerDefault.getUserSearchContext(handleUserSearchResults.bind(null, searchContext)) };
          value1 = obj;
        }
        const result = map1.set(searchContextId1, value1);
        obj = { searchContext, query, mode, tokens, cursorScope, autocompletes: tmp10 };
        const result1 = map.set(searchContextId, obj);
        searchAutocompleteStoreClass.emitChange();
        const tmpResult = SearchUtils;
      }
    }
  }
}
function getAutocompleteList(searchContext, autocompleteMode, tokens) {
  const type = autocompleteMode.type;
  if (constants.FILTER === type) {
    ({ filter, token } = autocompleteMode);
    let num = c17;
    if (c17 === undefined) {
      num = 10;
    }
    let currentUser;
    let tmp4 = null;
    if (null != filter) {
      let str;
      if (token != null) {
        const str2 = token.getFullMatch();
        if (str2 != null) {
          str = str2.trim();
        }
      }
      if (str == null) {
        str = "";
      }
      let obj = SearchUtils;
      if (obj.isGuildLikeSearchContext(searchContext)) {
        let tmp8 = null != filter;
        if (tmp8) {
          tmp8 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
          const tmp9 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
        }
        if (tmp8) {
          if (0 !== str.length) {
            let tmp6Result = SearchUtils;
            const searchContextId = tmp6Result.getSearchContextId(searchContext);
            value = map1.get(searchContextId);
            if (value == null) {
              obj = { results: [], context: null };
              let obj2 = UserSearchManagerDefault;
              obj.context = obj2.getUserSearchContext(handleUserSearchResults.bind(null, searchContext));
              value = obj;
            }
            const result = map1.set(searchContextId, value);
            const results = value.results;
            let arr3 = results;
            if (null != results) {
              let tmp20 = null != filter;
              if (tmp20) {
                tmp20 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
                const tmp19 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
              }
              arr3 = results;
              if (tmp20) {
                tmp6Result = SearchTokens;
                arr3 = results;
                if (tmp6Result.isMeAutcompleteAnswer(str)) {
                  currentUser = UserStore.getCurrentUser();
                  arr3 = results;
                  if (null != currentUser) {
                    const found = results.filter((user) => {
                      user = user.user;
                      let id;
                      if (user != null) {
                        id = user.id;
                      }
                      return id !== currentUser.id;
                    });
                    obj = { text: ME, user: currentUser };
                    found.unshift(obj);
                    arr3 = found;
                  }
                }
              }
            }
            let tmp25 = null;
            if (null != arr3) {
              tmp25 = null;
              if (0 !== arr3.length) {
                const obj1 = { group: filter, results: arr3 };
                tmp25 = obj1;
              }
            }
            tmp4 = tmp25;
          }
        }
      }
      const tmp15 = SearchTokensDefault[filter];
      let getAutocompletions;
      if (tmp15 != null) {
        getAutocompletions = tmp15.getAutocompletions;
      }
      if (null != getAutocompletions) {
        obj2 = { query: str, searchContext, maxResults: num, tokens };
        let autocompletions = getAutocompletions(obj2);
      } else {
        autocompletions = [];
      }
    }
    if (null != tmp4) {
      const items = [tmp4];
      let tmp26 = items;
    } else {
      tmp26 = closure_14;
    }
    return tmp26;
  } else {
    return closure_14;
  }
}
function handleChannelCreateOrDelete() {
  SearchUtils.clearTokenCache();
}
function rebuildAutocompleteResults(c13) {
  let obj = SearchUtils;
  const searchContextId = obj.getSearchContextId(searchContext);
  value = map.get(searchContextId);
  if (null == value) {
    return false;
  } else {
    ({ mode, tokens } = value);
    ({ query, cursorScope } = value);
    const tmp11 = getAutocompleteList(searchContext, mode, tokens);
    const searchContextId1 = SearchUtils.getSearchContextId(searchContext);
    value = map1.get(searchContextId1);
    if (value == null) {
      obj = { results: [], context: UserSearchManagerDefault.getUserSearchContext(handleUserSearchResults.bind(null, searchContext)) };
      value = obj;
    }
    const result = map1.set(searchContextId1, value);
    obj = { searchContext, query, mode, tokens, cursorScope, autocompletes: tmp11 };
    const result1 = map.set(searchContextId, obj);
    const tmpResult = SearchUtils;
  }
}
const Constants = fn(1074);
({ SearchPopoutModes: closure_9, SearchTokenTypes } = Constants);
const ME = Constants.ME;
fn(5515).AutocompleterResultTypes;
let c13 = null;
let closure_14 = [];
const map = new Map();
const map1 = new Map();
let c17 = 10;
let items = [, , ];
({ FILTER_FROM: arr[0], FILTER_IN: arr[1], FILTER_MENTIONS: arr[2] } = SearchTokenTypes);
new Set(items);
const Store = initializeDefault.Store;
class SearchAutocompleteStoreClass extends Store {
}
const prototype = SearchAutocompleteStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, GuildMemberStore, GuildStore, SelectedChannelStore, StreamerModeStore, UserStore);
};
prototype["getState"] = function getState(searchContext) {
  let obj = SearchUtils;
  value = map.get(obj.getSearchContextId(searchContext));
  if (value == null) {
    obj = { searchContext, query: "", mode: null, tokens: null, cursorScope: null, autocompletes: null };
    obj = { type: constants.EMPTY, filter: null, token: null };
    obj.mode = obj;
    obj.tokens = [];
    obj.autocompletes = [];
    value = obj;
  }
  return value;
};
prototype["getSelectedSearchContext"] = function getSelectedSearchContext() {
  return c13;
};
SearchAutocompleteStoreClass.displayName = "SearchAutocompleteStore";
const searchAutocompleteStoreClass = new SearchAutocompleteStoreClass(DispatcherDefault, {
  SEARCH_AUTOCOMPLETE_INITIALIZE: function handleSearchAutocompleteInitialize(searchContext) {
    searchContext = searchContext.searchContext;
    if (!_modDef4679(c13, searchContext)) {
      c13 = searchContext;
      SearchUtils.clearTokenCache();
    }
    rebuildAutocompleteResults(searchContext);
  },
  SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function handleSearchAutocompleteQueryUpdate(arg0) {
    ({ searchContext, tokens, cursorScope } = arg0);
    if (!_modDef4679(c13, searchContext)) {
      c13 = searchContext;
      let obj = SearchUtils;
      obj.clearTokenCache();
    }
    let obj1 = SearchUtils;
    const queryFromTokens = obj1.getQueryFromTokens(tokens);
    let obj2 = SearchUtils;
    const autocompleteMode = obj2.getAutocompleteMode(cursorScope, tokens);
    let obj3 = SearchUtils;
    const searchContextId = obj3.getSearchContextId(searchContext);
    value = map.get(searchContextId);
    if (null != value) {
      if (queryFromTokens === value.query) {
        let autocompletes = value.autocompletes;
        let flag = false;
      }
      let tmp5Result = SearchUtils;
      const searchContextId1 = tmp5Result.getSearchContextId(searchContext);
      value = map1.get(searchContextId1);
      if (value == null) {
        obj = { results: [], context: null };
        let tmpResult = UserSearchManagerDefault;
        obj.context = tmpResult.getUserSearchContext(handleUserSearchResults.bind(null, searchContext));
        value = obj;
      }
      const result = map1.set(searchContextId1, value);
      obj = { searchContext, query: queryFromTokens, mode: autocompleteMode, tokens, cursorScope, autocompletes };
      const result1 = map.set(searchContextId, obj);
      return flag;
    }
    let tmp9 = autocompleteMode.type === constants.FILTER;
    if (tmp9) {
      const filter = autocompleteMode.filter;
      let tmp10 = null != filter;
      if (tmp10) {
        tmp10 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
        const tmp11 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
      }
      tmp9 = tmp10;
    }
    if (tmp9) {
      tmp5Result = SearchUtils;
      const searchContextId2 = tmp5Result.getSearchContextId(searchContext);
      let value1 = map1.get(searchContextId2);
      if (value1 == null) {
        obj1 = { results: [], context: null };
        tmpResult = UserSearchManagerDefault;
        obj1.context = tmpResult.getUserSearchContext(handleUserSearchResults.bind(null, searchContext));
        value1 = obj1;
      }
      const result2 = map1.set(searchContextId2, value1);
      const token = autocompleteMode.token;
      let trimmed;
      if (token != null) {
        const str = token.getFullMatch();
        if (str != null) {
          trimmed = str.trim();
        }
      }
      if (null != trimmed) {
        if (trimmed.length > 0) {
          const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(searchContext);
          if (null != guildIdFromSearchContext) {
            const members = GuildUtilsDefault.requestMembers(guildIdFromSearchContext, trimmed, c17);
            const tmpResult1 = GuildUtilsDefault;
          }
          const context3 = value1.context;
          obj2 = { query: trimmed, filters: null, boosters: null };
          obj3 = { guild: guildIdFromSearchContext };
          obj2.filters = obj3;
          const tmp5Result1 = SearchUtils;
          obj2.boosters = AutocompleteUtils.getBoosterMap(AutocompleterResultTypes.USER);
          context3.setQuery(obj2);
          autocompletes = undefined;
          if (value != null) {
            autocompletes = value.autocompletes;
          }
          if (autocompletes == null) {
            autocompletes = [];
          }
          flag = false;
          const tmp5Result2 = AutocompleteUtils;
        }
      }
      const context2 = value1.context;
      context2.clearQuery();
      autocompletes = getAutocompleteList(searchContext, autocompleteMode, tokens);
      flag = true;
    } else {
      value2 = map1.get(searchContextId);
      if (null != value2) {
        const context = value2.context;
        context.clearQuery();
        value2.results = [];
      }
      autocompletes = getAutocompleteList(searchContext, autocompleteMode, tokens);
      flag = true;
    }
  },
  SEARCH_QUERY_TEXT_CLEAR: function handleSearchQueryTextClear(id) {
    id = id.id;
    value = map1.get(id);
    if (null != value) {
      const context = value.context;
      context.destroy();
      value.results = [];
      map1.delete(id);
    }
    map.delete(id);
    c13 = null;
  },
  CHANNEL_CREATE: handleChannelCreateOrDelete,
  CHANNEL_DELETE: handleChannelCreateOrDelete,
  STREAMER_MODE_UPDATE: function handleStreamerModeUpdate() {
    let tmp = null != c13;
    if (tmp) {
      tmp = rebuildAutocompleteResults(c13);
    }
    return tmp;
  },
  CHANNEL_SELECT: function handleChannelSelect() {
    let tmp = null != c13;
    if (tmp) {
      tmp = rebuildAutocompleteResults(c13);
    }
    return tmp;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/SearchAutocompleteStore.tsx");

export default searchAutocompleteStoreClass;
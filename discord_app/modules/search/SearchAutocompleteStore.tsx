// === Module 11970: SearchAutocompleteStore ===

// Module 11970 (SearchAutocompleteStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import isEqualDefault from "isEqual" /* 5010 */;
import AutocompleteUtils from "AutocompleteUtils" /* 5621 */;
import autocompleter_AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 5700 */;
import GuildUtilsDefault from "GuildUtils" /* 5704 */;
import UserSearchManagerDefault from "UserSearchManager" /* 9500 */;
import SearchUtils from "SearchUtils" /* 11968 */;
import SearchTokens from "SearchTokens" /* 11969 */;
import isGuildLikeSearchContext from "isGuildLikeSearchContext" /* 11971 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import StreamerModeStore from "StreamerModeStore" /* 4723 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const SearchTokensDefault = SearchTokens;
let user;

let SearchTokenTypes;
let c9;
function handleUserSearchResults(searchContext, results) {
  let cursorScope;
  let mode;
  let obj6;
  let query;
  let tokens;
  function fixUserResults(results, arg1) {
    const items = [];
    const iter = results[Symbol.iterator]();
    const nextResult = iter.next();
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
              let obj2 = { text: tmp8, user: obj3 };
              let arr = items.push(obj2);
            }
          }
        }
        continue;
      }
      return items;
    }
  }
  results = results.results;
  let obj = SearchUtils;
  const searchContextId = obj.getSearchContextId(searchContext);
  const value = map1.get(searchContextId);
  const value3 = map.get(searchContextId);
  if (null != value) {
    if (null != value3) {
      const mode1 = value3.mode;
      let tmp8 = mode1.type === constants.FILTER;
      if (tmp8) {
        const filter = mode1.filter;
        let tmp6 = null != filter;
        if (tmp6) {
          tmp6 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
        }
        tmp8 = tmp6;
      }
      if (tmp8) {
        let num = 3;
        if (value3.mode.type === constants.FILTER) {
          num = 10;
        }
        value.results = fixUserResults(results, num);
        ({ mode, tokens } = value3);
        ({ query, cursorScope } = value3);
        let tmp10 = getAutocompleteList(searchContext, mode, tokens);
        const tmpResult = SearchUtils;
        const searchContextId1 = tmpResult.getSearchContextId(searchContext);
        let value4 = map1.get(searchContextId1);
        if (value4 == null) {
          const obj4 = { results: [], context: obj6.getUserSearchContext(handleUserSearchResults.bind(null, searchContext)) };
          value4 = obj4;
          obj6 = UserSearchManagerDefault;
        }
        const result = map1.set(searchContextId1, value4);
        const obj5 = { searchContext, query, mode, tokens, cursorScope, autocompletes: tmp10 };
        const result1 = map.set(searchContextId, obj5);
        searchAutocompleteStoreClass.emitChange();
      }
    }
  }
}
function getAutocompleteList(searchContext, autocompleteMode, tokens) {
  let filter;
  let obj3;
  let token;
  const type = autocompleteMode.type;
  if (constants.FILTER === type) {
    let tmp25;
    ({ filter, token } = autocompleteMode);
    let num = c17;
    if (c17 === undefined) {
      num = 10;
    }
    let currentUser;
    let tmp4 = null;
    if (null != filter) {
      let autocompletions;
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
      const length = str.length;
      const obj = isGuildLikeSearchContext;
      if (obj.isGuildLikeSearchContext(searchContext)) {
        let tmp8 = null != filter;
        if (tmp8) {
          tmp8 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
        }
        if (tmp8) {
          let results;
          if (0 !== length) {
            const tmp6Result = SearchUtils;
            const searchContextId = tmp6Result.getSearchContextId(searchContext);
            let value = map1.get(searchContextId);
            if (value == null) {
              const obj2 = { results: [], context: obj3.getUserSearchContext(handleUserSearchResults.bind(null, searchContext)) };
              value = obj2;
              obj3 = UserSearchManagerDefault;
            }
            const result = map1.set(searchContextId, value);
            results = value.results;
          }
          let arr3 = results;
          if (null != results) {
            let tmp19 = null != filter;
            if (tmp19) {
              tmp19 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
            }
            arr3 = results;
            if (tmp19) {
              arr3 = results;
              const tmp6Result2 = SearchTokens;
              if (tmp6Result2.isMeAutcompleteAnswer(str)) {
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
                  const obj4 = { text: ME, user: currentUser };
                  found.unshift(obj4);
                  arr3 = found;
                }
              }
            }
          }
          let tmp24 = null;
          if (null != arr3) {
            tmp24 = null;
            if (0 !== arr3.length) {
              tmp24 = { group: filter, results: arr3 };
              const obj5 = { group: filter, results: arr3 };
            }
          }
          tmp4 = tmp24;
        }
      }
      const tmp15 = SearchTokensDefault[filter];
      let getAutocompletions;
      if (tmp15 != null) {
        getAutocompletions = tmp15.getAutocompletions;
      }
      if (null != getAutocompletions) {
        const obj6 = { query: str, searchContext, maxResults: num, tokens };
        autocompletions = getAutocompletions(obj6);
      } else {
        autocompletions = [];
      }
      results = autocompletions;
    }
    if (null != tmp4) {
      const items = [tmp4];
      tmp25 = items;
    } else {
      tmp25 = closure_14;
    }
    return tmp25;
  } else {
    return closure_14;
  }
}
function handleChannelCreateOrDelete() {
  const obj = SearchUtils;
  obj.clearTokenCache();
}
function rebuildAutocompleteResults(c13) {
  let cursorScope;
  let mode;
  let obj4;
  let query;
  let tokens;
  const obj = SearchUtils;
  const searchContextId = obj.getSearchContextId(searchContext);
  const value = map.get(searchContextId);
  if (null == value) {
    return false;
  } else {
    ({ mode, tokens } = value);
    ({ query, cursorScope } = value);
    const tmp11 = getAutocompleteList(searchContext, mode, tokens);
    const tmpResult = SearchUtils;
    const searchContextId1 = tmpResult.getSearchContextId(searchContext);
    let value2 = map1.get(searchContextId1);
    if (value2 == null) {
      const obj3 = { results: [], context: obj4.getUserSearchContext(handleUserSearchResults.bind(null, searchContext)) };
      value2 = obj3;
      obj4 = UserSearchManagerDefault;
    }
    const result = map1.set(searchContextId1, value2);
    const obj5 = { searchContext, query, mode, tokens, cursorScope, autocompletes: tmp11 };
    const result1 = map.set(searchContextId, obj5);
  }
}
({ SearchPopoutModes: c9, SearchTokenTypes } = Constants);
const ME = Constants.ME;
const AutocompleterResultTypes = autocompleter_AutocompleterConstants.AutocompleterResultTypes;
let c13 = null;
let closure_14 = [];
const map = new Map();
const map1 = new Map();
let c17 = 10;
let items = [, , ];
({ FILTER_FROM: arr[0], FILTER_IN: arr[1], FILTER_MENTIONS: arr[2] } = SearchTokenTypes);
new Set(items);
const Store = get_initializedDefault.Store;
class SearchAutocompleteStoreClass extends Store {
  initialize() {
    this.waitFor(ChannelStore, GuildMemberStore, GuildStore, SelectedChannelStore, StreamerModeStore, UserStore);
  }
  getState(searchContext) {
    let obj3;
    const obj = SearchUtils;
    let value = map.get(obj.getSearchContextId(searchContext));
    if (value == null) {
      const obj2 = { searchContext, query: "", mode: obj3, tokens: [], cursorScope: null, autocompletes: [] };
      value = obj2;
      obj3 = { type: constants.EMPTY, filter: null, token: null };
    }
    return value;
  }
  getSelectedSearchContext() {
    return c13;
  }
}
const prototype = SearchAutocompleteStoreClass.prototype;
SearchAutocompleteStoreClass.displayName = "SearchAutocompleteStore";
let obj = {
  SEARCH_AUTOCOMPLETE_INITIALIZE: function handleSearchAutocompleteInitialize(searchContext) {
    searchContext = searchContext.searchContext;
    if (!isEqualDefault(c13, searchContext)) {
      c13 = searchContext;
      const obj = SearchUtils;
      obj.clearTokenCache();
    }
    rebuildAutocompleteResults(searchContext);
  },
  SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function handleSearchAutocompleteQueryUpdate(arg0) {
    let autocompletes;
    let cursorScope;
    let flag;
    let obj11;
    let tmp5Result6;
    let tmpResult;
    let tmpResult3;
    let tokens;
    ({ searchContext, tokens, cursorScope } = arg0);
    if (!isEqualDefault(c13, searchContext)) {
      c13 = searchContext;
      const obj = SearchUtils;
      obj.clearTokenCache();
    }
    const obj2 = SearchUtils;
    const queryFromTokens = obj2.getQueryFromTokens(tokens);
    const obj3 = SearchUtils;
    const autocompleteMode = obj3.getAutocompleteMode(cursorScope, tokens);
    const obj4 = SearchUtils;
    const searchContextId = obj4.getSearchContextId(searchContext);
    const value = map.get(searchContextId);
    if (null != value) {
      if (queryFromTokens === value.query) {
        autocompletes = value.autocompletes;
        flag = false;
      }
      const tmp5Result = SearchUtils;
      const searchContextId1 = tmp5Result.getSearchContextId(searchContext);
      let value4 = map1.get(searchContextId1);
      if (value4 == null) {
        const obj6 = { results: [], context: tmpResult.getUserSearchContext(handleUserSearchResults.bind(null, searchContext)) };
        value4 = obj6;
        tmpResult = UserSearchManagerDefault;
      }
      const result = map1.set(searchContextId1, value4);
      const obj8 = { searchContext, query: queryFromTokens, mode: autocompleteMode, tokens, cursorScope, autocompletes };
      const result1 = map.set(searchContextId, obj8);
      return flag;
    }
    let tmp9 = autocompleteMode.type === constants.FILTER;
    if (tmp9) {
      const filter = autocompleteMode.filter;
      let tmp10 = null != filter;
      if (tmp10) {
        tmp10 = filter === SearchTokenTypes.FILTER_FROM || filter === SearchTokenTypes.FILTER_MENTIONS;
      }
      tmp9 = tmp10;
    }
    if (tmp9) {
      const tmp5Result4 = SearchUtils;
      const searchContextId2 = tmp5Result4.getSearchContextId(searchContext);
      let value5 = map1.get(searchContextId2);
      if (value5 == null) {
        const obj9 = { results: [], context: tmpResult3.getUserSearchContext(handleUserSearchResults.bind(null, searchContext)) };
        value5 = obj9;
        tmpResult3 = UserSearchManagerDefault;
      }
      const result2 = map1.set(searchContextId2, value5);
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
          const tmp5Result5 = SearchUtils;
          const guildIdFromSearchContext = tmp5Result5.getGuildIdFromSearchContext(searchContext);
          if (null != guildIdFromSearchContext) {
            const tmpResult4 = GuildUtilsDefault;
            const members = tmpResult4.requestMembers(guildIdFromSearchContext, trimmed, c17);
          }
          const context3 = value5.context;
          const setQuery = context3.setQuery;
          const obj10 = { query: trimmed, filters: obj11, boosters: tmp5Result6.getBoosterMap(AutocompleterResultTypes.USER) };
          obj11 = { guild: guildIdFromSearchContext };
          tmp5Result6 = AutocompleteUtils;
          setQuery(obj10);
          let autocompletes1;
          if (value != null) {
            autocompletes1 = value.autocompletes;
          }
          if (autocompletes1 == null) {
            autocompletes1 = [];
          }
          flag = false;
          autocompletes = autocompletes1;
        }
      }
      const context2 = value5.context;
      context2.clearQuery();
      autocompletes = getAutocompleteList(searchContext, autocompleteMode, tokens);
      flag = true;
    } else {
      const value6 = map1.get(searchContextId);
      if (null != value6) {
        const context = value6.context;
        context.clearQuery();
        value6.results = [];
      }
      autocompletes = getAutocompleteList(searchContext, autocompleteMode, tokens);
      flag = true;
    }
  },
  SEARCH_QUERY_TEXT_CLEAR: function handleSearchQueryTextClear(id) {
    id = id.id;
    const value = map1.get(id);
    if (null != value) {
      const context = value.context;
      context.destroy();
      value.results = [];
      map1.delete(id);
    }
    map.delete(id);
    let c13 = null;
  },
  CHANNEL_CREATE: handleChannelCreateOrDelete,
  CHANNEL_DELETE: handleChannelCreateOrDelete,
  STREAMER_MODE_UPDATE: function handleStreamerModeUpdate() {
    const tmp = null != c13 && rebuildAutocompleteResults(c13);
    return tmp;
  },
  CHANNEL_SELECT: function handleChannelSelect() {
    const tmp = null != c13 && rebuildAutocompleteResults(c13);
    return tmp;
  }
};
const searchAutocompleteStoreClass = new SearchAutocompleteStoreClass(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/search/SearchAutocompleteStore.tsx");

export default searchAutocompleteStoreClass;